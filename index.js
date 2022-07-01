'use strict';

// PROPRIEDADES DA BOLINHA
let xBolinha = 400; // posição x da bolinha
let yBolinha = 200; // posição y da bolinha
let diametro = 15; // tamanho da bolinha
let velocidadeX = 6; // velocidade da bolinha x
let velocidadeY = 6; // velocidade da bolinha y

function setup() {
  createCanvas(800,400);
}
function draw() {
  background(0);
  circle(xBolinha,yBolinha,diametro);
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;

  if (xBolinha > width || xBolinha < 0){
    velocidadeX *= -1;
  }
  if (yBolinha > height || yBolinha < 0) {
    velocidadeY *= -1;
  }
}