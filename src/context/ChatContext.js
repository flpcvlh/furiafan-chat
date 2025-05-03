// src/context/ChatContext.js
import React, { createContext, useState, useContext } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

// Criando o contexto
const ChatContext = createContext();

// Provider do contexto
export const ChatProvider = ({ children }) => {
  // Estado para armazenar as mensagens
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      type: 'bot',
      text: '👋 Olá, torcedor da FURIA! Seja bem-vindo ao FuriaFan, o seu espaço para conteúdo exclusivo, curiosidades e bastidores do nosso time de CS2. Vamos começar?',
      options: null
    },
    {
      id: 'name',
      type: 'bot',
      text: '📝 Primeiro, me diga seu nome:',
      options: null,
      waitForInput: true,
      inputType: 'text'
    }
  ]);
  
  // Estado para armazenar os dados do usuário
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    cpf: '',
    registrationComplete: false
  });
  
  // Estado para controlar o input do usuário
  const [userInput, setUserInput] = useState('');
  const [waitingForInput, setWaitingForInput] = useState(true);
  const [currentInputField, setCurrentInputField] = useState('name');
  
  // Função simples para validar CPF
  const isValidCPF = (cpf) => {
    // Se for "pular", considera válido
    if (cpf.toLowerCase() === 'pular') return true;
    
    // Remove caracteres não numéricos
    cpf = cpf.replace(/[^\d]/g, '');
    
    // Verifica se tem 11 dígitos
    return cpf.length === 11;
  };
  
  // Função para enviar mensagem do usuário
  const sendUserMessage = async (text) => {
    if (!text.trim()) return;
    
    // Adicionar mensagem do usuário ao estado
    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: text
    };
    
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    
    // Processar resposta com base no campo atual
    processUserInput(text);
  };
  
  // Processar a entrada do usuário com base no estado atual da conversa
  const processUserInput = (text) => {
    switch (currentInputField) {
      case 'name':
        // Salvar o nome e pedir a idade
        setUserData(prev => ({ ...prev, name: text }));
        addBotMessage('📅 Agora me diz sua idade:', null, true, 'text');
        setCurrentInputField('age');
        break;
        
      case 'age':
        // Salvar a idade e pedir o CPF
        setUserData(prev => ({ ...prev, age: text }));
        addBotMessage('📄 Se quiser receber conteúdos *EXCLUSIVOS* e *benefícios antecipados*, você pode informar seu CPF. Isso é **opcional**, mas quem preenche tem acesso a materiais únicos da FURIA, sorteios e mais!');
        addBotMessage('Digite seu CPF ou escreva "Pular":', null, true, 'text');
        setCurrentInputField('cpf');
        break;
        
      case 'cpf':
        if (text.toLowerCase() === 'pular') {
          // Usuário optou por pular
          setUserData(prev => ({ 
            ...prev, 
            cpf: '',
            registrationComplete: true
          }));
          
          // Salvar no Firebase e continuar
          saveUserData({ ...userData, cpf: '' });
          showMainMenu();
          setCurrentInputField('menu');
          setWaitingForInput(false);
        } else if (isValidCPF(text)) {
          // CPF válido - salvar uma versão "protegida"
          const securedCPF = `protected-${text}`;
          
          setUserData(prev => ({ 
            ...prev, 
            cpf: securedCPF,
            registrationComplete: true
          }));
          
          // Informar sucesso e salvar no Firebase
          addBotMessage('CPF válido! Seus dados estão protegidos para sua segurança.');
          saveUserData({ ...userData, cpf: securedCPF });
          showMainMenu();
          setCurrentInputField('menu');
          setWaitingForInput(false);
        } else {
          // CPF inválido
          addBotMessage('⚠️ CPF inválido. Por favor, digite um CPF válido ou escreva "Pular":', null, true, 'text');
        }
        break;
        
      case 'menu':
        // Processar seleção do menu
        handleMenuSelection(text);
        break;
        
      default:
        addBotMessage('Desculpe, não entendi. Vamos tentar novamente?');
    }
  };
  
  // Função para adicionar mensagem do bot
  const addBotMessage = (text, options = null, waitForInput = false, inputType = 'text') => {
    const botMessage = {
      id: Date.now().toString(),
      type: 'bot',
      text: text,
      options: options,
      waitForInput: waitForInput,
      inputType: inputType
    };
    
    setMessages(prev => [...prev, botMessage]);
    setWaitingForInput(waitForInput);
  };
  
  // Salvar dados do usuário no Firebase
  const saveUserData = async (userData) => {
    try {
      await addDoc(collection(db, "users"), {
        ...userData,
        timestamp: serverTimestamp()
      });
      console.log("Dados do usuário salvos com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar dados do usuário:", error);
    }
  };
  
  // Mostrar o menu principal
  const showMainMenu = () => {
    addBotMessage(
      `Cadastro concluído com sucesso, ${userData.name}! 🎉`,
      null
    );
    
    addBotMessage(
      '🔥 Escolha uma opção para começar sua experiência FURIA:',
      [
        { id: '1', text: '1️⃣ 🎯 Resolução de Tela dos Jogadores e Sensibilidade' },
        { id: '2', text: '2️⃣ 🧠 Curiosidades e Histórias de Cada Player' },
        { id: '3', text: '3️⃣ 📱 Redes Sociais Oficiais dos Jogadores' },
        { id: '4', text: '4️⃣ 🎥 Vlogs e Conteúdo Extra do Canal da FURIA' },
        { id: '5', text: '5️⃣ 💣 Dicas Técnicas com o Professor FalleN (granadas, posicionamento e táticas)' },
        { id: '6', text: '6️⃣ 📲 Download do App FuriaFan – Acompanhe tudo direto do celular!' }
      ],
      true
    );
  };
  
  // Processar seleção do menu
  const handleMenuSelection = (selection) => {
    // Remover qualquer caractere não numérico
    const option = selection.replace(/\D/g, '');
    
    switch (option) {
      case '1':
        handleMiraResolucaoOption();
        break;
      case '2':
        handleCuriosidadesOption();
        break;
      case '3':
        handleRedesSociaisOption();
        break;
      case '4':
        handleVlogsOption();
        break;
      case '5':
        handleDicasFallenOption();
        break;
      case '6':
        handleAppDownloadOption();
        break;
      default:
        addBotMessage('Por favor, escolha uma opção válida (1-6):', null, true);
        break;
    }
  };
  
  // Funções para cada opção do menu
  const handleMiraResolucaoOption = () => {
    addBotMessage(
      '🎯 **Configurações de Mira e Resolução dos Jogadores da FURIA**\n\n' +
      '• **FalleN**:\n Resolução 1280x960 (4:3 esticado), Sensibilidade 1.1\n\n' +
      '• **KSCERATO**:\n Resolução 1024x768 (4:3 esticado), Sensibilidade 1.8\n\n' +
      '• **yuurih**:\n Resolução 1280x960 (4:3 esticado), Sensibilidade 1.75\n\n' +
      '• **YEKINDAR**:\n Resolução 1280x960 (4:3 esticado), Sensibilidade 1.18\n\n' +
      '• **molodoy**:\n Resolução 1920x1080 (16:9), Sensibilidade 1.0\n\n' +
      'Quer ver alguma outra informação?'
    );
    
    // Retornar ao menu principal após exibir as informações
    returnToMainMenu();
  };
  
  const handleCuriosidadesOption = () => {
    addBotMessage(
      '🧠 **Curiosidades sobre os Jogadores**\n\n' +
      '• **FalleN**:\n Gabriel Toledo é considerado o "Pai do CS Brasileiro" e já conquistou 2 Majors com a SK Gaming.\n\n' +
      '• **KSCERATO**:\n Andrei Oliveira começou sua carreira na Team One e é conhecido por seu incrível aim e clutches.\n\n' +
      '• **yuurih**:\n Yuri Santos é um dos talentos mais consistentes do Brasil, famoso por seu estilo de jogo versátil.\n\n' +
      '• **YEKINDAR**:\n Mareks Gaļinskis é um dos principais riflers da Letônia e ficou conhecido por seu estilo agressivo e impacto na abertura de rounds.\n\n' +
      '• **molodoy**:\n Danil Golubenko começou sua carreira profissional em 2020, desde então, passou por equipes como ALLINNERS, DMS e AMKAL ESPORTS antes de se juntar à FURIA em abril de 2025!\n\n' +
      'Quer saber mais sobre algum jogador específico?'
    );
    
    // Retornar ao menu principal após exibir as informações
    returnToMainMenu();
  };
  
  const handleRedesSociaisOption = () => {
    addBotMessage(
      '📱 **Redes Sociais dos Jogadores**\n\n' +
      '• **FalleN**:\n  - Twitter: @FalleNCS\n  - Instagram: @fallen\n  - Twitch: /fallencs\n\n' +
      '• **KSCERATO**:\n  - Twitter: @kscerato\n  - Instagram: @ksceratooficial\n\n' +
      '• **yuurih**:\n  - Twitter: @yuurihcs\n  - Instagram: @yurihhcs\n\n' +
      '• **YEKINDAR**:\n  - Twitter: @yek1ndar\n  - Instagram: @yek1ndar\n\n' +
      '• **molodoy**:\n  - Twitter: @tvoy_molodoy\n  - Instagram: danil.molodoy_\n\n' +
      'Fique por dentro de todas as novidades seguindo nossos jogadores!'
    );
    
    // Retornar ao menu principal após exibir as informações
    returnToMainMenu();
  };
  
  const handleVlogsOption = () => {
    addBotMessage(
      '🎥 **Conteúdo Extra da FURIA**\n\n' +
      'Confira nossos últimos vídeos:\n\n' +
      '• **FURIA Vlog**: "Um dia na Gaming House"\n' +
      '• **Bastidores**: "Preparação para o Major"\n' +
      '• **Perfil**: "A história de superação do yuurih"\n' +
      '• **Tutorial**: "Treine como um pro com FalleN"\n\n' +
      'Acesse nosso canal no YouTube: youtube.com/furiagg para assistir esses e outros conteúdos exclusivos!'
    );
    
    // Retornar ao menu principal após exibir as informações
    returnToMainMenu();
  };
  
  const handleDicasFallenOption = () => {
    addBotMessage(
      '💣 **Dicas Técnicas com o Professor FalleN**\n\n' +
      '**Granadas essenciais**:\n' +
      '• Smoke da Connector para A em Mirage: Posicione-se no canto da escada, mire 2 pixels acima da antena e arremesse.\n\n' +
      '**Posicionamento**:\n' +
      '• Em pistol rounds, privilegiar posições com cobertura e potencial de multi-kills.\n\n' +
      '**Táticas**:\n' +
      '• Sempre manter um jogador como lurker para garantir informação e controle de mapa.\n\n' 
    );
    
    // Retornar ao menu principal após exibir as informações
    returnToMainMenu();
  };
  
  const handleAppDownloadOption = () => {
    addBotMessage(
      '📲 **App FuriaFan**\n\n' +
      'Baixe agora o aplicativo FuriaFan e tenha:\n\n' +
      '• Alertas de início de partidas\n' +
      '• Estatísticas em tempo real\n' +
      '• Chat exclusivo com outros fãs\n' +
      '• Conteúdo exclusivo e promoções\n\n' +
      'Disponível para iOS e Android!\n' +
      'Links de download:\n' +
      '• iOS: [App Store Link]\n' +
      '• Android: [Play Store Link]\n\n' +
      'Baixe agora e não perca nenhuma novidade da FURIA!'
    );
    
    // Retornar ao menu principal após exibir as informações
    returnToMainMenu();
  };
  
  // Função para retornar ao menu principal
  const returnToMainMenu = () => {
    setTimeout(() => {
      addBotMessage(
        '🔥 Escolha outra opção para continuar:',
        [
          { id: '1', text: '1️⃣ 🎯 Resolução de Tela dos Jogadores e Sensibilidade' },
          { id: '2', text: '2️⃣ 🧠 Curiosidades e Histórias de Cada Player' },
          { id: '3', text: '3️⃣ 📱 Redes Sociais Oficiais dos Jogadores' },
          { id: '4', text: '4️⃣ 🎥 Vlogs e Conteúdo Extra do Canal da FURIA' },
          { id: '5', text: '5️⃣ 💣 Dicas Técnicas com o Professor FalleN (granadas, posicionamento e táticas)' },
          { id: '6', text: '6️⃣ 📲 Download do App FuriaFan – Acompanhe tudo direto do celular!' }
        ],
        true
      );
    }, 1000);
  };
  
  // Valores exportados pelo contexto
  const contextValue = {
    messages,
    userInput,
    setUserInput,
    sendUserMessage,
    userData,
    waitingForInput
  };
  
  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat deve ser usado dentro de um ChatProvider');
  }
  return context;
};