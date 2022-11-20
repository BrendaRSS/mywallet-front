import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DadosContext } from "../../context/DadosContext";

export default function AddEntriesPage() {
    const {
        value, setValue, description, setDescription, token
    } = useContext(DadosContext);
    const navigate = useNavigate();

    function addNewEntrie(event) {
        event.preventDefault();
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };
        const body = { value, description, type: "entrada" };

        axios.post("http://localhost:5000/transacoes", body, config)
            .then((resposta) => {
                console.log(resposta.data.message);
                setDescription("");
                setValue("");
                navigate("/home");
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }

    return (
        <form onSubmit={addNewEntrie}>
            <ContainerAddEntries>
                <HeaderAddEntries>Nova entrada</HeaderAddEntries>
                <ContainerInputsEntries >
                    <input
                        onChange={e => setValue(e.target.value)}
                        value={value}
                        type="number"
                        placeholder="Valor"
                        name="Valor"
                        required
                    />
                    <input
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        type="text"
                        placeholder="Descrição"
                        name="Valor"
                        required
                    />
                </ContainerInputsEntries >
                <ContainerButtonEntries>
                    <button type="submit">Salvar entrada</button>
                    <Link to={"/home"}><span>Cancelar</span></Link>
                </ContainerButtonEntries>
            </ContainerAddEntries>
        </form>
    )
}

const ContainerAddEntries = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    a{
        text-decoration: none;
    }
`
const HeaderAddEntries = styled.header`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 15px 25px;
    background-color: #8C11BE;
    text-align: left;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`
const ContainerInputsEntries = styled.div`
    width: 100%;
    background-color: #8C11BE;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        box-sizing: border-box;
        padding: 10px 15px;
        width: 326px;
        height: 58px;
        margin-bottom: 13px;
        background-color: #FFFFFF;
        border-radius: 5px;
        border: none;
        ::placeholder{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }
    }
`
const ContainerButtonEntries = styled.div`
    width: 100%;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
        width: 326px;
        height: 46px;
        margin-bottom: 30px;
        left: 25px;
        top: 238px;
        background: #A328D6;
        border-radius: 5px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        cursor: pointer;
        text-shadow: 1px 1px 2px black, 0 0 1em black;
        border: none;
        &:hover{
            box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        }
        
    }
    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: underline;
        cursor: pointer;
    }
`