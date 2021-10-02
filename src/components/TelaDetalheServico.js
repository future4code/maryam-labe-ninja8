import React from "react";
import styled from "styled-components";
// import styled from "styled-components";
// import axios from "axios";

const Servico = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button{
        margin-top: 10px;
    }
`
export default class TelaDetalheServico extends React.Component{
    render() {
        return (
            <div>
                <h1>Tela Detalhe Serviços</h1>
                <Servico>
                    <h2>{this.props.titulo}</h2>
                    <p>Preço: R${this.props.preco}</p>
                    <p>Prazo: {this.props.prazo}</p>
                    <p>{this.props.descricao}</p>
                    <li>{this.props.pagamento}</li>
                    <button onClick={this.props.irParaTelaServico}>Voltar para a lista</button>
                </Servico>
            </div>
        )
    }
}