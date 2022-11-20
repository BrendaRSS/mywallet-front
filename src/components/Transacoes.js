import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import { DadosContext } from "../context/DadosContext";

export default function Transacoes({ transacoes }) {

    return (
        <>
            <ContainerTransacoes>
                {transacoes.map((t) =>
                    <UnidadeTransacao>
                        <DateTransacao>
                            {t.time}
                        </DateTransacao>
                        <DescriptionTransacao>
                            {t.description}
                        </DescriptionTransacao>
                        <ValueTransacao type={t.type}>
                            {t.value}
                        </ValueTransacao>
                    </UnidadeTransacao>
                )}
            </ContainerTransacoes>
            <SaldoTransacoes>
                <TitleSaldo>SALDO</TitleSaldo>
                <ValueSaldo>R$600,00</ValueSaldo>
            </SaldoTransacoes>
        </>
    )
}

const ContainerTransacoes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const UnidadeTransacao = styled.div`
    width: 95%;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DateTransacao = styled.div`
    margin-right: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`
const DescriptionTransacao = styled.div`
    width: 50%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    color: #000000;
`
const ValueTransacao = styled.div`
    width: 62px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${(props) => props.type === "saída" ? "#C70000" : "#03AC00"};
`
const SaldoTransacoes = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TitleSaldo = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
`
const ValueSaldo = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: right;
    color: #C70000;
`