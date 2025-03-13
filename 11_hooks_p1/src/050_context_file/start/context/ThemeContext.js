// こちらにuseContextの定義を記述して他のファイルで呼び出すようにする

import { useContext, useState, createContext } from "react";
export const MyContext = createContext();

// ThemeContextのProviderで挟みたいものはchildrenとしてpropsで取得する
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    return (
        <MyContext.Provider value={[ theme, setTheme ]}>
            {children}
        </MyContext.Provider>
    );
};

export const useTheme = () => useContext(MyContext);
