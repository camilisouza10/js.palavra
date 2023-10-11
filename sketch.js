function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("purple");
    fill("black");
    textSize(64);
    textAlign(CENTER, CENTER);
    
    let maximo = width;
    let minimo = 0;
    // mouseX, 0, width ==> 0, palavra.length
    let palavra = "Kelma";
    let quantidade = map(mouseX, 0, width, 0, palavra.length);
    console.log(quantidade);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200);
    
    //  if(mouseX < 50) {
    //    let palavra = "K";
    //    text(palavra, 200, 200);
    // }  else  if(moouseX < 100)  {
    //    let palavra = "Kel";
    //    text(palavra, 200, 200);
    // }  else {
    //    let palavra = "Kelma";
    //    text(palavra, 200, 200);
    // }
    
  }