const codi = document.getElementById("codigo");
const barraLateral = document.querySelector(".barra-lateral");
const spans = document.querySelectorAll("span");
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
/*const botoncito = document.getElementById("book");
const barra = document.querySelector(".barra-lateral");*/
const bodyoscuro = document.querySelector("body");




/*menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=350){
        barraLateral.classList.add("mini-barra-lateral");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});*/
palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
    /*formulario.classList.toggle("dark-mode2f");
    iconOs.classList.toggle("dark-modeiconoclose");
    btndark.classList.toggle("darkbtn");
    darkini.classList.toggle("darkinicio");
    darkico.classList.toggle("darkiconos");
    darkico2.classList.toggle("darkiconos2");
    cajasdark1.classList.toggle("darkcajas1");
    cajasdark2.classList.toggle("darkcajas2");
    olvidaste.classList.toggle("darkOlvidaste");
    mostrar.classList.toggle("darkmostrar");
    darkletras1.classList.toggle("darkletras1");
    darkletras2.classList.toggle("darkletras2");*/
    bodyoscuro.classList.toggle("darkbody");
   
});
    /*codi.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    spans.forEach((span)=>{
       span.classList.toggle("oculto");
    });
});*/

/*botoncito.onclick = function() {
    barra.classList.toggle("active");
}*/