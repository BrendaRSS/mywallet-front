import styled from "styled-components";
import axios from "axios";
import { IoExitOutline } from "react-icons/io5"
import FooterHomePage from "../../components/FooterHomePage";
import { useContext, useEffect } from "react";
import { DadosContext } from "../../context/DadosContext";
import Transacoes from "../../components/Transacoes";

export default function HomePage() {
    const {
        name, token, transacoes, setTransacoes
    } = useContext(DadosContext);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        axios.get("http://localhost:5000/transacoes", config)
            .then((resposta) => {
                setTransacoes(resposta.data)
            })
            .catch((error) => {
                console.log(error.response.data);
            })
    }, [])

    if (transacoes === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <ContainerHomePage>
            <HeaderHomePage>
                <span>OLá, {name}</span><IoExitOutline />
            </HeaderHomePage>
            <ContainerRecords>
                <RecordsScreen>
                    {transacoes.length === 0 ?
                        <span>Não há registros de <br /> entrada ou saída</span>
                        : <Transacoes transacoes={transacoes}/>
                    }
                </RecordsScreen>
            </ContainerRecords>
            <FooterHomePage />
        </ContainerHomePage>
    )
}

const ContainerHomePage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
        text-decoration: none;
    }
`
const HeaderHomePage = styled.header`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 15px 25px;
    background-color: #8C11BE;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
    svg{
            color: #FFFFFF;
            font-size:30px;
            cursor: pointer;
        }
`
const ContainerRecords = styled.div`
    width: 100%;
    height: auto;
`
const RecordsScreen = styled.div`
    overflow-y: scroll;
    width: 326px;
    height: 446px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    ::-webkit-scrollbar-track-piece{
        width: 15px;
        border: 5px;
        background-color: red;
    }
`