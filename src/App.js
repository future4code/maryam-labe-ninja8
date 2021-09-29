import React from 'react'
import styled from 'styled-components'
// import Axios from 'axios'
import TelaCadastro from './components/TelaCadastro'
import TelaServicos from './components/TelaServicos'
import TelaCarrinho from './components/TelaCarrinho'
import TelaHome from './components/TelaHome'

const HeaderApp = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	height: 50px;
	margin: -8px;
	padding: 10px;
	background-color: gray;
	justify-content: space-between;
`
const ButtonApp = styled.div`
	display: flex;
	margin-left: 20px;
`

// const FooterApp = styled.footer`
// 	background-color: blue;
// 	display: flex;
// 	align-items: flex-end;
// 	/* justify-content: end; */
// `

export default class App extends React.Component {
	state = {
		telaAtual: "Home",
		carrinho: []
	}

	adicionarAoCarrinho = (objetodeservico) => {
		this.setState({carrinho: [...this.state.carrinho, objetodeservico]})
	}

	removerDoCarrinho = () => {
		
	}


	escolheTela = () => {
		switch (this.state.telaAtual){
			case "cadastro":
				return <TelaCadastro
					irParaHome={this.irParaHome}
					irParaCarrinho={this.irParaCarrinho} 
				/>
			case "servicos":
				return <TelaServicos 
					irParaHome={this.irParaHome}
					irParaCarrinho={this.irParaCarrinho} 
					adicionarAoCarrinho={this.adicionarAoCarrinho}
				/>
			case "carrinho":
				return <TelaCarrinho 
					irParaHome={this.irParaHome}
					irParaCarrinho={this.irParaCarrinho} 
				/>
			case "Home":
				return <TelaHome 
					irParaHome={this.irParaHome}
					irParaCarrinho={this.irParaCarrinho}
					irParaCadastro={this.irParaCadastro}
					irParaServicos={this.irParaServicos} 
				/>
			default: 
				return <div>Erro! Página não encontrada.</div>
		}
	}

	irParaCadastro = () => {
		this.setState({telaAtual: "cadastro"})
	}

	irParaServicos = () => {
		this.setState({telaAtual: "servicos"})
	}

	irParaCarrinho = () => {
		this.setState({telaAtual: "carrinho"})
	}

	irParaHome = () => {
		this.setState({telaAtual: "Home"})
	}

	render(){
		console.log(this.state.carrinho)
		return (
			<div>
				<HeaderApp>
					<h3>LabeNinjas</h3>
					<ButtonApp>
						<button onClick={this.irParaHome}>Home</button>
						<button onClick={this.irParaCarrinho}>Carrinho</button>
					</ButtonApp>
				</HeaderApp>
				{this.escolheTela()}
				{/* <div>			
					<FooterApp>
						Este é o roda pé
					</FooterApp>
				</div> */}
			</div>
		)
	}
}

