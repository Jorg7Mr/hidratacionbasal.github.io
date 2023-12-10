//funcion para el boton de calcular
const fnCalcular = () => {
    kilos = document.getElementById('txtKilos').value;
    //control de errores
    if (fnControlError(kilos) == 0 ) return 0;
    volumen = 0;
    mantenimiento = 0;
    resto = 0
    sc = 0;

    if (kilos <= 30) {
        hollidaySegar(kilos);
    } else {
        superficieCorporal(kilos);
    }
}
//Esta funcion hace aparece el div que le dice a la persona que algo esta mal
const fnControlError = (kilos) => {
    if (kilos == '' || kilos < 0) {
        document.getElementById('error').style.display = 'block';
        setTimeout(() => {
            document.getElementById('error').style.display = 'none';
        }, 2000)

        return 0;
    }
}


//Metodo de calculo Holliday-Segar

const hollidaySegar = (kilos) => {
    if (kilos > 20) {
        resto = kilos - 20;
        volumen = (resto * 20) + 1500;
    }
    else if (kilos > 10 && kilos <= 20) {
        resto = kilos - 10;
        volumen += (resto * 50) + 1000;
    }
    else {
        volumen += (kilos * 100);
    }
    mantenimiento = ((volumen / 24) * 1.5).toFixed(2);

    document.getElementById('flujo1').textContent = volumen + ' cc/hr'
    document.getElementById('flujo2').textContent = 'm+m/2 ' + mantenimiento + ' cc/hr';
}

//Metodo de Superficie Corporal
const superficieCorporal = (kilos) => {
    sc = (((kilos * 4) + 7) / (kilos + 90));
    let flujo1 = (sc * 1500).toFixed(2);
    let flujo2 = (sc * 2000).toFixed(2);

    document.getElementById('flujo1').textContent = flujo1 + 'cc/hr';
    document.getElementById('flujo2').textContent = 'm+m/2' + flujo2 + 'cc/hr';
}