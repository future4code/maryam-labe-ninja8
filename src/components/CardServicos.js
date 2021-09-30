import React from "react";
import styled from "styled-components";

const CardServico = styled.div`
    background-color: blueviolet;
    border: 1px solid black;
    width: 300px;
    height: 180px;
    display: flex;
    flex-direction: column;
    padding: 8px;
    h3{
        margin-top: 0;
        margin-bottom: 0;
    }
`
const ButtonServicos = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
`
export default class CardServicos extends React.Component{
    render(){
        return <CardServico>
            <h3>Título</h3>
            <p>preço: </p>
            <p>Prazo: </p>
            <ButtonServicos>
                <button>Ver detalhes</button>
                <button>Adicionar no carrinho</button>
            </ButtonServicos>
        </CardServico>
    }
}