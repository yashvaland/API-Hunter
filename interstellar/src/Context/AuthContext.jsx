import { createContext, useState } from "react";

export const AuthContext=createContext() 

function AuthContextProvider({children}) {
    let initialstate={
        isAuth:false,
        token:null
    }
    const [Auth,setAuth]=useState(initialstate);

    const loginUser=(token)=>{
        setAuth({
            isAuth:true,
            token:token
        })
    }
    const logoutUser=()=>{
        setAuth({
            isAuth:false,
            token:null
        })
    }
    return <AuthContext.Provider value={{Auth,loginUser,logoutUser}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;
