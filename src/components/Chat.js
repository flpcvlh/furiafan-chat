// src/components/Chat.js
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useChat } from '../context/ChatContext';
import MessageItem from './MessageItem';
import InputArea from './InputArea';

// Componente principal do chat
const Chat = () => {
  const { messages } = useChat();
  const messagesEndRef = useRef(null);

  // Efeito para rolar para a última mensagem quando uma nova é adicionada
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Função para rolar para o final do chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <Logo src="/logo-furia.png" alt="FURIA Logo" />
        <Title>FuriaFan Chat</Title>
      </ChatHeader>
      
      <MessagesContainer>
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      
      <InputArea />
    </ChatContainer>
  );
};

// Estilos do componente
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  background-color: #000000; /* Alterado para preto puro */
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #333;
  box-shadow: 0 0 20px rgba(255, 87, 34, 0.3);
  
  @media (max-width: 600px) {
    max-width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #0a0a0a; /* Um pouco mais claro que o fundo principal */
  border-bottom: 2px solid #FF5722;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 15px;
`;

const Title = styled.h1`
  color: #FF5722;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #000000; /* Confirmando que a área de mensagens também é preta */
  
  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #000000;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #FF5722;
    border-radius: 3px;
  }
`;

export default Chat;