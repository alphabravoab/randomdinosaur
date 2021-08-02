import React, { useState } from 'react';
import AppContext from '.';

const initialState = {
    loading: true
};

const ContextProvider = ({ children }) => {
  const [dino, setDino] = useState(initialState);
  const context = {
    setDino,
    dino,
  };

  return (
    <AppContext.Provider value={ context }> 
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;