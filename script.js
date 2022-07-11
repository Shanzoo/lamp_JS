const turnOn  = document.getElementById('turnOn');
const turnOff  = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');



function lampOn(){
    lamp.src = '../lamp_JS/imagens/lampOn.jpeg'
}

function lampOff(){
    lamp.src = '../lamp_JS/imagens/lampOff.jpeg'
}




turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mousehover', lampOff);
