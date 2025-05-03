# FuriaFan Chat

![FURIA Logo](https://images.seeklogo.com/logo-png/42/2/furia-esports-logo-png_seeklogo-428783.png)

## 📋 Visão Geral

FuriaFan Chat é um chatbot interativo desenvolvido para os torcedores da FURIA Esports, focado especialmente nos fãs do time de Counter-Strike 2. O projeto oferece uma experiência conversacional envolvente com conteúdo exclusivo sobre os jogadores, configurações, curiosidades e dicas do time.

## 🚀 Funcionalidades

- **Landing Page Atrativa**: Interface inicial moderna com informações sobre as funcionalidades do chatbot
- **Experiência Conversacional**: Chatbot interativo com fluxo de diálogo natural 
- **Cadastro de Usuários**: Sistema de coleta de informações básicas com validação e proteção de dados sensíveis
- **Menu Interativo**: Navegação intuitiva entre diferentes categorias de conteúdo
- **Informações Exclusivas**: Acesso a configurações dos jogadores, histórias e curiosidades
- **Design Temático**: Interface visual inspirada nas cores e identidade da FURIA
- **Responsividade**: Funciona em dispositivos desktop e mobile

## 🖥️ Conteúdo Disponível

O chatbot oferece informações detalhadas sobre:

1. **Configurações e Sensibilidade**: Resolução de tela e configurações de mira dos jogadores
2. **Perfil dos Jogadores**: Histórias e curiosidades sobre cada membro do time
3. **Redes Sociais**: Links diretos para as redes dos jogadores
4. **Conteúdo de Mídia**: Acesso aos vlogs e conteúdos do canal da FURIA
5. **Dicas Técnicas**: Granadas, posicionamento e táticas explicadas pelo Professor FalleN
6. **Aplicativo Mobile**: Informações sobre o app da FURIA para celular

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - React.js (v18.2.0)
  - React Router (v6.16.0)
  - Styled Components (v6.1.17)
  - React Markdown (v8.0.7)

- **Backend**:
  - Node.js 
  - Express.js (v4.18.2)
  - Firebase (v9.23.0)
  - Firebase Firestore (para armazenamento de dados)

- **Segurança**:
  - Validação de CPF
  - Proteção de dados sensíveis

## ⚙️ Instalação e Configuração

### Pré-requisitos

- Node.js (v14 ou superior)
- npm (v6 ou superior)
- Conta no Firebase

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/furiafan-chat.git
   cd furiafan-chat
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o Firebase**
   
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
   - Ative o Firestore Database no seu projeto
   - Obtenha as credenciais do projeto
   - Crie um arquivo `.env` na raiz do projeto com suas credenciais:

   ```
   REACT_APP_FIREBASE_API_KEY=sua_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=seu_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=seu_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=sua_app_id
   ```

4. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm start
   ```
   Isso iniciará o servidor de desenvolvimento e abrirá o projeto em `http://localhost:3000`

5. **Para executar o servidor backend (opcional)**
   ```bash
   npm run server
   ```

6. **Para executar ambos simultaneamente**
   ```bash
   npm run dev
   ```

## 📁 Estrutura do Projeto

```
furiafan-chat/
├── public/
│   ├── logo-furia.png
│   ├── furia-bot-avatar.png
│   ├── chat-preview.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── Chat.js             # Componente principal do chat
│   │   ├── InputArea.js        # Área de input de mensagens
│   │   ├── LandingPage.js      # Página inicial
│   │   └── MessageItem.js      # Componente de mensagem individual
│   ├── context/
│   │   └── ChatContext.js      # Gerenciamento de estado do chat
│   ├── firebase/
│   │   └── config.js           # Configuração do Firebase
│   ├── utils/
│   │   └── cpfUtils.js         # Utilitários para validação de CPF
│   ├── App.js                  # Componente principal
│   ├── index.js                # Ponto de entrada da aplicação
│   └── index.css               # Estilos globais
├── package.json
├── README.md
└── ...
```

## 🧠 Fluxo do Chatbot

O chatbot segue uma sequência lógica de interações:

1. **Boas-vindas**: Mensagem inicial de boas-vindas ao usuário
2. **Cadastro**: Coleta de nome, idade e CPF (opcional, com validação)
3. **Menu Principal**: Exibição das opções de conteúdo
4. **Interação com Conteúdo**: Exibição de informações com base na seleção
5. **Retorno ao Menu**: Opção para voltar ao menu principal após cada interação

## 🔧 Personalização

O projeto pode ser personalizado de diversas formas:

- **Conteúdo**: Edite as informações no arquivo `ChatContext.js`
- **Estilo**: Modifique os componentes e temas em `styled-components`
- **Fluxo de Conversa**: Ajuste a lógica conversacional no contexto
- **Firebase**: Configure regras de segurança adicionais

## 🌐 Implantação

Para implantar o projeto em produção:

1. **Build do projeto**
   ```bash
   npm run build
   ```

2. **Implantação no Firebase Hosting**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init
   firebase deploy
   ```

3. **Alternativas de Hospedagem**:
   - Vercel
   - Netlify
   - GitHub Pages
   - Heroku

## 📱 Responsividade

O chatbot é totalmente responsivo e funciona bem em:

- Desktops e laptops
- Tablets
- Smartphones

## 👥 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## ⚠️ Aviso Legal

Este é um projeto não oficial e não tem afiliação com a FURIA Esports. O uso de logotipos, nomes de jogadores e outras referências à FURIA são apenas para fins educacionais e demonstrativos.

---

Desenvolvido com 🧡 para os fãs da FURIA Esports
