
var bird;
var pipes = [];
function setup() {
  createCanvas(400, 600);
  //cria o passaro
  bird = new Bird();
  //array com os pipes
  pipes.push(new Pipe());
}

//desenha o background, a janela 400px por 600px e mete de fundo a png do jogo
//codigo base
function draw_background(){
    var canvas = document.getElementById('defaultCanvas0');
    var context = canvas.getContext('2d');
    var back_image = new Image();
    back_image.src = 'backflappy.png';
    context.drawImage(back_image,0,0,400,600);
}

function draw() {
    draw_background();
  //background(0);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }

//se um pipe sair do ecra, ja nao for visicel, é eliminado.
//splice é uma funçao pre definida que dá remove a um elemtento de um array
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }


  }
  //aplica a gravidade ao passaro
  bird.update();
  //mostra o passaro
  bird.show();

//a cada 100 pixeis aparece um novo pipe
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
}

//clicar no espaço ' ' faz o passaro subir
function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
