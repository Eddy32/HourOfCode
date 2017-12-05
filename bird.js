//codigo base
function draw_bird (s,x,y) {
    var base_image = new Image();

    base_image.src = 'bird2.png';
    //alterei o tamanho
    s.drawImage(base_image, x, y,30,26);
}


function Bird() {
  //Posição inicial
  this.y = height/2;
  this.x = 64;

 //relativamente ao movimento vertical (gravidade)
  //força da gravida - puxa para baixo
  this.gravity = 0.7;
  //força do salto para cima (negativo devido ao referencial)
  this.lift = -15;
  //movimento vertical, é o que se vai somar ao y para mover o passaro
  this.velocity = 0;

  //funçoes ambrosio, no idea, imagino que seja relativo ao uso de imagens png
  this.show = function() {
    var canvas = document.getElementById('defaultCanvas0');
    var context = canvas.getContext('2d');
    draw_bird(context,this.x,this.y);

  }

  //moviemto do passaro no eixo do y
  this.up = function() {
    this.velocity += this.lift;
    //MOSTRAR
  }

  this.update = function() {
    //alterações do y devido a gravidade
    this.velocity += this.gravity;
    //multiplica-se por 0.9 para ficar um movimento mais fluido
    //REVIEW
    this.velocity *= 0.9;
    //soma-se ao y o valor da variavel 'velocity' de forma a fazer o salto
    this.y += this.velocity;

    //nao o deixa sair superiormente do mapa
    if (this.y > height-26) {
      this.y = height-26;
      this.velocity = 0;
    }
    //nao o deixa sair inferiormente do mapa
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
