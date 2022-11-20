import styled from "styled-components";
import axios from "axios";
import { TbCirclePlus } from "react-icons/tb";
import { TbCircleMinus } from "react-icons/tb";
import { useContext } from "react";
import { DadosContext } from "../context/DadosContext";
import { Link } from "react-router-dom";

export default function FooterHomePage() {
    const {
        token
    } = useContext(DadosContext);
  
    console.log(token)

    function teste(){
        console.log(token)
    }

    return (
        <ContainerFooter>
           <Link to={"/entrada"}><ButtonEntries><TbCirclePlus/>Nova <br /> entrada</ButtonEntries></Link> 
          <Link to={"/saida"}><ButtonOutputs>< TbCircleMinus/>Nova <br /> saída</ButtonOutputs></Link> 
        </ContainerFooter>
    )
}

const ContainerFooter = styled.footer`
    width: 100%;
    box-sizing: border-box;
    padding: 15px 25px;
    background-color:  #8C11BE;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ButtonEntries = styled.button`
    width: 155px;
    height: 114px;
    left: 25px;
    top: 537px;
    background-image: linear-gradient(336deg,#b73edc 3.16%,#9d51ba 43.89%,#8860de 74.72%);
    border-radius: 5px;
    border-style: none;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    svg{
        color: #FFFFFF;
        font-size: 30px;
    }
`
const ButtonOutputs = styled.button`
    width: 155px;
    height: 114px;
    left: 25px;
    top: 537px;
    background-image: linear-gradient(336deg,#b73edc 3.16%,#9d51ba 43.89%,#de60a6 74.72%);
    border-radius: 5px;
    border-style: none;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    svg{
        color: #FFFFFF;
        font-size: 30px;
    }
`