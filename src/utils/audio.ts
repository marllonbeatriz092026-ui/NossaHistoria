/**
 * Utilitário de Áudio Nostálgico & Reprodutor de Voz
 * Suporta arquivo MP3 real (ex: /audio/message.mp3) com fallback via Web Audio API
 * para nunca ficar em silêncio caso o arquivo ainda não tenha sido colocado na pasta.
 */

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlayingCrackle: boolean = false;
  private crackleNode: AudioNode | null = null;
  private timer: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Toca uma melodia suave de caixinha de música analógica (acorde romântico em Dó Maior 9 / Fá com 7ª Maior)
  playChimeLullaby() {
    this.initContext();
    if (!this.ctx) return;

    const notes = [261.63, 329.63, 392.00, 493.88, 523.25, 659.25]; // C4, E4, G4, B4, C5, E5
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.28);

      gain.gain.setValueAtTime(0.001, now + idx * 0.28);
      gain.gain.exponentialRampToValueAtTime(0.12, now + idx * 0.28 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.28 + 2.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.28);
      osc.stop(now + idx * 0.28 + 2.5);
    });
  }

  // Efeito sutil de vinil nostálgico / chuva suave
  toggleVinylCrackle(enable: boolean) {
    if (!enable) {
      if (this.crackleNode) {
        try {
          this.crackleNode.disconnect();
        } catch {
          // ignore
        }
        this.crackleNode = null;
      }
      if (this.timer) {
        window.clearInterval(this.timer);
        this.timer = null;
      }
      this.isPlayingCrackle = false;
      return;
    }

    this.initContext();
    if (!this.ctx) return;

    this.isPlayingCrackle = true;
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Pequenos estalos sutis de disco de vinil antigo
      const isPop = Math.random() < 0.0015;
      data[i] = isPop ? (Math.random() * 2 - 1) * 0.15 : (Math.random() * 2 - 1) * 0.008;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 850;

    const gain = this.ctx.createGain();
    gain.gain.value = 0.25;

    noiseSource.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noiseSource.start();
    this.crackleNode = gain;
  }

  isCrackleActive() {
    return this.isPlayingCrackle;
  }
}

export const ambientAudio = new AmbientAudioEngine();
