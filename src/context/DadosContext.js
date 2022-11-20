import { createContext, useState } from "react";
export const DadosContext = createContext();

export default function ContextProvider({ children }) {

    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [token, setToken] = useState("")
    const [none, setNone] = useState("none")
    const [transacoes, setTransacoes] = useState("")
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")

    return (
        <DadosContext.Provider value={{
            name, setName,
            img, setImg,
            email, setEmail,
            password, setPassword,
            token, setToken,
            none, setNone,
            confirmPassword, setConfirmPassword,
            transacoes, setTransacoes,
            value, setValue,
            description, setDescription
        }}>
            {children}
        </DadosContext.Provider>
    )
}