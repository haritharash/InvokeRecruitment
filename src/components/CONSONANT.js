import React from 'react'
import '../App.css';
import FlipMove from 'react-flip-move'


class CONSONANT extends React.Component{


	handleCondition(items){
		var regB = /[b]/gi;
		var regC = /[c]/gi;
		var regD = /[d]/gi;
		var regF = /[f]/gi;
		var regG = /[g]/gi;
		var regH = /[h]/gi;
		var regJ = /[j]/gi;
		var regK = /[k]/gi;
		var regL = /[l]/gi;
		var regM = /[m]/gi;
		var regN = /[n]/gi;
		var regP = /[p]/gi;
		var regQ = /[q]/gi;
		var regR = /[r]/gi;
		var regS = /[s]/gi;
		var regT = /[t]/gi;
		var regV = /[v]/gi;
		var regW = /[w]/gi;
		var regX = /[x]/gi;
		var regY = /[y]/gi;
		var regZ = /[z]/gi;
	
		if (regB.test(items) || regC.test(items) || regD.test(items)||regF.test(items)||regG.test(items) ||regH.test(items)||regJ.test(items)||regK.test(items)||regL.test(items)||regM.test(items)||regN.test(items)||regP.test(items)||regQ.test(items)||regR.test(items)||regS.test(items)||regT.test(items)||regV.test(items)||regW.test(items)||regX.test(items)||regY.test(items)||regZ.test(items)){
			return(<FlipMove duration={300} easing="ease-in-out">{<li id='kuala'> Consonant</li>}</FlipMove>);
		}
		else{
			return null;
		}

	}

