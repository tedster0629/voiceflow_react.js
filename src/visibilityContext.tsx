// visibilityContext.js
import { createContext, useContext, useState } from 'react';

const VisibilityContext = createContext({
  showMessage: true,
  setShowMessage: (value) => {},
});

export const VisibilityProvider = ({ children }) => {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <VisibilityContext.Provider value={{ showMessage, setShowMessage }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => useContext(VisibilityContext);
