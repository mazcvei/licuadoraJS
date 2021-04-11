let estadoLicuadora = "apagada";
let licuadora = document.getElementById('blender');
let sonidoLicuadora=document.getElementById('blender-sound');
let botonLicuadora=document.getElementById('blender-button-sound');

const controlarLicuadora= ()=> {
    if(estadoLicuadora=="apagada"){
        playLicuadora();
        estadoLicuadora="encendida";
        botonLicuadora.document
        licuadora.classList.add('active');
       // console.log('encendiste');
    }else{
        playLicuadora();
        estadoLicuadora = "apagada";
        licuadora.classList.remove('active');
       // console.log('apagaste');
    }
}
const playLicuadora = ()=>{
    if(sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
    }else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime=0;
    }
}