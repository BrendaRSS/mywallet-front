import styled from "styled-components";

export default function HeaderLogo(){
    return(
        <ContainerLogo>
            MyWallet
        </ContainerLogo>
    )
}

const ContainerLogo= styled.header`
    height: 50px;
    background-color: #8C11BE;
    text-align: center;
    font-family: 'Saira Stencil One', cursive;
    font-size: 35px;
    font-weight: 400;
    line-height: 50px;
    color: #FFFFFF;
    /* margin: 0 auto; */
`