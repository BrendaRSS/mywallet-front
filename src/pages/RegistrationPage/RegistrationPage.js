import styled from "styled-components";
import axios from "axios";
import HeaderLogo from "../../components/HeaderLogo";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DadosContext } from "../../context/DadosContext";

export default function RegistrationPage() {

    const {
        name, setName,
        email, setEmail,
        password, setPassword,
        confirmPassword, setConfirmPassword
    } = useContext(DadosContext);
    const navigate = useNavigate();

    function enviarDadosCadastro(event) {
        event.preventDefault();

        if (confirmPassword !== password) {
            alert("Por favor, preencha a senha igual para os dois campos!")
        } else {
            const body = { name, email, password }
            axios.post("http://localhost:5000/sign-up", body)
                .then((resposta) => {
                    console.log(resposta.data);
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error.response.data);
                    const status = error.response.status
                    if (status === 409) {
                        alert(error.response.data.message);
                    }
                    if (status === 422) {
                        alert("Preencha os dados corretamente! Senha maior que 4 caracteres! Email precia ser válido: exemplo@gmail.com")
                    }
                })
        }

    }

    return (
        <ContainerRegistration>
            <HeaderLogo />
            <form onSubmit={enviarDadosCadastro}>
                <ContainerInputsRegistration>
                    <input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type="text"
                        placeholder="Nome"
                        name="Nome"
                        required
                    />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="E-mail"
                        name="Email"
                        required
                    />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Senha"
                        name="Senha"
                        required
                    />
                    <input
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        type="password"
                        placeholder="Confirme a senha"
                        name="Confirme a senha"
                        required
                    />
                </ContainerInputsRegistration>
                <ContainerButtonRegister>
                    <button type="submit">Cadastrar</button>

                    <Link to={"/"}>
                        <span>Já tem uam conta? Entre agora!</span>
                    </Link>
                </ContainerButtonRegister>
            </form>
        </ContainerRegistration>
    )
}

const ContainerRegistration = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ContainerInputsRegistration = styled.div`
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
const ContainerButtonRegister = styled.div`
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
        background-image: linear-gradient(92.88deg, #A328D6 9.16%, #631e75 43.89%, #b60570 64.72%);
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
            margin-top: 36px;
            text-decoration: none;
        }
`