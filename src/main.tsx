import { createRoot } from 'react-dom/client';
import React, { useState } from 'react';
import { RuntimeProvider } from './context';
import { Demo } from './Demo';
import "./global.css";
import ChatGreeting from './Chatgreeting';

const App = () => {
  const [flag, setFlag] = useState(true);

  return (
    <>
      <ChatGreeting flag={flag} />
      <RuntimeProvider>
        <Demo setFlag={setFlag} />
      </RuntimeProvider>
    </>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
