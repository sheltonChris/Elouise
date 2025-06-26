AOS.init();

const dataEvento = new Date("July 1, 2025 10:30:00");
const timeStampEvento = dataEvento.getTime();

const contadorTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((diasAteEvento % diaEmMs) / horasEmMs);
    const minAteEvento = Math.floor((distanciaAteEvento % horasEmMs ) / minEmMs);
    const secAteEvento = Math.floor((distanciaAteEvento % minEmMs) / 1000);

    console.log(diasAteEvento)
    console.log(horasAteEvento)
    console.log(minAteEvento)
    console.log(secAteEvento)

    document.getElementById('contador').innerHTML = `<span>${diasAteEvento} d</span>
    <span>${horasAteEvento} h</span>
    <span>${minAteEvento} m</span>
    <span>${secAteEvento} s</span>
    `;

    if(distanciaAteEvento < 0){
        clearInterval(contadorTempo);
        document.getElementById('contador').innerHTML = `<h2>Até o próximo marco da nossa Princesa</h2>`
    }

}, 1000)