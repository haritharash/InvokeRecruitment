import React from 'react'
import '../App.css';
import FlipMove from 'react-flip-move'


class Soha extends React.Component{

	handleCondition(items){

		var reg1= /[^abcdefghijklmnopqrstuvwxyz0123456789]/gi;


		if(reg1.test(items)){
			return(<FlipMove duration={300} easing="ease-in-out">{<li id='symbol'> Other Symbols</li>}</FlipMove>);
		}

		else{
			return null;
		}

	}

	tester(items){


		const baru = [];
		var reg1= /[-!@#%&_~=`{}\]:";'<>,\/]/gi;
		/* in regex there are 11 special characters that
		need to be cautious to avoid bugs*/

		var special1= /\$/gi;
		var special2= /\^/gi
		var special3= /\*/gi
		var special4= /\./gi
		var special5= /\?/gi
		var special6= /\(/gi
		var special7= /\)/gi
		var special8= /\+/gi
		var special9= /\[/gi
		var special10= /\\/gi
		var special11= /\|/gi

		if (reg1.test(items)){

			let lain = items.match(reg1);
			let unique = [...new Set(lain)];
			
			for (var i = 0; i <unique.length; i++){

				let x = new RegExp(unique[i],'gi');
				
				if(x.test(items)){

						const sym = items.match(x).length;
						baru.push({
						id:unique[i],
						value:sym
					});	
				}
				else{
					return null;
				}
				
			}		
		}

		if(special1.test(items)){

			var y = items.match(special1).length;
				baru.push({
				id:'$',
				value:y,
			})
		}
		if(special2.test(items)){

			var z = items.match(special2).length;
				baru.push({
				id:'^',
				value:z,
			})
		}
		if(special3.test(items)){

			var l = items.match(special3).length;
				baru.push({
				id:'*',
				value:l,
			})
		}
		if(special4.test(items)){

			var n = items.match(special4).length;
				baru.push({
				id:'.',
				value:n,
			})
		}
		if(special5.test(items)){

			var o = items.match(special5).length;
				baru.push({
				id:'?',
				value:o,
			})
		}
		if(special6.test(items)){

			var k = items.match(special6).length;
				baru.push({
				id:'(',
				value:k,
			})
		}
		if(special7.test(items)){

			var od = items.match(special7).length;
				baru.push({
				id:')',
				value:od,
			})
		}
		if(special8.test(items)){

			var ok = items.match(special8).length;
				baru.push({
				id:'+',
				value:ok,
			})
		}
		if(special9.test(items)){

			var op = items.match(special9).length;
				baru.push({
				id:'[',
				value:op,
			})
		}
		if(special10.test(items)){

			var ot = items.match(special10).length;
				baru.push({
				id:'\\',
				value:ot,
			})
		}
		if(special11.test(items)){

			var ol = items.match(special11).length;
				baru.push({
				id:'|',
				value:ol,
			})
		}

		
		
	
		

		return (
			<FlipMove duration={300} easing="ease-in-out">{

				baru.map(sy => (<li id = "symbol" key={sy.id}> {sy.id} ({sy.value})</li>))

			}</FlipMove>
		);
	

		
	}


	render(){

		return(

			<h1>{this.handleCondition(this.props.item)}

				{this.tester(this.props.item)}</h1>
		);

	}


}

export default Soha;