const btnencriptar = document.querySelector(".encriptar");
const btndesencriptar = document.querySelector(".desencriptar");
const imagen = document.querySelector(".muneco");
const texto = document.querySelector("#mensaje-no-encontrado");
const input = document.querySelector(".texto-a-encriptar");
const output = document.querySelector(".encriptado-desencriptado");

const rectangulo = document.querySelector(".rectangulo"); 

const boton = document.createElement("button");
boton.type = "button";
boton.innerText = "Copiar";
boton.addEventListener ("click",function(){
    const texto = output.value;
    navigator.clipboard.writeText(texto);
});

btnencriptar.addEventListener("click", function(){
    esconderrectangulo();
    const texto = input.value;
    const textoEncriptado = encriptar(texto);
    mostrarTexto(textoEncriptado);
});

btndesencriptar.addEventListener("click", function(){
    esconderrectangulo();
    const texto = input.value;
    const textoEncriptado = desencriptar(texto);
    mostrarTexto(textoEncriptado);
});

function esconderrectangulo(){
    imagen.classList.add("desaparecer");
    texto.classList.add("desaparecer");

    boton.classList.add("estiloboton");
    boton.classList.add("desencriptar");
    boton.classList.add("copiar");
    rectangulo.appendChild(boton);
}

function encriptar (textoEncriptar){
    const texto = textoEncriptar;
    const textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    return textoCifrado;
}

function desencriptar (textoDesencriptar){  

    const textoCifrado = textoDesencriptar.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    return textoCifrado;
}

function mostrarTexto(texto){
    output.value = texto;
}