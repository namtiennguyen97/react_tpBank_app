import {createContext} from "react";
const AuthContxt = createContext()
function AuthContext({children}){
    return (
        <AuthContxt.Provider>
            {children}
        </AuthContxt.Provider>
    )
}
export default AuthContext