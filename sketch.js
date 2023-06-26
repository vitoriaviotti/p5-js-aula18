function setup() {
createCavas (220)

function draw() {
background(220);
fill("black");
  
  textSize (64);
  textAlign (CENTER, CENTER);
  
  let palavra = "Caminhante";
    
  let maximo = width;
  let minimo = 1;
  let quantidade = map(mouseX, 0, maximo, minimo, palavra.lenght);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200)}