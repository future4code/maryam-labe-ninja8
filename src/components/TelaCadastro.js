import React from "react";
import styled from 'styled-components'
import axios from 'axios'
 

const url = "https://labeninjas.herokuapp.com"

const key = "labeninjas-grupo8"

const headers = {Authorization: key}


 const FormContainer = styled.form`
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px;
    padding: 30px;
    gap: 14px;

`

export default class TelaCadastro extends React.Component {

    criarChave = (event) => {       
        axios.post('{{url}}/auth',{
            body: {
               key: "labeninjas-grupo8"
            }
       });
    }

    state = {
        titulo: "",
        descricao:"",
        preco:"",
        metodoDePagamento:[],
        dataInicio:""
        // isLoading: false
    };

    handleTitulo = (event) => {
        this.setState({titulo: event.target.value})
        console.log("titulo")
    }

    handleDescricao = (event) => {
        this.setState({descricao: event.target.value})
        console.log("descricao")
    }

    handlePreco = (event) => {
        this.setState({preco: event.target.value})
        console.log("preco")
    }

    handleMetodoDePagamento = (event) => {
        // this.setState({metodoDePagamento: event.target.value})
        // console.log("metodoDePagamento")
        let value = Array.from(event.target.selectedOptions, option => option.value)
        this.setState({ paymentMethods: value })
        console.log("pagamento")
    }

    handleDataInicio = (event) => {
        this.setState({dataInicio: event.target.value})
        console.log("dataInicio")
    }

    cadastrarApi = (event) => {
        event.preventDefault()
        const body = {
            title: this.state.titulo,
            description: this.state.descricao,
            price: Number(this.state.preco),
            paymentMethods: this.state.metodoDePagamento,
            dueDate: this.state.dataInicio
        };

        axios 
            .post(url, body, headers)
            .then((res) => {
                this.setState({
                    titulo: "",
                    descricao:"",
                    preco:"",
                    metodoDePagamento:[],
                    dataInicio:"",
                });

                // this.props.getAllJobs(res);
                alert("Cadastrado!")
                console.log(res.data);
            })
                .catch((err) => {
                    console.log(err.response.data.message);
                    alert(err);
                });

    }


    render() {
        return (
            <div>
                {/* <h1>Cadastre o seu serviço</h1>
                <button>Cadastrar Serviço</button> */}

                <FormContainer onSubmit={this.cadastrarApi}>
                    <h1>Cadastre o seu serviço</h1>
                    <h3>Preencha o formulário</h3>

                    <div>
                        <input
                            type="text"
                            placeholder="Título"
                            value={this.state.titulo}
                            onChange={this.handleTitulo}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Descrição"
                            value={this.state.descricao}
                            onChange={this.handleDescricao}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            placeholder="Preço"
                            value={this.state.preco}
                            onChange={this.handlePreco}
                        />
                    </div>
                    
                    <label>
                        <select
                            multiple
                            value={this.state.paymentMethods}
                            onChange={this.handleMetodoDePagamento}
                        >
                            <option>Cartão de crédito</option>
                            <option>Cartão de débito</option>
                            <option>Boleto bancário</option>
                            <option>PayPal</option>
                            <option>Pix</option>
                        </select>
                    </label>

                    <input
                        type="date"
                        value={this.state.dataInicio}
                        onChange={this.handleDataInicio}
                    />   
                    <button onClick={this.cadastrarApi}>Cadastrar</button>       
                </FormContainer>
            </div>
        );
    }
}