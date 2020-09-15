import React, { useState, createContext } from 'react';

export const contextComponet = createContext<any>({});

export const ContextProvider = (prop: any) => {
  const [getUser, setUser] = useState();
  return (
    <contextComponet.Provider value={[getUser,setUser]}>
      {prop.children}
    </contextComponet.Provider>
  )
}
