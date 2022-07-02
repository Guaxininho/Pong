'use strict';

// PROPRIEDADES DA BOLINHA
let xBolinha = 400; // posição x da bolinha
let yBolinha = 200; // posição y da bolinha
let diametro = 15; // tamanho da bolinha
let velocidadeX = 6; // velocidade da bolinha x
let velocidadeY = 6; // velocidade da bolinha y
let raio = diametro / 2

// PROPRIEDADES DA RAQUETE
let xRaquete = 10;
let yRaquete = 150;
let comprimentoRaquete = 10;
let alturaRaquete = 100;


function setup() {
  createCanvas(800,400);
}
function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificacaoDeColisao();
  mostraRaquete();
  movimentoRaquete();
  verificacaoRaqueteColisao();
  
}

// FUNÇÕES

function mostraBolinha() {
  circle(xBolinha,yBolinha,diametro);
}
function movimentoBolinha(){
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}
function verificacaoDeColisao () {
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeX *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeY *= -1;
  }
}
function mostraRaquete (){
  rect(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete);
}
function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  } if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}
function verificacaoRaqueteColisao() {
  if (xBolinha - raio < xRaquete + comprimentoRaquete
     && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete){
    velocidadeX *= -1;
  }
}