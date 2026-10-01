# Nossa História — Uma Experiência Digital 💌

Um presente romântico, íntimo, cinematográfico e sofisticado, concebido sob a direção de arte **"Cinematic Love Story"**. Desenvolvido para transformar as memórias, músicas, cartas, fotografias, segredos e sonhos de um casal em uma verdadeira jornada digital interativa.

---

## ✨ Características e Capítulos

01. **Abertura (Hero Cinematográfico):** Fotografia em tela cheia, tipografia editorial, data do começo de vocês e transição suave.
02. **Nosso Tempo (Contador em Tempo Real):** Contagem ininterrupta de anos, meses, dias, horas, minutos e segundos que atualiza sem recarregar a página, além de contagem regressiva para o próximo capítulo.
03. **Nossa História (Linha do Tempo):** Timeline vertical editorial com datas, fotos, cidades e músicas de fundo.
04. **Nossas Memórias (Scrapbook & Lightbox):** Galeria estilo polaroid com fitas washi tape, inclinações sutis, legendas e visualizador em alta definição navegável por teclado (setas ← → e ESC).
05. **Nossa Trilha Sonora:** Player retrô de disco de vinil / fita cassete, com rotação analógica, histórias de cada canção, links diretos para Spotify/YouTube e prévias sonoras suaves.
06. **Cartas Para Você ("Abra quando..."):** Envelopes com selo de cera e coelhinho que se desdobram em papéis de carta elegantes.
07. **Coisas Que Amo Em Você:** Lista de razões com números editoriais grandes e destaques individuais.
08. **Só Nós Dois Entendemos:** Espaço dedicado às piadas internas, escapadas na madrugada e momentos hilários.
09. **Lugares da Nossa História:** Atlas cartográfico estilizado com pinos interativos e histórias de cada cantinho especial.
10. **Ainda Quero Viver Com Você:** Bucket list interativa com planos futuros e botão que celebra com confetes ao marcar um sonho como realizado.
11. **Cápsula do Tempo:** Mensagens trancadas com data simbólica para abrir no futuro.
12. **O Nosso Segredo:** Cofre com palavra-chave configurável e dica doce que desbloqueia uma mensagem especial.
13. **A Surpresa Final:** Botão com escurecimento cinematográfico e vale-experiência exclusivo.
14. **Carta Final & Encerramento:** Leitura pura, sem ruídos visuais, com declaração final e o símbolo do infinito `15/05/2023 → ∞`.
- **Áudio & Voz:** Player de gravação de voz pessoal em `/public/audio/message.mp3` com animação de onda sonora (waveform) e fallback suave via Web Audio API.
- **Atmosfera Sonora Nostálgica:** Botão no menu superior que ativa o som crepitante de disco de vinil antigo e acordes delicados.
- **Easter Eggs:** Três segredos escondidos (5 cliques no coelhinho, digitar "LOVE" ou "COELHO" no teclado, ou clicar na menor estrela no rodapé).

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 18 ou superior).

### Instalação e Execução
```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Compilar para produção
npm run build

# 4. Pré-visualizar o build de produção
npm run preview
```

---

## 🎨 Como Personalizar os Dados (Sem Mexer em Código!)

Toda a experiência foi projetada com arquitetura modular. Para personalizar o site para o seu relacionamento, basta editar os arquivos na pasta `/src/data/`:

### 1. Nome, Data e Configurações Centrais (`/src/data/siteConfig.ts`)
Abra o arquivo `src/data/siteConfig.ts` e altere:
- `partnerName`: O nome ou apelido dela (ex: `"Isabela"`).
- `authorName`: Seu nome ou assinatura (ex: `"Seu Amor"`).
- `relationshipStartDate`: Data exata em que começaram a namorar no formato `YYYY-MM-DDTHH:mm:ss` (ex: `"2023-05-15T20:30:00"`).
- `nextChapterDate`: Próximo evento ou aniversário futuro (ex: `"2027-05-15T00:00:00"`).
- `secretPassphrase`: A palavra-chave para abrir a área secreta (ex: `"coelho"` ou `"sempre"`).
- `secretHint`: A dica para ela acertar a senha.
- `voiceAudioSrc`: Caminho do seu áudio pessoal.

### 2. Fotos e Imagens
- As fotos principais podem ser colocadas em `/public/images/` ou `/src/assets/images/`.
- No arquivo `src/data/memories.ts`, substitua os links de imagem no campo `image: "/minha-foto.jpg"` pelo caminho das suas próprias fotos.
- Você pode adicionar quantas fotos quiser na galeria duplicando um bloco no array `memories`.

### 3. Linha do Tempo (`/src/data/timeline.ts`)
- Adicione novos marcos da história de vocês copiando um item no array `timelineEvents` com data, título, descrição, local e foto.

### 4. Músicas (`/src/data/songs.ts`)
- Insira as músicas importantes de vocês com os links do Spotify, YouTube ou Apple Music e a história de por que essa canção é marcante.

### 5. Cartas de Amor (`/src/data/letters.ts`)
- Escreva novas cartas nos envelopes com as frases de gatilho que preferir (ex: `"Abra quando estiver triste"`, `"Abra quando tiver saudade"`).

### 6. Gravação de Voz Pessoal
- Grave um áudio curto no celular, salve como `message.mp3` e coloque na pasta `/public/audio/message.mp3`. O player do Capítulo de Áudio reproduzirá a sua voz automaticamente!

### 7. Carta Final (`/src/data/finalLetter.ts`)
- Edite os parágrafos da carta de encerramento em `finalLetter.ts` com seus votos e sentimentos mais profundos.

---

## 🐰 Detalhes e O Coelhinho
Como ela ama coelhinhos, o site conta com:
- Ícone minimalista de coelhinho desenhado à mão no logotipo superior;
- Selo de coelhinho nos envelopes das cartas de amor;
- Toca do coelho secreta desbloqueada após 5 cliques no coelho do menu;
- Sonho na lista do futuro para adoção de um coelhinho de estimação.

---

## 🌐 Publicação
Para publicar na internet (Vercel, Netlify, Cloud Run, GitHub Pages):
```bash
npm run build
```
A pasta `dist` gerada está pronta para ser servida em qualquer hospedagem estática gratuita ou de sua preferência!
