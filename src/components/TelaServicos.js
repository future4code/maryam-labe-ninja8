import React from "react";
import TelaDetalheServico from "./TelaDetalheServico";
// import Axios from 'axios'
// import styled from 'styled-components'

export default class TelaServicos extends React.Component {
    state = {
        telaServicoAtual: "servico"
    }

    escolheTelaServico = () => {
        switch (this.state.telaServicoAtual){
            case "servico":
                return (
                    <div>
                        <h1>Tela de Serviços</h1>
                        <button onClick={this.irParaTelaDetalhe}>Ver detalhes</button>
                        <button onClick={() => this.props.adicionarAoCarrinho(
                             {
                                nome: "oioi",
                                preco: 2,
                                prazo: 5,
                            }
                        )}>Adicionar ao carrinho</button>
                    </div>
                )
            case "detalhe":
                return <TelaDetalheServico
                    irParaTelaServico={this.irParaTelaServico}
                />
            default: 
                return <div>Erro! Página não encontrada.</div>
        }
    }

    irParaTelaDetalhe = () => {
        this.setState({telaServicoAtual: "detalhe"})
    }

    irParaTelaServico = () => {
        this.setState({telaServicoAtual: "servico"})
    }

    

    render() {
        return (
            <div>
                {this.escolheTelaServico()}
            </div>
        )
    }
}