import{createContext,useState,useEffect,useContext} from 'react';

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null)
    const login=async(userForm)=>{
        
    }
    const register=async(userForm)=>{
        
    }
    const logout=async()=>{
        
    }
    const contextdata={
        currentUser,
        login,
        logout,
        register        
    }
    return(
        <AuthContext.Provider value={contextdata}>
            {children}
        </AuthContext.Provider>    
    )

}
export const useAuth=()=>useContext(AuthContext)