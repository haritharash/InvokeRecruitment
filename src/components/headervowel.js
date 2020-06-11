import React from 'react'
import '../App.css';
import FlipMove from 'react-flip-move'




class Headervowel extends React.Component{

	handleCondition(items) {
		
		var regA = /[a]/gi;
		var regE = /[e]/gi;
		var regI = /[i]/gi;
		var regO = /[o]/gi;
		var regU = /[u]/gi;

		if ( regA.test(items) || regE.test(items) || regI.test(items)||regO.test(items)||regU.test(items) ){

			
			return(<FlipMove duration={300} easing="ease-in-out">{<li id='banjiran'> Vowel</li>}</FlipMove>)
		}
		else{
			return null;
		}

	};
	
	tester(items){
		const vowel = [];
		var rega = /[a]/g;
		var rege = /[e]/g;
		var regi = /[i]/g;
		var rego = /[o]/g;
		var regu = /[u]/g;

		var regA = /[A]/g;
		var regE = /[E]/g;
		var regI = /[I]/g;
		var regO = /[O]/g;
		var regU = /[U]/g;

		if(rega.test(items)){
			var vowela = items.match(rega).length;
			vowel.push({
				id :'a',
				value:vowela});
		
		}

		if(rege.test(items)){
			var vowele = items.match(rege).length;
			vowel.push({
				id: 'e',
				value:vowele});
		}	

		if(regi.test(items)){
			var voweli = items.match(regi).length;
			vowel.push({
				id: 'i',
				value:voweli});
		}	

		if(rego.test(items)){
			var vowelo = items.match(rego).length;
			vowel.push({
				id: 'o',
				value:vowelo});
		}	

		if(regu.test(items)){
			var vowelu = items.match(regu).length;
			vowel.push({
				id: 'u',
				value:vowelu});
		}

		if(regA.test(items)){
			var vowelA = items.match(regA).length;
			vowel.push({
				id :'A',
				value:vowelA});
		
		}

		if(regE.test(items)){
			var vowelE = items.match(regE).length;
			vowel.push({
				id: 'E',
				value:vowelE});
		}	

		if(regI.test(items)){
			var vowelI = items.match(regI).length;
			vowel.push({
				id: 'I',
				value:vowelI});
		}	

		if(regO.test(items)){
			var vowelO = items.match(regO).length;
			vowel.push({
				id: 'O',
				value:vowelO});
		}	

		if(regU.test(items)){
			var vowelU = items.match(regU).length;
			vowel.push({
				id: 'U',
				value:vowelU});
		}

		return(
			<FlipMove duration={300} easing="ease-in-out">{
				vowel.map(vocal=>(<li key={vocal.id} id="banjiran"> {vocal.id} ({vocal.value})</li>))
			}</FlipMove>);
	}

	render(){


		return( 


			<h1>{this.handleCondition(this.props.item)}{this.tester(this.props.item)}</h1>
		);
	}
}
export default Headervowel;



