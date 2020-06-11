import React from 'react'
import '../App.css';
import FlipMove from 'react-flip-move'



class Numbers extends React.Component {

	handleCondition(items){

		var nombor0 = /[0]/gi;
		var nombor1 = /[1]/gi;
		var nombor2 = /[2]/gi;
		var nombor3 = /[3]/gi;
		var nombor4 = /[4]/gi;
		var nombor5 = /[5]/gi;
		var nombor6 = /[6]/gi;
		var nombor7 = /[7]/gi;
		var nombor8 = /[8]/gi;
		var nombor9 = /[9]/gi;

		if(nombor0.test(items)||nombor1.test(items) || nombor2.test(items)||nombor3.test(items)||nombor4.test(items)||nombor5.test(items)||nombor6.test(items)||nombor7.test(items)||nombor8.test(items) ||nombor9.test(items)){

			return(<FlipMove duration={300} easing="ease-in-out">{<li id='profiles'> Numbers</li>}</FlipMove>);
		}
		
		else{
			return null;
		}
	}

	Numbers(items){

		const Arr=[];
		var nombor0 = /[0]/gi;
		var nombor1 = /[1]/gi;
		var nombor2 = /[2]/gi;
		var nombor3 = /[3]/gi;
		var nombor4 = /[4]/gi;
		var nombor5 = /[5]/gi;
		var nombor6 = /[6]/gi;
		var nombor7 = /[7]/gi;
		var nombor8 = /[8]/gi;
		var nombor9 = /[9]/gi;

		if(nombor0.test(items)){
			var nombors0 = items.match(nombor0).length;
			Arr.push({
				id: '0',
				value:nombors0});
		}
		if(nombor1.test(items)){
			var nombors1 = items.match(nombor1).length;
			Arr.push({
				id: '1',
				value:nombors1});
		}
		if(nombor2.test(items)){
			var nombors2 = items.match(nombor2).length;
			Arr.push({
				id: '2',
				value:nombors2});
		}
		if(nombor3.test(items)){
			var nombors3 = items.match(nombor3).length;
			Arr.push({
				id: '3',
				value:nombors3});
		}
		if(nombor4.test(items)){
			var nombors4 = items.match(nombor4).length;
			Arr.push({
				id: '4',
				value:nombors4});
		}
		if(nombor5.test(items)){
			var nombors5 = items.match(nombor5).length;
			Arr.push({
				id: '5',
				value:nombors5});
		}
		if(nombor6.test(items)){
			var nombors6 = items.match(nombor6).length;
			Arr.push({
				id: '6',
				value:nombors6});
		}
		if(nombor7.test(items)){
			var nombors7 = items.match(nombor7).length;
			Arr.push({
				id: '7',
				value:nombors7});
		}
		if(nombor8.test(items)){
			var nombors8 = items.match(nombor8).length;
			Arr.push({
				id: '8',
				value:nombors8});
		}
		if(nombor9.test(items)){
			var nombors9 = items.match(nombor9).length;
			Arr.push({
				id: '9',
				value:nombors9});
		}



		return(
			<FlipMove duration={300} easing="ease-in-out">{
				Arr.map(vocal=>(<li key={vocal.id} id="profiles"> {vocal.id} ({vocal.value})</li>))
			}</FlipMove>
		);

	}
	render(){


		return( 


			<h1>{this.handleCondition(this.props.item)}{this.Numbers(this.props.item)}</h1>
		);
	}

}

export default Numbers;

























