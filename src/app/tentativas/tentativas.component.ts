import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Coracao } from 'src/shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
//property binding valores de atributos para os elementos html[]
 // public coracaoVazio: string = '/assets/love.png'
 // public coracaoCheio: string = '/assets/heart.png'

  @Input() public  tentativas!: number 
  
  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]
  constructor() {

   }

   ngOnChanges() {
    // this.tentativas
    //this.coracoes.lenght
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }
   }

  ngOnInit(): void {
  }

}
