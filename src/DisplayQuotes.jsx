import React, { Component } from 'react';

class DisplayQuotes extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.quotes.map(quote => {
					return (
						<div>
							<img src={quote.image} key={quote.id} alt={quote.character} />
							<h1>{quote.quote}</h1>
							<p>{quote.character}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default DisplayQuotes;
