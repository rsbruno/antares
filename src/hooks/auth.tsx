import React,
{
    createContext,
    useContext,
    useState,
    ReactNode
} from 'react'

type User = {
    id:String;
    username:string;
    firstname:string;
    avatar:string;
    email:string;
    token:string;
}

type AuthContextData = {
    user:User;
}

type AuthContextProps = {
    children:ReactNode
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({children}:AuthContextProps){

    const [user, setUser] = useState<User>({} as User);

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export {
    AuthProvider,
    useAuth
}