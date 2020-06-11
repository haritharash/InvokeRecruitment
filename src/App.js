import React from 'react';
//import logo from './logo.svg';
import './App.css'
import CONSONANT from './components/CONSONANT.js';
import Numbers from './components/number.js';
import Headervowel from './components/headervowel.js';
import Soha from './components/symbols';



class App extends React.Component{

 constructor(props){
 	super(props);
 	this.state = {
 			message : '',
 		}

 	this.handleChange = this.handleChange.bind(this);
 	this.handleSubmit = this.handleSubmit.bind(this);
 	}

 	handleChange(event){
 		this.setState({message:event.target.value});
 		var a = (this.state.message).length;
 		if (a>99){
 			alert('maximum characters are only 100');
 			window.location.reload();
 			
 		}
 	
 	}

 	handleSubmit(event){
 		event.preventDefault();
 		var pjg = (this.state.message).length;
 		alert('the length of string is:'+pjg);
 		
 		
 	}
 	

	render(){
	 	return(
	 		<div className= "App-header">
	 			<h1 id="header">{this.state.message}</h1>
		 		<form onSubmit={this.handleSubmit}  id="to-do-form" >
			 		
			 		<input type="text" message={this.state.message} placeholder= "Enter your String" onChange={this.handleChange}/>

			 		<button type="submit" > submit</button>
			 		<Headervowel item={this.state.message} />
			 		<CONSONANT item={this.state.message} />
			 		<Numbers item={this.state.message} />
			 		<Soha item={this.state.message} />
		 		</form>
	 		</div>
	 		
	 	);
	}
}

export default App;
