import styled from "styled-components";
import axios from "axios";
import HeaderLogo from "../../components/HeaderLogo";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DadosContext } from "../../context/DadosContext";

export default function LoginPage() {
    const {
        name, setName,
        email, setEmail,
        password, setPassword,
        token, setToken
    } = useContext(DadosContext);
    const navigate = useNavigate();

    function enviarDadosLogin(event) {
        event.preventDefault()
        
        const body = {email, password};

        axios.post("http://localhost:5000/sign-in", body)
        .then((resposta)=>{
            console.log(body);
            setToken(resposta.data.token);
            setEmail("");
            setPassword("");
            navigate("/home");
        })
        .catch((error)=>{
            console.log(error.response.data);
        })
    }

    return (
        <ContainerLogin>
            <HeaderLogo />
            <form onSubmit={enviarDadosLogin}>
                <ContainerInputsLogin>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="E-mail"
                        required
                    />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Senha"
                        required
                    />
                </ContainerInputsLogin>
                <ContainerButtonEnter>
                    <button type="submit">Entrar</button>
                    <Link to={"/cadastro"}>
                        <span>Primeira vez? Cadastre-se!</span>
                    </Link>
                </ContainerButtonEnter>
            </form>
        </ ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContainerInputsLogin = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    input{
        width: 326px;
        height: 58px;
        left: 25px;
        top: 233px;
        background: #FFFFFF;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        box-sizing: border-box;
        padding: 5px 15px;
        margin-top: 13px;
        ::placeholder{
            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }
    }
`
const ContainerButtonEnter = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
    button{
        width: 326px;
        height: 46px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        background-image: linear-gradient(92.88deg, #b60570 9.16%, #631e75 43.89%, #A328D6 64.72%);
        border-radius: 8px;
        border-style: none;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        flex-shrink: 0;
        padding: 0 1.6rem;
        text-align: center;
        text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
        transition: all .5s;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
            &&:hover {
                box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
                transition-duration: .5s;
            }
            /* @media (min-width: 768px) {
                padding: 0 2.6rem;
            } */
        }
        span{
            margin-top: 36px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            color: #FFFFFF;
        }
        a{
            text-decoration: none;
            margin-top: 36px;
        }
`
