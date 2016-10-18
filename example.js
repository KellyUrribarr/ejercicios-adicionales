
 /*Ejercios para puntos adicionales.*/

 /*MENOR DE LOS NUMEROS*/
 function numeroMenor(nUno, nDos, nTres){
 	var menor = Math.min(nUno, nDos, nTres);
 	return document.write ("El número menor es: " + menor);
 }

 /*NUMEROS PAR O IMPAR*/
 function parImpar(n){
 	var resultado = "El número ingresado es: ";
 	if(n % 2 === 0){
 	return resultado += "Es par";
 	}else{
 	resultado += "Es Impar";
 	}
 	return resultado;
}

/*MAYUSCULAS O MINUSCULAS*/
function mayusculaMinuscula(cadena){
	var resultado = "";
	if(cadena === cadena.toUpperCase()){
		return resultado += "Es mayusculas";
	}else if(cadena === cadena.toLowerCase()){
		return resultado += "Es minuscula";
	}else{
		return resultado += "ambas";
	}
	return resultado;
 }
