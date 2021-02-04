import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides, NavController  } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { createAnimation } from "@ionic/core";

@Component({
  selector: 'app-escolherjogadores',
  templateUrl: './escolherjogadores.page.html',
  styleUrls: ['./escolherjogadores.page.scss'],
})
export class EscolherjogadoresPage implements OnInit {
  @ViewChild('canvascarta1', { static: true }) 
  canvascarta1: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvascarta2', { static: true }) 
  canvascarta2: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta3', { static: true }) 
  canvascarta3: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta4', { static: true }) 
  canvascarta4: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta5', { static: true }) 
  canvascarta5: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta6', { static: true }) 
  canvascarta6: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta7', { static: true }) 
  canvascarta7: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta8', { static: true }) 
  canvascarta8: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta9', { static: true }) 
  canvascarta9: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta10', { static: true }) 
  canvascarta10: ElementRef<HTMLCanvasElement>;  
  @ViewChild('canvascarta11', { static: true }) 
  canvascarta11: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvascarta12', { static: true }) 
  canvascarta12: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvascarta13', { static: true }) 
  canvascarta13: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvascarta14', { static: true }) 
  canvascarta14: ElementRef<HTMLCanvasElement>;
  
  constructor() { }  

  async ngOnInit() {
    var ctxs = [];
    ctxs.push(this.canvascarta1.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta2.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta3.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta4.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta5.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta6.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta7.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta8.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta9.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta10.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta11.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta12.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta13.nativeElement.getContext('2d'));
    ctxs.push(this.canvascarta14.nativeElement.getContext('2d'));

    var jogadores = this.buscarJogadores();

    var x = 10;
    for (let index = 0; index < 14; index++) { 
      
        this.carta(ctxs[index], x, index + 1, jogadores[index]);
        x += 30;
        await this.sleep(100);
    }
  }

  carta(ctx, x,index, jog){
    console.log(jog);
    ctx.fillStyle = "#969292";
    ctx.fillRect(10, 0, 200,300);
    ctx.fill();

    if(jog){
      ctx.beginPath();
      var tile1 = new Image();
      tile1.src = "assets/imagens/pescoco" + jog.pescoco + "-figurinha.png";
      ctx.drawImage(tile1, 75, 130);
      ctx.closePath();
      
      ctx.beginPath();
      var tile1 = new Image();
      tile1.src = "assets/imagens/cabeca" + jog.cabeca + "-figurinha.png";
      ctx.drawImage(tile1, 72, 70);
      ctx.closePath();
      
      ctx.beginPath();
      var tile1 = new Image();
      tile1.src = "assets/imagens/cabelo" + jog.cabelo + "-figurinha.png";
      ctx.drawImage(tile1, 77.5, 60);
      ctx.closePath();

      ctx.beginPath();
      var tile1 = new Image();
      tile1.src = "assets/imagens/boca" + jog.boca + "-figurinha.png";
      ctx.drawImage(tile1, 101, 145);
      ctx.closePath();
      
      ctx.beginPath();
      var tile1 = new Image();
      tile1.src = "assets/imagens/nariz" + jog.nariz + "-figurinha.png";
      ctx.drawImage(tile1, 96, 108);
      ctx.closePath();

      ctx.beginPath();
      var tile1 = new Image();
      tile1.src = "assets/imagens/olhos" + jog.olhos + "-figurinha.png";
      ctx.drawImage(tile1, 86, 108);
      ctx.closePath();

      ctx.beginPath();
      var tile1 = new Image();
      tile1.src = "assets/imagens/camisa-figurinha.png";
      ctx.drawImage(tile1, 18, 160);
      ctx.closePath();      
    }

    ctx.lineWidth=9;
    ctx.strokeStyle = "white";
    ctx.strokeRect(10, 0, 200,250);
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = "white";
    ctx.arc(25,20, 20, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle = "black";
    ctx.strokeRect(5, 0, 210,250);
    ctx.stroke();
    ctx.closePath();
    
    
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.fillRect(20, 220, 180,23);
    ctx.fill();
    ctx.closePath();

    if(jog){
      ctx.font='20px arial';
      ctx.fillStyle = 'black';       
      ctx.textAlign = "center";
      ctx.fillText(jog.nome,100,240);
      
      ctx.font='20px arial';
      ctx.fillStyle = 'black';  
      ctx.fillText(jog.potencia,25,25);
    }

    
    const animation = createAnimation()
      .addElement(document.querySelector("#canvascarta" + index))
      .easing("ease-in-out")
      .duration(800)
      .direction("alternate")
      .iterations(1)
      .fromTo('transform', 'translateX(900px)', 'translateX(' + x + 'px)');
      animation.play();
     
  } 

  clickCarta(index){
    var idcarta = (<HTMLInputElement>document.getElementById('idcarta')).value;
    
    if(idcarta){
      if(idcarta != index){
        var elem = <HTMLInputElement>document.querySelector("#canvascarta" + idcarta);
        const animation = createAnimation()
        .addElement(document.querySelector("#canvascarta" + idcarta))
        .easing("ease-in-out")
        .duration(800)
        .direction("alternate")
        .iterations(1)
        .fromTo('transform', 'translateX(' + ((screen.width / 2) - 115) + 'px)', 'translateX(' + ((parseInt(idcarta) * 30) - 20 )  + 'px)')
        .onFinish(()=>{
          elem.style.zIndex =  idcarta;
          this.clickCarta(index);
        });
        animation.play();
      }else{
        var elem = <HTMLInputElement>document.querySelector("#canvascarta" + index);
        const animation = createAnimation()
        .addElement(document.querySelector("#canvascarta" + index))
        .easing("ease-in-out")
        .duration(800)
        .direction("alternate")
        .iterations(1)
        .fromTo('transform', 'translateX(' + ((screen.width / 2) - 115) + 'px)', 'translateX(' + ((index * 30) - 20 )  + 'px)')
        .onFinish(()=>{elem.style.zIndex =  index;});
        animation.play();
      }

      (<HTMLInputElement>document.getElementById('idcarta')).value = ''; 
    }else{
      var elem = <HTMLInputElement>document.querySelector("#canvascarta" + index);
      elem.style.zIndex = "99999";
      const animation = createAnimation()
      .addElement(document.querySelector("#canvascarta" + index))
      .easing("ease-in-out")
      .duration(800)
      .direction("alternate")
      .iterations(1)
      .fromTo('transform', 'translateX(' + ((index * 30) - 20)  + 'px)', 'translateX(' + ((screen.width / 2) - 115) + 'px)');
      animation.play();
      (<HTMLInputElement>document.getElementById('idcarta')).value = index;
    }    
  }

   sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  buscarJogadores(){
    var jogadores = [];
    var jogador = {}
      
    jogador = {nome: "1", potencia: 0, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);

    jogador = {nome: "2", potencia: 0, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);


    jogador = {nome: "Andre Barra", potencia: 90, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);

    jogador = {nome: "Leo Baca", potencia: 70, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Manduca", potencia: 60, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Ligeirinho", potencia: 40, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);

    jogador = {nome: "Zezinho", potencia: 30, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Pablo", potencia: 90, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Braço Jacaré", potencia: 90, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Brodolho", potencia: 50, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Bunô", potencia: 43, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Paulo Torneira", potencia: 25, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Botija", potencia: 89, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);
    
    jogador = {nome: "Yashin Favela", potencia: 74, pescoco: '1', cabeca: '1', boca: '1', nariz: '1', olhos: '1', cabelo: '1'};
    jogadores.push(jogador);


    return jogadores;
  }

}
