import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, NavController  } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 
  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvasuniforme', { static: true }) 
  canvasuniforme: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private ctxuniforme: CanvasRenderingContext2D;
  private cor1: string;
  private cor2: string;
  private cor3: string;
  private nometime: string;
  private chaveescudo: string;
  private chavemascote: string;
  private chaveuniforme: string;
  constructor(public screenOrientation: ScreenOrientation, public navCtrl: NavController) { 
    console.log(screen.orientation.type);
    console.log(this.screenOrientation.type);
    //this.screenOrientation.lock('landscape');
  }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctxuniforme = this.canvasuniforme.nativeElement.getContext('2d');
    console.log(screen.width);
    console.log(screen.height);

  }

  ionSlideDidChange(event){
    this.nometime = (<HTMLInputElement>document.getElementById('nometime')).value;
    this.cor1 = (<HTMLInputElement>document.getElementById('cor1')).value;
    this.cor2 = (<HTMLInputElement>document.getElementById('cor2')).value;
    this.cor3 = (<HTMLInputElement>document.getElementById('cor3')).value;

    this.chaveescudo = (<HTMLInputElement>document.getElementById('chaveescudo')).value; 
    this.selecionarEscudo(this.chaveescudo);

    this.chavemascote = (<HTMLInputElement>document.getElementById('chavemascote')).value; 
    this.selecionarMascote(this.chavemascote);

    this.chaveuniforme = (<HTMLInputElement>document.getElementById('chaveuniforme')).value; 
    this.selecionarUniforme(this.chaveuniforme);

  }

  ionSlideReachEnd(event){
    console.log(event)
  }

  selecionarEscudo(chave){    
    this.ctx.fillStyle = "#3e3e3e";
    this.ctx.fillRect(60, 0, screen.width - 160,screen.height);
    this.ctx.fill();
    switch (chave) {
      case "1":
        this.escudo1();
        break;    
      case "2":
          this.escudo2();
          break;
      case "3":
          this.escudo3();
          break;
      case "4":
          this.escudo4();
          break;
      case "5":
          this.escudo5();
          break;
      case "6":
          this.escudo6();
          break;
      case "7":
          this.escudo7();
          break;
      default:
        break;
    }
  }

  escudo1(){
    //Listras
    this.ctx.fillStyle = this.cor2;
    this.ctx.fillRect(225,50, 150, 200);

    this.ctx.fillStyle = this.cor3;
    this.ctx.fillRect(225,50, 100, 200);

    this.ctx.fillStyle = this.cor2;
    this.ctx.fillRect(225,50, 55, 200); 

    //Desenhar circulo
    var X = 300;
    var Y = 150;
    var R = 100;
    this.ctx.beginPath();
    this.ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    this.ctx.lineWidth = 50;
    this.ctx.strokeStyle = this.cor1;
    this.ctx.stroke();
    
    this.ctx.font='90px arial';
    this.ctx.lineWidth=4;
  
    //Sigla no meio
    if(this.cor1 == this.cor3){
      this.ctx.strokeStyle=this.cor2;
    }else{
      this.ctx.strokeStyle=this.cor1;
    }
      
    this.ctx.fillStyle='white';   
    this.ctx.textAlign = "center";
    this.ctx.strokeText(this.nometime.substr(0,1),300,180);
   
    //Nome do time
    this.ctx.font='50px arial';

    if(this.cor1=='#ffffff'){
      this.ctx.fillStyle = 'black';  
    }else{
      this.ctx.fillStyle = 'white';  
    }
     
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.nometime,300,290);
    (<HTMLInputElement>document.getElementById('chaveescudo')).value = "1";
  }

  escudo2(){
    //retangulo
    this.ctx.fillStyle = this.cor3;
    this.ctx.fillRect(215,40, 165, 70);

    this.ctx.fillStyle = this.cor1;
    this.ctx.fillRect(223,50, 150, 50);
    

    this.ctx.strokeStyle = this.cor1;
    this.ctx.strokeRect(214,40, 167, 70);
    

    //triangulo de fora
    this.ctx.fillStyle = this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(215,110);
    this.ctx.lineTo(300,200);
    this.ctx.lineTo(380,110);
    this.ctx.closePath();
    this.ctx.fill();
    
    this.ctx.fillStyle = this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(216,112);
    this.ctx.lineTo(300,200);
    this.ctx.lineTo(379,112);
    this.ctx.closePath();
    this.ctx.stroke();

    //Triangulo da esquerda
    this.ctx.beginPath();
    this.ctx.moveTo(235,120);
    this.ctx.lineTo(295,185);
    this.ctx.lineTo(295,120);
    this.ctx.closePath();
    this.ctx.fill();
    
    
    //triangulo da direita
    this.ctx.fillStyle = this.cor2;
    this.ctx.beginPath();
    this.ctx.moveTo(360,120);
    this.ctx.lineTo(305,185);
    this.ctx.lineTo(305,120);
    this.ctx.closePath();
    this.ctx.fill();

   
    //Sigla no meio
    if(this.cor1 == this.cor3){
      this.ctx.fillStyle=this.cor2;
    }else{
      this.ctx.fillStyle=this.cor3;
    }
        
    this.ctx.font='50px arial';
    this.ctx.lineWidth=4;
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.Siglas(this.nometime,""),300,93);
    
    //Nome do time
    this.ctx.font='50px arial';

    if(this.cor1=='#ffffff'){
      this.ctx.fillStyle = 'black';  
    }else{
      this.ctx.fillStyle = 'white';  
    }
     
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.nometime,300,290);
    (<HTMLInputElement>document.getElementById('chaveescudo')).value = "2";
  }

  escudo3(){
    this.ctx.lineWidth = 10;
    
    //preenchimento    
    this.ctx.fillStyle = this.cor2;
    this.ctx.beginPath();
    this.ctx.moveTo(198, 75);
    this.ctx.lineTo(200, 100);
    this.ctx.lineTo(280, 100);
    this.ctx.lineTo(240, 70);
    this.ctx.closePath();
    this.ctx.fill();   
    this.ctx.beginPath();
    this.ctx.moveTo(340, 100);
    this.ctx.lineTo(365, 60);
    this.ctx.lineTo(400, 75);
    this.ctx.lineTo(400, 100);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.moveTo(240, 100);
    this.ctx.lineTo(295, 60);
    this.ctx.lineTo(310, 60);
    this.ctx.lineTo(355, 100);
    this.ctx.closePath();
    this.ctx.fill();
    //Preenchimento
    this.ctx.fillStyle = this.cor2;
    this.ctx.beginPath();
    this.ctx.moveTo(185,140);
    this.ctx.bezierCurveTo(220,170,90,220,300,270);
    this.ctx.moveTo(185,140);
    this.ctx.lineTo(300, 140);
    this.ctx.lineTo(300, 270);
    this.ctx.closePath();
    this.ctx.fill();
    
    this.ctx.fillStyle = this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(400,90);
    this.ctx.bezierCurveTo(380,170,510,220,300,270);
    this.ctx.moveTo(300,140);
    this.ctx.lineTo(380, 140);
    this.ctx.lineTo(300, 270);
    this.ctx.closePath();
    this.ctx.fill();

    

    //Faixa
    /*
    this.ctx.lineWidth = 50;
    this.ctx.beginPath();
    this.ctx.moveTo(210, 210);
    this.ctx.lineTo(380, 120);
    this.ctx.stroke();


    this.ctx.fillStyle = this.cor1;
    this.ctx.fillRect(218,100, 165, 50); 
    */

   this.ctx.fillStyle = this.cor1;
   this.ctx.beginPath();
   this.ctx.moveTo(198, 100);
   this.ctx.lineTo(190, 150);
   this.ctx.lineTo(410, 150);
   this.ctx.lineTo(392, 100);
   this.ctx.closePath();
   this.ctx.fill();

    this.ctx.lineWidth = 10;
    // Quadratric curves example
    this.ctx.beginPath();
    this.ctx.moveTo(200,70);
    this.ctx.bezierCurveTo(220,170,90,220,300,270);
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.moveTo(400,70);
    this.ctx.bezierCurveTo(380,170,510,220,300,270);
    this.ctx.stroke();

    this.ctx.moveTo(319, 60);
    this.ctx.arc(260, 60, 25, 0, Math.PI, false);
    this.ctx.stroke();
    
    this.ctx.moveTo(405, 70);
    this.ctx.arc(340, 60, 25, 0, Math.PI, false);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(200, 75);
    this.ctx.lineTo(235, 65);
    this.ctx.stroke();


    
    //Sigla no meio
    if(this.cor1 == this.cor3){
      this.ctx.fillStyle=this.cor2;
    }else{
      this.ctx.fillStyle=this.cor3;
    }
        
    this.ctx.font='50px arial';
    this.ctx.lineWidth=4;
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.Siglas(this.nometime, " "),300,143);
    this.ctx.fill();
