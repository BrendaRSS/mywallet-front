import styled from "styled-components";
import axios from "axios";

export default function AddOutputPage(){
    return(
        <ContainerAddOutput>
            <HeaderAddOutput>Nova saída</HeaderAddOutput>
            <ContainerInputsOutput>
                <input
                    type="number"
                    placeholder="Valor"
                    name="Valor"
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    name="Valor"
                    required
                />
            </ContainerInputsOutput>
            <ContainerButtonOutput>
                <button>Salvar saída</button>
                <span>Cancelar</span>
            </ContainerButtonOutput>
        </ContainerAddOutput>
    )
}

const ContainerAddOutput = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
`
const HeaderAddOutput = styled.header`
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
const ContainerInputsOutput = styled.div`
    width: 100%;
    background-color: #8C11BE;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
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
const ContainerButtonOutput = styled.div`
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
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: underline;
        cursor: pointer;
    }
`