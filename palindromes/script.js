function teste() {
	var texto, mensagem;
	texto = document.getElementById("texto").value;
	let i = '';
	
	for( let character of texto){
		i = character + i;
	}
	if(texto == i){
		mensagem = 'palindrome';
	}else{
		mensagem = 'não é palindrome';
	}
	document.getElementById("mensagem").innerHTML = mensagem;	
}