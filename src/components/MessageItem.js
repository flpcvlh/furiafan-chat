// src/components/MessageItem.js
import React from 'react';
import styled from 'styled-components';
import { useChat } from '../context/ChatContext';
import ReactMarkdown from 'react-markdown';

// Componente para exibir uma mensagem individual
const MessageItem = ({ message }) => {
  const { sendUserMessage } = useChat();
  const isBot = message.type === 'bot';
  
  // Função para lidar com cliques em opções de menu
  const handleOptionClick = (option) => {
    sendUserMessage(option.text);
  };
  
  // Renderização condicional do conteúdo da mensagem com suporte a markdown
  const renderMessageContent = () => {
    return (
      <MessageText isBot={isBot}>
        <ReactMarkdown>
          {message.text}
        </ReactMarkdown>
      </MessageText>
    );
  };
  
  // Renderização condicional das opções (se existirem)
  const renderOptions = () => {
    if (!message.options) return null;
    
    return (
      <OptionsContainer>
        {message.options.map((option) => (
          <OptionButton 
            key={option.id} 
            onClick={() => handleOptionClick(option)}
          >
            {option.text}
          </OptionButton>
        ))}
      </OptionsContainer>
    );
  };
  
  return (
    <MessageContainer isBot={isBot}>
      {isBot && <BotAvatar src="/furia-bot-avatar.png" alt="FURIA Bot" />}
      
      <MessageContent isBot={isBot}>
        {renderMessageContent()}
        {renderOptions()}
      </MessageContent>
    </MessageContainer>
  );
};

// Estilos do componente
const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isBot ? 'row' : 'row-reverse'};
  align-items: flex-start;
  margin-bottom: 12px;
`;

const BotAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 8px;
  border: 2px solid #FF5722;
`;

const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
`;

const MessageText = styled.div`
  background-color: ${props => props.isBot ? '#111' : '#FF5722'};
  color: ${props => props.isBot ? '#fff' : '#000'};
  padding: 12px 15px;
  border-radius: 18px;
  border-bottom-left-radius: ${props => props.isBot ? '5px' : '18px'};
  border-bottom-right-radius: ${props => props.isBot ? '18px' : '5px'};
  font-size: 0.95rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  
  p {
    margin: 0;
  }
  
  p + p {
    margin-top: 8px;
  }
  
  strong, b {
    font-weight: 600;
  }
  
  em, i {
    font-style: italic;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 10px;
`;

const OptionButton = styled.button`
  background-color: #111;
  color: #fff;
  border: 1px solid #FF5722;
  border-radius: 12px;
  padding: 10px 15px;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #FF5722;
    color: #000;
  }
`;

export default MessageItem;