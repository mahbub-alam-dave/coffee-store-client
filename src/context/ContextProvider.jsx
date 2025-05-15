import React from 'react';
import { ContextValue } from './ContextValues';

const ContextProvider = ({children}) => {

    const values = {

    }
    return (
        <ContextValue.Provider value={values}>
            {children}
        </ContextValue.Provider>
    );
};

export default ContextProvider;