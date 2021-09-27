import React from "react";
import styled from 'styled-components'
// import Axios from 'axios'


const MainApp = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 100px;
    
`

const ButtonHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default class TelaCadastro extends React.Component {
    render() {
        return (
            <div>
                <MainApp>
					<h1>LabeNinjas</h1>
					<p>O talento certo no momento certo</p>
                <ButtonHome>
					<button onClick={this.props.irParaCadastro}>Quero ser um Ninja</button>
					<button onClick={this.props.irParaServicos}>Contratar um Ninja</button>
				</ButtonHome>
                </MainApp>
            </div>
        )
    }
}