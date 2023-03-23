import {useState,createContext,useContext} from 'react'

 const ThemeContext =createContext();

export const ThemeProvider = ({children}) => {
   
    const [login ,setLogin] =useState(false)
   
  const handlogin=()=>
  {
    setLogin(true)
  }
  const handlogout=()=>{
    setLogin(false)
  }
    return(
        <ThemeContext.Provider value={{handlogin,handlogout,login}}>{children}</ThemeContext.Provider>
    )
}
export const useTheme = () => {
    return useContext(ThemeContext)
}