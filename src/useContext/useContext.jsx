import { useState, createContext } from "react"

export const UserContext = createContext()


const MyProvider = ({children}) => {
   
 const [toggleLanguage, setToggleLanguage] = useState(false)

  console.log(toggleLanguage);

  const valueToShare = {
    setToggleLanguage,
    toggleLanguage,
  }

  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  )
}
export default MyProvider