// src/components/InputArea.js
import React from 'react';
import styled from 'styled-components';
import { useChat } from '../context/ChatContext';

// Componente para a área de input do chat
const InputArea = () => {
  const { userInput, setUserInput, sendUserMessage, waitingForInput } = useChat();
  
  // Manipular envio de mensagem
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      sendUserMessage(userInput);
    }
  };
  
  // Manipular mudança no input
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  
  // Manipular tecla pressionada (enviar ao pressionar Enter)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  
  return (
    <InputContainer>
      <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex' }}>
        <InputField
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={waitingForInput ? "Digite sua mensagem..." : "Aguardando resposta..."}
          disabled={!waitingForInput}
        />
        <SendButton 
          type="submit" 
          disabled={!waitingForInput || !userInput.trim()}
        >
          <SendIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </SendIcon>
        </SendButton>
      </form>
    </InputContainer>
  );
};

// Estilos do componente
const InputContainer = styled.div`
  padding: 15px;
  background-color: #000000; /* Alterado para preto */
  border-top: 1px solid #333;
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  flex: 1;
  background-color: #111; /* Um pouco mais claro que o fundo preto */
  border: 1px solid #333;
  border-radius: 20px;
  padding: 12px 15px;
  font-size: 0.95rem;
  color: #fff;
  outline: none;
  transition: border-color 0.2s ease;
  
  &:focus {
    border-color: #FF5722;
  }
  
  &::placeholder {
    color: #777;
  }
  
  &:disabled {
    background-color: #0a0a0a;
    cursor: not-allowed;
  }
`;

const SendButton = styled.button`
  background-color: #FF5722;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #E64A19;
  }
  
  &:disabled {
    background-color: #333;
    cursor: not-allowed;
  }
`;

const SendIcon = styled.svg`
  width: 20px;
  height: 20px;
  color: #000;
`;

export default InputArea;