this.ctx.closePath();
    (<HTMLInputElement>document.getElementById('chaveescudo')).value = "3";
  }

  escudo4(){
    
    this.ctx.beginPath();
    this.ctx.fillStyle = this.cor2;
    this.ctx.ellipse(300, 150, 70, 100, 0, 0, Math.PI*2);
    this.ctx.fill();
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = this.cor1;
    this.ctx.ellipse(300, 150, 70, 100, 0, 0, Math.PI*2);
    this.ctx.stroke();
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = this.cor3;
    this.ctx.ellipse(300, 150, 70, 100, 0, 0, Math.PI*2);
    this.ctx.stroke();
    this.ctx.closePath();
    //Listras
    
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = this.cor3;
    this.ctx.arc(300, 150, 60, -88.3, -6, true);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = this.cor1;
    this.ctx.arc(300, 150, 60, -88.8, -5.50, true);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = this.cor3;
    this.ctx.arc(300, 150, 60, -89.1, -5.20, true);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = this.cor1;
    this.ctx.arc(300, 150, 60, -89.4, -4.90, true);
    this.ctx.fill();
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = this.cor3;
    this.ctx.arc(300, 150, 60, -89.7, -4.60, true);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = this.cor1;
    this.ctx.arc(300, 150, 60, -90, -4.30, true);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.fillStyle = this.cor3;
    this.ctx.arc(300, 150, 60, -90.3, -4, true);
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = this.cor1;
    this.ctx.arc(300, 150, 60, 0, Math.PI * 2, true);
    this.ctx.stroke();
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.cor3;
    this.ctx.arc(300, 150, 60, 0, Math.PI * 2, true);
    this.ctx.stroke();
    this.ctx.closePath();
    
    this.ctx.beginPath();
    //Nome do time
    this.ctx.font='50px arial';

    if(this.cor1=='#ffffff'){
      this.ctx.fillStyle = 'black';  
    }else{
      this.ctx.fillStyle = 'white';  
    }
     
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.nometime,300,290);
this.ctx.closePath();

    (<HTMLInputElement>document.getElementById('chaveescudo')).value = "4";
  }
  
  escudo5(){
    //preencher
    this.ctx.fillStyle=this.cor2;
    this.ctx.strokeStyle=this.cor2;
    this.ctx.lineWidth = 50;
    this.ctx.beginPath();
    this.ctx.moveTo(250,70);
    this.ctx.bezierCurveTo(250,170,230,220,300,240);
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.moveTo(350,70);
    this.ctx.bezierCurveTo(350,170,370,220,295,240);
    this.ctx.stroke();

    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(250, 80);
    this.ctx.lineTo(350, 80);
    this.ctx.lineTo(330,250);
    this.ctx.lineTo(297,270);
    this.ctx.lineTo(270,250);
    this.ctx.closePath();
    this.ctx.fill();

    //Listras
    this.ctx.lineWidth = 10;
    
    this.ctx.fillStyle=this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(360,150);
    this.ctx.lineTo(360,220);
    this.ctx.lineTo(380, 200);
    this.ctx.lineTo(380, 150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(340,150);
    this.ctx.lineTo(340,240);
    this.ctx.lineTo(360, 220);
    this.ctx.lineTo(360, 150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(320,150);
    this.ctx.lineTo(320,260);
    this.ctx.lineTo(340, 240);
    this.ctx.lineTo(340, 150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(300,150);
    this.ctx.lineTo(300,270);
    this.ctx.lineTo(320, 260);
    this.ctx.lineTo(320, 150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(220, 150);
    this.ctx.lineTo(220, 200);
    this.ctx.lineTo(300,270);
    this.ctx.lineTo(300,150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(220, 150);
    this.ctx.lineTo(220, 200);
    this.ctx.lineTo(280,260);
    this.ctx.lineTo(280,150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(220, 150);
    this.ctx.lineTo(220, 200);
    this.ctx.lineTo(260,250);
    this.ctx.lineTo(260,150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(220, 150);
    this.ctx.lineTo(220, 200);
    this.ctx.lineTo(240,230);
    this.ctx.lineTo(240,150);
    this.ctx.closePath();
    this.ctx.fill();
    

    this.ctx.fillStyle=this.cor1;
    this.ctx.strokeStyle=this.cor1;
    
    // Quadratric curves example
    this.ctx.beginPath();
    this.ctx.moveTo(220,70);
    this.ctx.bezierCurveTo(220,170,200,220,300,270);
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.moveTo(380,70);
    this.ctx.bezierCurveTo(380,170,400,220,295,270);
    this.ctx.stroke();

    

    this.ctx.beginPath();
    this.ctx.moveTo(220, 75);
    this.ctx.lineTo(380, 75);
    this.ctx.stroke();

    //Faixa
    this.ctx.beginPath();
    this.ctx.fillStyle=this.cor1;
    this.ctx.moveTo(230,85);
    this.ctx.lineTo(370,85);
    this.ctx.lineTo(370, 145);
    this.ctx.lineTo(230, 145);
    this.ctx.closePath();
    this.ctx.fill();

    
    //Sigla no meio
    this.ctx.beginPath();
    //Sigla no meio
    if(this.cor1 == this.cor2){
      this.ctx.fillStyle=this.cor3;
    }else{
      this.ctx.fillStyle=this.cor2;
    }
        
    this.ctx.font='50px arial';
    this.ctx.lineWidth=3;
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.Siglas(this.nometime, ""),300,135);
    this.ctx.fill();
this.ctx.closePath();
    (<HTMLInputElement>document.getElementById('chaveescudo')).value = "5";
  }
  
  escudo6(){
    this.ctx.lineWidth = 10;
    
    //preenchimento    
    this.ctx.fillStyle = this.cor2;
    this.ctx.beginPath();
    this.ctx.moveTo(198, 75);
    this.ctx.lineTo(300, 65);
    this.ctx.lineTo(400, 75);
    this.ctx.lineTo(400, 180);
    this.ctx.lineTo(198, 180);
    this.ctx.closePath();
    this.ctx.fill();   
    //Preenchimento
    this.ctx.fillStyle = this.cor2;
    this.ctx.beginPath();
    this.ctx.moveTo(185,140);
    this.ctx.bezierCurveTo(220,170,90,220,300,270);
    this.ctx.moveTo(185,140);
    this.ctx.lineTo(300, 140);
    this.ctx.lineTo(300, 270);
    this.ctx.closePath();
    this.ctx.fill();
    
    this.ctx.fillStyle = this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(400,90);
    this.ctx.bezierCurveTo(380,170,510,220,300,270);
    this.ctx.moveTo(200,240);
    this.ctx.lineTo(400, 100);
    this.ctx.lineTo(400, 200);
    this.ctx.lineTo(300, 270);
    this.ctx.closePath();
    this.ctx.fill();

    
 
    this.ctx.lineWidth = 10;
    // Quadratric curves example
    this.ctx.beginPath();
    this.ctx.moveTo(200,70);
    this.ctx.bezierCurveTo(220,170,90,220,300,270);
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.moveTo(400,70);
    this.ctx.bezierCurveTo(380,170,510,220,300,270);
    this.ctx.stroke();


    this.ctx.beginPath();
    this.ctx.moveTo(200, 75);
    this.ctx.lineTo(300, 65);
    this.ctx.lineTo(400, 75);
    this.ctx.stroke();

    
    //Faixa
   
    this.ctx.fillStyle = this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(350, 75);
    this.ctx.lineTo(400, 75);
    this.ctx.lineTo(400, 120);
    this.ctx.closePath();
    this.ctx.fill();
    


    this.ctx.lineWidth = 50;
    this.ctx.beginPath();
    this.ctx.moveTo(192, 220);
    this.ctx.lineTo(380, 90);
    this.ctx.closePath();
    this.ctx.stroke();

var font, text, x, y;

text = this.Siglas(this.nometime, " ");

//Set font size before measuring
font = 50;
this.ctx.font = font + 'px Arial, sans-serif';
//Get width of text
var metrics = this.ctx.measureText(text);

//After a canvas resize, the context is reset. Set the font size again
this.ctx.font = font + 'px Arial';
//Set the drawing coordinates
x = font/2;
y = metrics.width/2;
//Style
    this.ctx.fillStyle = this.cor2;
this.ctx.textAlign = 'center';
this.ctx.textBaseline = "bottom";
//Rotate the context and draw the text
this.ctx.save();
this.ctx.translate(x, y);
this.ctx.rotate(-Math.PI / 5.1);
this.ctx.fillText(text, 170, 230);
this.ctx.restore();
this.ctx.closePath();


    (<HTMLInputElement>document.getElementById('chaveescudo')).value = "6";
  }

  escudo7(){
    //preencher
    this.ctx.fillStyle=this.cor2;
    this.ctx.strokeStyle=this.cor2;
    this.ctx.lineWidth = 50;
    this.ctx.beginPath();
    this.ctx.moveTo(250,70);
    this.ctx.bezierCurveTo(250,170,230,220,300,240);
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.moveTo(350,70);
    this.ctx.bezierCurveTo(350,170,370,220,295,240);
    this.ctx.stroke();

    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(250, 80);
    this.ctx.lineTo(350, 80);
    this.ctx.lineTo(330,250);
    this.ctx.lineTo(297,270);
    this.ctx.lineTo(270,250);
    this.ctx.closePath();
    this.ctx.fill();

    //Listras
    this.ctx.lineWidth = 10;
    
    this.ctx.fillStyle=this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(360,80);
    this.ctx.lineTo(360,220);
    this.ctx.lineTo(380, 200);
    this.ctx.lineTo(380, 80);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(340,80);
    this.ctx.lineTo(340,240);
    this.ctx.lineTo(360, 220);
    this.ctx.lineTo(360, 80);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(320,150);
    this.ctx.lineTo(320,260);
    this.ctx.lineTo(340, 240);
    this.ctx.lineTo(340, 150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(300,150);
    this.ctx.lineTo(300,270);
    this.ctx.lineTo(320, 260);
    this.ctx.lineTo(320, 150);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor1;
    this.ctx.beginPath();
    this.ctx.moveTo(220, 200);
    this.ctx.lineTo(220, 200);
    this.ctx.lineTo(300,270);
    this.ctx.lineTo(300,190);
    this.ctx.closePath();
    this.ctx.fill();

    this.ctx.fillStyle=this.cor3;
    this.ctx.beginPath();
    this.ctx.moveTo(220, 200);
    this.ctx.lineTo(220, 200);
    this.ctx.lineTo(280,260);
    this.ctx.lineTo(280,200);
    this.ctx.closePath();
    this.ctx.fill();



    this.ctx.fillStyle=this.cor1;
    this.ctx.strokeStyle=this.cor1;
    
    // Quadratric curves example
    this.ctx.beginPath();
    this.ctx.moveTo(220,70);
    this.ctx.bezierCurveTo(220,170,200,220,300,270);
    this.ctx.stroke();
    
    this.ctx.beginPath();
    this.ctx.moveTo(380,70);
    this.ctx.bezierCurveTo(380,170,400,220,295,270);
    this.ctx.stroke();

    

    this.ctx.beginPath();
    this.ctx.moveTo(220, 75);
    this.ctx.lineTo(380, 75);
    this.ctx.stroke();
 
     //Faixa
     this.ctx.lineWidth = 50;
     this.ctx.beginPath();
     this.ctx.moveTo(240, 220);
     this.ctx.lineTo(360, 90);
     this.ctx.closePath();
     this.ctx.stroke();

     this.ctx.lineWidth = 10;
     this.ctx.beginPath();
    this.ctx.moveTo(330, 75);
    this.ctx.lineTo(380, 75);
    this.ctx.lineTo(375,110);
    this.ctx.closePath();
    this.ctx.fill();

    
    var font, text, x, y;

    text = this.Siglas(this.nometime, " ");
    
    //Set font size before measuring
    font = 50;
    this.ctx.font = font + 'px Arial, sans-serif';
    //Get width of text
    var metrics = this.ctx.measureText(text);
    
    //After a canvas resize, the context is reset. Set the font size again
    this.ctx.font = font + 'px Arial';
    //Set the drawing coordinates
    x = font/2;
    y = metrics.width/2;
    //Style
        this.ctx.fillStyle = this.cor2;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = "bottom";
    //Rotate the context and draw the text
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(-Math.PI / 3.9);
    this.ctx.fillText(text, 150, 270);
    this.ctx.restore();
    this.ctx.closePath();
    
    (<HTMLInputElement>document.getElementById('chaveescudo')).value = "7";
  }

  Siglas(nometime, espaco){
    var retorno = "";
    var snome = nometime.split(' ');
    for (let index = 0; index < snome.length; index++) {
      const element = snome[index];
      if(element.toLowerCase() != "de" && element.toLowerCase() != "da" && element.toLowerCase() != "do")
        retorno += espaco + element.substr(0,1).toUpperCase();
    }

    return retorno;
  }

  selecionarMascote(chave){   
    (<HTMLInputElement>document.getElementById('img_mascote')).src = "../../assets/imagens/mascote" + chave + "_grande.png";
    (<HTMLInputElement>document.getElementById('chavemascote')).value = chave;
  }

  selecionarUniforme(chave){
   
    switch (chave) {
      case "1":
        this.uniforme1();
        break;    
      case "2":
          this.uniforme2();
          break;
      case "3":
          this.uniforme3();
          break;
      case "4":
          this.uniforme4();
          break;
      case "5":
          this.uniforme5();
          break;
      case "6":
          this.uniforme6();
          break;
      case "7":
          this.uniforme7();
          break;
      default:
        break;
    }
    (<HTMLInputElement>document.getElementById('img_uniforme')).src = "../../assets/imagens/uniforme_grande.png";

  }

  uniforme1(){
    var w = (<HTMLInputElement>document.getElementById('img_uniforme')).width;
    var h = (<HTMLInputElement>document.getElementById('img_uniforme')).height;
     //Listras
     this.ctxuniforme.fillStyle = this.cor1;
     this.ctxuniforme.fillRect(5,0, w-5, h-5);

     this.ctxuniforme.fillStyle = this.cor2;
     this.ctxuniforme.fillRect(40,0, 40, 40);
     this.ctxuniforme.fillRect(120,0, 40, 40);
     this.ctxuniforme.fillRect(200,0, 40, 40);
     //this.ctxuniforme.fillRect(280,0, 40, 40);
     //this.ctxuniforme.fillRect(360,0, 40, 40);
     //this.ctxuniforme.fillRect(440,0, 40, 40);
     
     this.ctxuniforme.fillRect(0,40, 40, 40);
     this.ctxuniforme.fillRect(80,40, 40, 40);
     this.ctxuniforme.fillRect(160,40, 40, 40);
     //this.ctxuniforme.fillRect(240,40, 40, 40);
     //this.ctxuniforme.fillRect(320,40, 40, 40);
     //this.ctxuniforme.fillRect(400,40, 40, 40);
 
     this.ctxuniforme.fillRect(40,80, 40, 40);
     this.ctxuniforme.fillRect(120,80, 40, 40);
     this.ctxuniforme.fillRect(200,80, 40, 40);
     //this.ctxuniforme.fillRect(280,80, 40, 40);
     //this.ctxuniforme.fillRect(360,80, 40, 40);
     //this.ctxuniforme.fillRect(440,80, 40, 40);

     this.ctxuniforme.fillRect(0,120, 40, 40);
     this.ctxuniforme.fillRect(80,120, 40, 40);
     this.ctxuniforme.fillRect(160,120, 40, 40);
     //this.ctxuniforme.fillRect(240,120, 40, 40);
     //this.ctxuniforme.fillRect(320,120, 40, 40);
     //this.ctxuniforme.fillRect(400,120, 40, 40);
 
     this.ctxuniforme.fillRect(40,160, 40, 40);
     this.ctxuniforme.fillRect(120,160, 40, 40);
     this.ctxuniforme.fillRect(200,160, 40, 40);
     //this.ctxuniforme.fillRect(280,160, 40, 40);
     //this.ctxuniforme.fillRect(360,160, 40, 40);
     //this.ctxuniforme.fillRect(440,160, 40, 40);

     this.ctxuniforme.fillRect(0,200, 40, 40);
     this.ctxuniforme.fillRect(80,200, 40, 40);
     this.ctxuniforme.fillRect(160,200, 40, 40);
     //this.ctxuniforme.fillRect(240,200, 40, 40);
     //this.ctxuniforme.fillRect(320,200, 40, 40);
     //this.ctxuniforme.fillRect(400,200, 40, 40);
 
     this.ctxuniforme.fillRect(40,240, 40, 40);
     this.ctxuniforme.fillRect(120,240, 40, 40);
     this.ctxuniforme.fillRect(200,240, 40, 40);
     //this.ctxuniforme.fillRect(280,240, 40, 40);
     //this.ctxuniforme.fillRect(360,240, 40, 40);
     //this.ctxuniforme.fillRect(440,240, 40, 40);

    
    //Nome do time
    this.ctxuniforme.font='30px arial';
    this.ctxuniforme.fillStyle = this.cor2;     
    this.ctxuniforme.textAlign = "center";
    this.ctxuniforme.fillText("NOME",370,70);
    
    this.ctxuniforme.font='100px arial';
    this.ctxuniforme.fillText("10",370,170);
    (<HTMLInputElement>document.getElementById('chaveuniforme')).value = "1";

  }

  uniforme2(){
    var w = (<HTMLInputElement>document.getElementById('img_uniforme')).width;
    var h = (<HTMLInputElement>document.getElementById('img_uniforme')).height;
     //Listras
     this.ctxuniforme.fillStyle = this.cor1;
     this.ctxuniforme.fillRect(5,0, w-5, h-5);

    var lx1 = 15;
    var ly1 = 0;
    var lx2 = 30;
    var ly2 = 30;
    var lx3 = 15;
    var ly3 = 60;
    var lx4 = 0;
    var ly4 = 30;

    var multiplicador = 30;
    var colunas = 8;
    var linhas = 4;
    var colunaatual = 1;
    var linhaatual = 1;
    for (let index = 0; index < colunas * linhas; index++) {

      this.ctxuniforme.fillStyle = this.cor2;  
      this.ctxuniforme.lineWidth = 10;
      this.ctxuniforme.beginPath();
      this.ctxuniforme.moveTo(lx1, ly1);
      this.ctxuniforme.lineTo(lx2, ly2);
      this.ctxuniforme.lineTo(lx3,ly3);
      this.ctxuniforme.lineTo(lx4,ly4);
      this.ctxuniforme.closePath();
      this.ctxuniforme.fill();

      
      lx1 += multiplicador;
      lx2 += multiplicador;
      lx3 += multiplicador;
      lx4 += multiplicador;   

      if(colunaatual == colunas){
        lx1 = 15;
        ly1 += multiplicador * 2;
        lx2 = 30;
        ly2 += multiplicador * 2;
        lx3 = 15;
        ly3 += multiplicador * 2;
        lx4 = 0;
        ly4 += multiplicador * 2;
        colunaatual = 0;
        linhaatual += 1;
      }
      
      colunaatual +=1;

      
    }
    

    //Nome do time
    this.ctxuniforme.font='30px arial';
    this.ctxuniforme.fillStyle = this.cor2;     
    this.ctxuniforme.textAlign = "center";
    this.ctxuniforme.fillText("NOME",370,70);
    
    this.ctxuniforme.font='100px arial';
    this.ctxuniforme.fillText("10",370,170);
    (<HTMLInputElement>document.getElementById('chaveuniforme')).value = "2";
  }

  uniforme3(){
    var w = (<HTMLInputElement>document.getElementById('img_uniforme')).width;
    var h = (<HTMLInputElement>document.getElementById('img_uniforme')).height;
     //Listras
     this.ctxuniforme.fillStyle = this.cor1;
     this.ctxuniforme.fillRect(5,0, w-5, h-5);

    var lx1 = 0;
    var ly1 = 0;
    var lx2 = 0;
    var ly2 = 260;

    var multiplicador = 40;
    var colunas = 7;

    for (let index = 0; index < colunas; index++) { 
      this.ctxuniforme.strokeStyle = this.cor2;  
      this.ctxuniforme.lineWidth = 20;
      this.ctxuniforme.beginPath();
      this.ctxuniforme.moveTo(lx1, ly1);
      this.ctxuniforme.lineTo(lx2, ly2);
      this.ctxuniforme.closePath();
      this.ctxuniforme.stroke();

      lx1 += multiplicador;
      lx2 += multiplicador;        
    }
    
    //Nome do time
    this.ctxuniforme.font='30px arial';
    this.ctxuniforme.fillStyle = this.cor2;     
    this.ctxuniforme.textAlign = "center";
    this.ctxuniforme.fillText("NOME",370,70);
    
    this.ctxuniforme.font='100px arial';
    this.ctxuniforme.fillText("10",370,170);
    (<HTMLInputElement>document.getElementById('chaveuniforme')).value = "3";

  }

  uniforme4(){
    var w = (<HTMLInputElement>document.getElementById('img_uniforme')).width;
    var h = (<HTMLInputElement>document.getElementById('img_uniforme')).height;
     //Listras
     this.ctxuniforme.fillStyle = this.cor1;
     this.ctxuniforme.fillRect(5,0, w-5, h-5);

    var lx1 = 0;
    var ly1 = 0;
    var lx2 = 243;
    var ly2 = 0;

    var multiplicador = 40;
    var colunas = 7;

    for (let index = 0; index < colunas; index++) { 
      this.ctxuniforme.strokeStyle = this.cor2;  
      this.ctxuniforme.lineWidth = 20;
      this.ctxuniforme.beginPath();
      this.ctxuniforme.moveTo(lx1, ly1);
      this.ctxuniforme.lineTo(lx2, ly2);
      this.ctxuniforme.closePath();
      this.ctxuniforme.stroke();

      ly1 += multiplicador;
      ly2 += multiplicador;        
    }
    
    //Nome do time
    this.ctxuniforme.font='30px arial';
    this.ctxuniforme.fillStyle = this.cor2;     
    this.ctxuniforme.textAlign = "center";
    this.ctxuniforme.fillText("NOME",370,70);
    
    this.ctxuniforme.font='100px arial';
    this.ctxuniforme.fillText("10",370,170);
    (<HTMLInputElement>document.getElementById('chaveuniforme')).value = "4";

  }

  uniforme5(){
    var grd = this.ctxuniforme.createLinearGradient(300, 0, 300, 300);
    grd.addColorStop(0, this.cor1);
    grd.addColorStop(1, this.cor2);

    var w = (<HTMLInputElement>document.getElementById('img_uniforme')).width;
    var h = (<HTMLInputElement>document.getElementById('img_uniforme')).height;
     //Listras
     this.ctxuniforme.fillStyle = grd;
     this.ctxuniforme.fillRect(5,0, w-5, h-5);

    //Nome do time
    this.ctxuniforme.font='30px arial';
    this.ctxuniforme.fillStyle = this.cor2;     
    this.ctxuniforme.textAlign = "center";
    this.ctxuniforme.fillText("NOME",370,70);
    
    this.ctxuniforme.font='100px arial';
    this.ctxuniforme.fillText("10",370,170);
     (<HTMLInputElement>document.getElementById('chaveuniforme')).value = "5";
  }

  uniforme6(){
    var w = (<HTMLInputElement>document.getElementById('img_uniforme')).width;
    var h = (<HTMLInputElement>document.getElementById('img_uniforme')).height;
     
    this.ctxuniforme.fillStyle = this.cor1;
    this.ctxuniforme.fillRect(5,0, w-5, h-5);
    
    //Listras
    this.ctxuniforme.strokeStyle = this.cor2;  
    this.ctxuniforme.lineWidth = 20;
    this.ctxuniforme.beginPath();
    this.ctxuniforme.moveTo(0, 250);
    this.ctxuniforme.lineTo(260, 0);
    this.ctxuniforme.closePath();
    this.ctxuniforme.stroke();
    
    this.ctxuniforme.strokeStyle = this.cor3;  
    this.ctxuniforme.lineWidth = 20;
    this.ctxuniforme.beginPath();
    this.ctxuniforme.moveTo(0, 270);
    this.ctxuniforme.lineTo(280, 10);
    this.ctxuniforme.closePath();
    this.ctxuniforme.stroke();

    
    //Nome do time
    this.ctxuniforme.font='30px arial';
    this.ctxuniforme.fillStyle = this.cor2;     
    this.ctxuniforme.textAlign = "center";
    this.ctxuniforme.fillText("NOME",370,70);
    
    this.ctxuniforme.font='100px arial';
    this.ctxuniforme.fillText("10",370,170);
    (<HTMLInputElement>document.getElementById('chaveuniforme')).value = "6";

  }

  uniforme7(){
    var w = (<HTMLInputElement>document.getElementById('img_uniforme')).width;
    var h = (<HTMLInputElement>document.getElementById('img_uniforme')).height;
    
     this.ctxuniforme.fillStyle = this.cor1;
     this.ctxuniforme.fillRect(5,0, w-5, h-5);

     
    this.ctxuniforme.fillStyle = this.cor2;  
    this.ctxuniforme.lineWidth = 10;
    this.ctxuniforme.beginPath();
    this.ctxuniforme.moveTo(0, 110);
    this.ctxuniforme.lineTo(30, 150);
    this.ctxuniforme.lineTo(40, 90);
    this.ctxuniforme.lineTo(60, 200);
    this.ctxuniforme.lineTo(80, 100);
    this.ctxuniforme.lineTo(100, 220);
    this.ctxuniforme.lineTo(120, 80);
    this.ctxuniforme.lineTo(140, 150);
    this.ctxuniforme.lineTo(160, 120);
    this.ctxuniforme.lineTo(180, 250);
    this.ctxuniforme.lineTo(200, 200);
    this.ctxuniforme.lineTo(220, 250);
    
    this.ctxuniforme.lineTo(320, 200);
    this.ctxuniforme.lineTo(340, 250);
    this.ctxuniforme.lineTo(360, 140);
    this.ctxuniforme.lineTo(380, 190);
    this.ctxuniforme.lineTo(400, 170);
    this.ctxuniforme.lineTo(420, 260);
    this.ctxuniforme.lineTo(440, 60);
    this.ctxuniforme.lineTo(460, 160);



    this.ctxuniforme.lineTo(500, 280);
    this.ctxuniforme.lineTo(0, 280);
    this.ctxuniforme.closePath();
    this.ctxuniforme.fill();

    
    //Nome do time
    this.ctxuniforme.font='30px arial';
    this.ctxuniforme.fillStyle = this.cor2;     
    this.ctxuniforme.textAlign = "center";
    this.ctxuniforme.fillText("NOME",370,70);
    
    this.ctxuniforme.font='100px arial';
    this.ctxuniforme.fillText("10",370,170);
    
    (<HTMLInputElement>document.getElementById('chaveuniforme')).value = "7";

  }
}
