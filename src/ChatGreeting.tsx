import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Message = styled.div<{ delay: number }>`
  opacity: 0;
  background-color: #bdb7b765;
  width: 80%; // Adjust the width if needed
  max-width: 300px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: "Fredoka", sans-serif;
  font-weight: 400;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const MessageContainer = styled.div`
  position: fixed;
  bottom: 100px; // Adjust this value if you want more spacing from the bottom
  right: 10px; // Adjust to move messages to the right
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 0.5; // Make sure it appears above other content
`;

const ChatGreeting: React.FC = (props) => {
    const flag = props.flag;
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  
  useEffect(() => {
    // Delay to simulate messages showing up one by one
    const timer = setTimeout(() => {
      setMessages([
        "Hello!",
        "I'm Heather, your client concierge!",
        "What can I assist you with?"
      ]);
      setShowMessages(true);
    }, 300); // Adjust the timing for when messages start to appear

    return () => clearTimeout(timer);
  }, []);

  return (
    <MessageContainer>
    { flag && showMessages && messages.map((message, index) => (
        <Message key={index} delay={index * 1}>
          {message}
        </Message>
      ))}
    </MessageContainer>
  );
};

export default ChatGreeting;
