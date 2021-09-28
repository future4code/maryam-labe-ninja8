import React from "react";
// import styled from "styled-components";
// import axios from "axios";

export default class TelaDetalheServico extends React.Component{
    render() {
        return (
            <div>
                <h1>Tela Detalhe Serviços</h1>
                <button onClick={this.props.irParaTelaServico}>Voltar para a lista</button>
            </div>
        )
    }
}