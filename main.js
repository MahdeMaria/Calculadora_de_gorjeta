function calculatesDinner(){
    var totaldaconta = document.getElementById("conta").value;
    var taxaServico = document.getElementById("gorjeta").value;
    var numPessoas = document.getElementById("pessoa").value;

    if( totaldaconta === "" || taxaServico == 0 || isNaN(totaldaconta) || isNaN(numPessoas)){
        alert("Por favor, colocar um valor válido!")
    }
}

document.getElementById("calcula").onclick = function(){
    calculatesDinner();
}