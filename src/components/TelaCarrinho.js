import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

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

export default class TelaCarrinho extends React.Component {
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
                    <button>Finalizar Compra</button>
                    <button>Voltar para a lista</button>
                </div>
            </div>
        );
    }
}
