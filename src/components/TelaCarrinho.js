import React from 'react';
import styled from 'styled-components';
// import Axios from 'axios';

const DivCardCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    background-color: lightgray;
    flex-direction: row;
    align-items: center;
`;
const teste = [
    { id: 0, name: 'web design', price: 100 },
    { id: 1, name: 'natação', price: 50 },
];

const ButtonsFinal = styled.div`
    display: flex;
`

const CleanButton = styled.div`
    display: flex;
    justify-content: flex-end;

`

export default class TelaCarrinho extends React.Component {
    
    // limpaCarrinho = () => {
    //     const carrinhoVazio = this.state.carrinho.map((item)=> {
    //       return { ...item, quantidade: 0}
    //     })
    //     this.setState({carrinho: carrinhoVazio});
    //     this.setState({valorTotal: 0})
    //   }

      finalizaCompra = () => {
        // alert("Você finalizou sua compra")
      }
    
    render() {
        return (
            <div>
                {teste.map((el) => {
                    return (
                        <DivCardCarrinho>
                            <h3>{el.name}</h3>
                            <p>{el.price}</p>
                            <button>Remover</button>
                        </DivCardCarrinho>
                    );
                })}
                <div>
                    <span>Valor Total: {teste.reduce((total, numero) => total + numero.price, 0)}</span>
                <ButtonsFinal>
                    <button onClick={this.finalizaCompra()}>Finalizar Compra</button>
                    <button onClick={this.props.irParaServicos}>Voltar para a lista</button>
                    <button onClick={this.limpaCarrinho}>Limpar Carrinho</button> 
                </ButtonsFinal>
                </div>
                <CleanButton>
                </CleanButton>
            </div>
        );
    }
}
