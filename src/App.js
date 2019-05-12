import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lamp from './Lamp';
import NameForm from './formu';
import GenerateQuotes from './GenerateQuotes';
import DisplayQuotes from './DisplayQuotes';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			working: true,
			speed: 'App-logo',
			quotes: []
		};
	}

	componentDidMount = () => {
		fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
			.then(result => result.json())
			.then(result => {
				this.setState({
					quotes: result
				});
			});
	};

	workingClick = () => {
		this.setState({ working: !this.state.working });
		this.state.working ? this.setState({ speed: 'App-logo' }) : this.setState({ speed: 'App-logo-speed' });
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className={this.state.speed} alt='logo' />

					<h1 className='App-title'>Simpsons Quotes</h1>
				</header>
				<button onClick={this.workingClick}>Click here</button>
				<Lamp on />
				<Lamp />
				<NameForm />
				<GenerateQuotes selectQuotes={() => this.componentDidMount()} />
				<DisplayQuotes quotes={this.state.quotes} />
			</div>
		);
	}
}

export default App;
