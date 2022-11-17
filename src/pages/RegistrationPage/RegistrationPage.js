import styled from "styled-components";
import axios from "axios";
import HeaderLogo from "../../components/HeaderLogo";

export default function RegistrationPage() {
    return (
        <ContainerRegistration>
            <HeaderLogo />
            <form>
                <ContainerInputsRegistration>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="Nome"
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        name="Email"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="Senha"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirme a senha"
                        name="Confirme a senha"
                        required
                    />
                </ContainerInputsRegistration>
                <ContainerButtonRegister>
                    <button type="submit">Cadastrar</button>
                    <span>Já tem uam conta? Entre agora!</span>
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
const ContainerButtonRegister=styled.div`
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
`