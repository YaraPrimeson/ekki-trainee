import React, {createContext} from 'react';

export const AppContext = createContext({})

const Context = ({children}) => {
    const themes = {
        light: {
            foreground: "#000000",
            background: "#eeeeee"
        },
        dark: {
            foreground: "#ffffff",
            background: "#222222"
        }
    };

    return (
        <AppContext.Provider value={{themes}}>
            <div>
                {children}
            </div>
        </AppContext.Provider>
    );
};

export default Context;
