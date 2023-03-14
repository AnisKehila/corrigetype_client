import { createContext, useContext } from 'react'

const ContextProvider = createContext();
function useProvider() {
    return useContext(ContextProvider);
}
export default function NavProvider({children}) {
    return (
        <ContextProvider.Provider value={useProvider}>
            {children}
        </ContextProvider.Provider>
    )
}
