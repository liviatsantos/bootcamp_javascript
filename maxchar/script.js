function funcao(){
	const string = document.getElementById("texto").value;
	const chars = {};
	let max = 0;
	let maxChar;

	for(let char of string){
		//chars[char] = chars[char] + 1 || 1;
		if(chars[char]){
			chars[char]++;
		}else{
			chars[char] = 1;
		}
	}

	for(let char in chars){
		if(chars[char] > max){
			max = chars[char];
			maxChar = char;
		}
	}
	
	console.log(maxChar);
	document.getElementById("mensagem").innerHTML = maxChar;
}
