function abrirModal(carregarModal){
let modal=document.getElementById(carregarModal)
modal.style.display = 'block'
document.body.style.overflow = 'hidden'
}

function fecharModal (fecharModal) {
    let modal=document.getElementById(fecharModal)
    modal.style.display= 'none'
}



// function entrar(){
//     mouseAlt.style.background = '#2A3342'
// }

// const mouseEnt = document.getElementById('mouseEnt')

// mouseEnt.addEventListener("mouseenter"), (event) => {
//     // highlight the mouseenter target
//     event.target.style.color = "purple"
// }


//botão 4
// evento mouseover 
var bot = document.querySelector('#bot');

bot.addEventListener("mouseover", function() {
    bot.style.backgroundColor = "#2A3342"
});

//evento mouseout
bot.addEventListener("mouseout", function() {
    bot.style.backgroundColor = "white"
    bot.style.border = "none"
})



//botão 3
// evento mouseover 
var bot2 = document.querySelector('#bot2');

bot2.addEventListener("mouseover", function() {
    bot2.style.backgroundColor = "#2A3342"
});

//evento mouseout
bot2.addEventListener("mouseout", function() {
    bot2.style.backgroundColor = "white"
    bot2.style.border = "none"
})


//botão 2
// evento mouseover 
var bot3 = document.querySelector('#bot3');

bot3.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#2A3342"
});

//evento mouseout
bot3.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white"
    this.style.border = "none"
})


//botão 1
// evento mouseover 
var bot4 = document.querySelector('#bot4');

bot4.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#2A3342"
});

//evento mouseout
bot4.addEventListener("mouseout", function() {
    this.style.backgroundColor = "white"
    this.style.border = "none"
})