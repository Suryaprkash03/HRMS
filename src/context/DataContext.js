import { createContext, useState } from "react";
const DataContext = createContext()

export const DataProvider= ({children}) =>{
    const [login,setLogin] = useState(false)
    return <DataContext.Provider
    value={{
       login:login,setLogin:setLogin
    }}
    >{children}</DataContext.Provider>
}

export default DataContext;