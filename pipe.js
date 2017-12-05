
//desenha pipe inferior
//codigo base
function draw_Pipe_bottom(x,y,z){
    var canvas = document.getElementById('defaultCanvas0');
    var context = canvas.getContext('2d');
    var pipe_main = new Image();
    var pipe_mainAux = new Image();
    pipe_main.src = 'pipe_main.png';
    pipe_mainAux.src = 'pipe_aux.png';
    context.drawImage(pipe_main,x+3,y+22,30,z-22);
    context.drawImage(pipe_mainAux,x,y,36,22);
}
//desenha pipe superior
//codigo base
function draw_Pipe_top(x,y,z){
    var canvas = document.getElementById('defaultCanvas0');
    var context = canvas.getContext('2d');
    var pipe_main = new Image();
    var pipe_mainAux = new Image();
    z = z - 22;
    pipe_main.src = 'pipe_main.png';
    pipe_mainAux.src = 'pipe_aux.png';
    context.drawImage(pipe_main,x+3,y,30,z);
    context.drawImage(pipe_mainAux,x,z-3,36,22);
}


function Pipe() {
  //cria um valor aleatorio para o espaço entre os pipes
  this.bottom = random(height/2);
  this.top = height - this.bottom - 150; // para a altura entre as pipes serem constantes
  this.x = width;
  //largura do pipe, para os remover
  this.w = 36;
  //velocidade do jogo, qnt maior mais esticado o jogo fica, os pipes afastan-se
  this.speed = 2;

  this.highlight = false;

//verifica se o passaro bate num pipe.
//se sim, a variavel highlight passa a true e vai dar reload ao jogo, linha 58
  this.hits = function(bird) {
    if (bird.y < this.top || (bird.y+26) > height - this.bottom) {
      if ((bird.x+30) > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    return false;
  }

  this.show = function() {

    //se bater num pipe da reload à pagina
    if (this.highlight) {
      setTimeout(window.location.reload(),1500);
    }
    //desenha pipe superior e inferior
    draw_Pipe_top(this.x,0, this.top);
    draw_Pipe_bottom(this.x,height-this.bottom,this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

//verifica se o pipe se encontra fora da janela visivel
  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
