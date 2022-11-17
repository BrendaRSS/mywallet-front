import styled from "styled-components";
import axios from "axios";
import { IoExitOutline } from "react-icons/io5"
import FooterHomePage from "../../components/FooterHomePage";

export default function HomePage() {
    return (
        <ContainerHomePage>
            <HeaderHomePage>
                <span>OLá, Fulano</span><IoExitOutline />
            </HeaderHomePage>
            <ContainerRecords>
                <RecordsScreen>
                    Não há registros de <br/> entrada ou saída
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
    width: 326px;
    height: 446px;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
`