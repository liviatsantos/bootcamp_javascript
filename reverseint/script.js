function reverse(){
	numero = document.getElementById("texto").value;
	const n = numero;
	numero.toString();
	let reversed = '';
	
	for(let character of numero){
		reversed = character + reversed;
	}
	
	document.getElementById("mensagem").innerHTML = parseInt(reversed)*Math.sign(n);
}
