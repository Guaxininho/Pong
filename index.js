'use strict';

// PROPRIEDADES DA BOLINHA
let xBolinha = 400; // posição x da bolinha
let yBolinha = 200; // posição y da bolinha
let diametro = 15; // tamanho da bolinha
let velocidadeX = 8; // velocidade da bolinha x
let velocidadeY = 6;// velocidade da bolinha y
let raio = diametro / 2
let colidiu = false;

// PROPRIEDADES DA RAQUETE
let xRaquete = 10;
let yRaquete = 150;
let comprimentoRaquete = 15;
let alturaRaquete = 60;

// PROPRIEDADES DA RAQUETE OPONENTE

let xRaqueteo = 775;
let yRaqueteo = 150;
let comprimentoRaqueteo = 15;
let alturaRaqueteo = 60;
let velocidadeYDoOponente;

// PLACAR DO JOGO

let meuspontos = 0;
let pontosDoOponente = 0;

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
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteo,yRaqueteo);
  movimentoRaqueteOponente();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteo, yRaqueteo);
  incluiPlacar();
  marcaponto();
  bolinhaNaoFicaPresa();
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
function mostraRaquete (x,y){
  rect(x,y,comprimentoRaquete,alturaRaquete);
}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -=10;
  } if (keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
  }
}

function movimentoRaqueteOponente(){
  // ERRO
  if ((Math.trunc(Math.random() *25 + 1)) < 10) {
    velocidadeYDoOponente = yBolinha - yRaqueteo - 62 //erro
    yRaqueteo += velocidadeYDoOponente
  } else {
  // ACERTO
  velocidadeYDoOponente = yBolinha - yRaqueteo - (comprimentoRaqueteo / 2) - 66 //ponto
  yRaqueteo += velocidadeYDoOponente
}
}
function verificaColisaoRaquete(x,y){
  colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeX *= -1;
  }
}
function incluiPlacar(){
  textAlign(CENTER)
  textSize(20);
  fill(color(0,255,127));
  rect(325,10,50,25);
  fill(255);
  text(meuspontos, 350, 30);
  fill(color(0,255,127));
  rect(425,10,50,25);
  fill(255);
  text(pontosDoOponente, 450, 30);
}
function marcaponto(){
  if(xBolinha > 795){
    meuspontos +=1;
  }
  if(xBolinha < 5){
    pontosDoOponente +=1;
  }
}
function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 4){
  xBolinha = 20
  }
  if (xBolinha - raio > 796){
    xBolinha = 780
  }
}