	tester(items) {

		const consonant = [];
		
		var regb = /[b]/g;
		var regc = /[c]/g;
		var regd = /[d]/g;
		var regf = /[f]/g;
		var regg = /[g]/g;
		var regh = /[h]/g;
		var regj = /[j]/g;
		var regk = /[k]/g;
		var regl = /[l]/g;
		var regm = /[m]/g;
		var regn = /[n]/g;
		var regp = /[p]/g;
		var regq = /[q]/g;
		var regr = /[r]/g;
		var regs = /[s]/g;
		var regt = /[t]/g;
		var regv = /[v]/g;
		var regw = /[w]/g;
		var regx = /[x]/g;
		var regy = /[y]/g;
		var regz = /[z]/g;

		var regB = /[B]/g;
		var regC = /[C]/g;
		var regD = /[D]/g;
		var regF = /[F]/g;
		var regG = /[G]/g;
		var regH = /[H]/g;
		var regJ = /[J]/g;
		var regK = /[K]/g;
		var regL = /[L]/g;
		var regM = /[M]/g;
		var regN = /[N]/g;
		var regP = /[P]/g;
		var regQ = /[Q]/g;
		var regR = /[R]/g;
		var regS = /[S]/g;
		var regT = /[T]/g;
		var regV = /[V]/g;
		var regW = /[W]/g;
		var regX = /[X]/g;
		var regY = /[Y]/g;
		var regZ = /[Z]/g;



		
		if(regb.test(items)){
			var b = items.match(regb).length;
				consonant.push({
				id: 'b',
				value:b});
		}

		if(regc.test(items)){
			var c = items.match(regc).length;
				consonant.push({
				id: 'c',
				value:c});
		}

		if(regd.test(items)){
			var d = items.match(regd).length;
				consonant.push({
				id: 'd',
				value:d});
		}
		if(regf.test(items)){
			var f = items.match(regf).length;
				consonant.push({
				id: 'f',
				value:f});
		}
		if(regg.test(items)){
			var g = items.match(regg).length;
				consonant.push({
				id: 'g',
				value:g});
		}
		if(regh.test(items)){
			var h = items.match(regh).length;
				consonant.push({
				id: 'h',
				value:h});
		}
		if(regj.test(items)){
			var j = items.match(regj).length;
				consonant.push({
				id: 'j',
				value:j});
		}
		if(regk.test(items)){
			var k = items.match(regk).length;
				consonant.push({
				id: 'k',
				value:k});
		}
		if(regl.test(items)){
			var l = items.match(regl).length;
				consonant.push({
				id: 'l',
				value:l});
		}
		if(regm.test(items)){
			var m = items.match(regm).length;
				consonant.push({
				id: 'm',
				value:m});
		}
		if(regn.test(items)){
			var n = items.match(regn).length;
				consonant.push({
				id: 'n',
				value:n});
		}
		if(regp.test(items)){
			var p = items.match(regp).length;
				consonant.push({
				id: 'p',
				value:p});
		}
		if(regq.test(items)){
			var q = items.match(regq).length;
				consonant.push({
				id: 'q',
				value:q});
		}
		if(regr.test(items)){
			var r = items.match(regr).length;
				consonant.push({
				id: 'r',
				value:r});
		}
		if(regs.test(items)){
			var s = items.match(regs).length;
				consonant.push({
				id: 's',
				value:s});
		}
		if(regt.test(items)){
			var t = items.match(regt).length;
				consonant.push({
				id: 't',
				value:t});
		}

		if(regv.test(items)){
			var v = items.match(regv).length;
				consonant.push({
				id: 'v',
				value:v});
		}
		if(regw.test(items)){
			var w = items.match(regw).length;
				consonant.push({
				id: 'w',
				value:w});
		}
		if(regx.test(items)){
			var x = items.match(regx).length;
				consonant.push({
				id: 'x',
				value:x});
		}
		if(regy.test(items)){
			var y = items.match(regy).length;
				consonant.push({
				id: 'y',
				value:y});
		}
		
		if(regz.test(items)){
			var z = items.match(regz).length;
				consonant.push({
				id: 'z',
				value:z});
		}


		if(regB.test(items)){
			var B = items.match(regB).length;
				consonant.push({
				id: 'B',
				value:B});
		}

		if(regC.test(items)){
			var C = items.match(regC).length;
				consonant.push({
				id: 'C',
				value:C});
		}

		if(regD.test(items)){
			var D = items.match(regD).length;
				consonant.push({
				id: 'D',
				value:D});
		}
		if(regF.test(items)){
			var F = items.match(regF).length;
				consonant.push({
				id: 'F',
				value:F});
		}
		if(regG.test(items)){
			var G = items.match(regG).length;
				consonant.push({
				id: 'G',
				value:G});
		}
		if(regH.test(items)){
			var H = items.match(regH).length;
				consonant.push({
				id: 'H',
				value:H});
		}
		if(regJ.test(items)){
			var J = items.match(regJ).length;
				consonant.push({
				id: 'J',
				value:J});
		}
		if(regK.test(items)){
			var K = items.match(regK).length;
				consonant.push({
				id: 'K',
				value:K});
		}
		if(regL.test(items)){
			var L = items.match(regL).length;
				consonant.push({
				id: 'L',
				value:L});
		}
		if(regM.test(items)){
			var M = items.match(regM).length;
				consonant.push({
				id: 'M',
				value:M});
		}
		if(regN.test(items)){
			var N = items.match(regN).length;
				consonant.push({
				id: 'N',
				value:N});
		}
		if(regP.test(items)){
			var P = items.match(regP).length;
				consonant.push({
				id: 'P',
				value:P});
		}
		if(regQ.test(items)){
			var Q = items.match(regQ).length;
				consonant.push({
				id: 'Q',
				value:Q});
		}
		if(regR.test(items)){
			var R = items.match(regR).length;
				consonant.push({
				id: 'R',
				value:R});
		}
		if(regS.test(items)){
			var S = items.match(regS).length;
				consonant.push({
				id: 'S',
				value:S});
		}
		if(regT.test(items)){
			var T = items.match(regT).length;
				consonant.push({
				id: 'T',
				value:T});
		}

		if(regV.test(items)){
			var V = items.match(regV).length;
				consonant.push({
				id: 'V',
				value:V});
		}
		if(regW.test(items)){
			var W = items.match(regW).length;
				consonant.push({
				id: W,
				value:W});
		}
		if(regX.test(items)){
			var X = items.match(regX).length;
				consonant.push({
				id: 'X',
				value:X});
		}
		if(regY.test(items)){
			var Y = items.match(regY).length;
				consonant.push({
				id: 'Y',
				value:Y});
		}
		
		if(regZ.test(items)){
			var Z = items.match(regZ).length;
				consonant.push({
				id: 'Z',
				value:Z});
		}


		return(

				<FlipMove duration={300} easing="ease-in-out">{
				consonant.map(conso=>(<li key={conso.id} id="kuala"> {conso.id} ({conso.value})</li>))
				}</FlipMove>
			);	

	}



	render(){
		return( 


			<h1>{this.handleCondition(this.props.item)}{this.tester(this.props.item)}</h1>
		);
	}
}

export default CONSONANT;