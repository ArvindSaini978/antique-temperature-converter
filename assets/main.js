const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

function Cconverter(valNum) {
    if (valNum!=='-'&&valNum!=="") {
        valNum = parseFloat(valNum);
        fahrenheit.value = ((valNum * 1.8)+32).toFixed(2);
        kelvin.value = (valNum+273.15).toFixed(2) ;
    }else{
        fahrenheit.value = "";
        kelvin.value = "" ;
    }
}
function Fconverter(valNum) {
    if (valNum!=='-'&&valNum!=="") {
        valNum = parseFloat(valNum);
        celsius.value = ((valNum - 32) / 1.8).toFixed(2);
        kelvin.value = (((valNum-32)/1.8)+273.15).toFixed(2) ;
    }else{
        celsius.value = "";
        kelvin.value = "" ;
    }
}
function Kconverter(valNum) {
    if (valNum!=='-'&&valNum!=="") {
        valNum = parseFloat(valNum);
        celsius.value = (valNum -273.15).toFixed(2);
        fahrenheit.value = (((valNum-273.15)*1.8)+32).toFixed(2) ;
    }else{
        celsius.value = "";
        fahrenheit.value = "" ;
    }
}

