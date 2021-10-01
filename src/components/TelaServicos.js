import React from "react";
import TelaDetalheServico from "./TelaDetalheServico";
import Axios from 'axios'
import styled from "styled-components";

const urlJobs = 'https://labeninjas.herokuapp.com/jobs'
const headers = {'Authorization': 'fe737bdf-5109-4d3c-9cf0-519c2e8d129e'}

const ListaServicos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 20px;
`
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

export default class TelaServicos extends React.Component {
    state = {
        telaServicoAtual: "servico",
        listaServicos : [],
        titulo: '',
        preco: 0,
        prazo: ''

    }
    pegarServicos = () => {
        Axios.get(urlJobs, {headers: headers})
        .then( (response) => {
            let listaServicosResponse = response.data.jobs
            this.setState({listaServicos : listaServicosResponse})
            console.log(this.state.listaServicos)
            this.state.listaServicos.map( (servicos) => {
                this.setState({titulo: servicos.title})
                this.setState({prazo: servicos.dueDate})
                this.setState({preco: servicos.price})
            })
        })
        .catch()
    }

    escolheTelaServico = () => {
        switch (this.state.telaServicoAtual){
            case "servico":
                return (
                    <div>
                        <h1>Tela de Serviços</h1>
                        <ListaServicos>
                            {this.state.listaServicos.map((servico) => {
                                return <CardServico key={servico.id}>
                                    <h3>{servico.title}</h3>
                                    <p>Preço: {servico.price}</p>
                                    <p>prazo: {(servico.dueDate).slice(0,10)}</p>
                                    <ButtonServicos>
                                        <button onClick={this.props.irParaTelaDetalhe}>Ver detalhes</button>
                                        <button onClick={() => this.props.adicionarAoCarrinho(
                                            {
                                                nome: servico.title,
                                                preco: servico.price,
                                                prazo: servico.dueDate
                                            }
                                            )}>Adicionar no carrinho
                                        </button>
                                    </ButtonServicos>
                                </CardServico>
                            })}
                        </ListaServicos>
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

    componentDidMount() {
        this.pegarServicos()
    }
    render() {
        return (
            <div>
                {this.escolheTelaServico()}
            </div>
        )
    }
}