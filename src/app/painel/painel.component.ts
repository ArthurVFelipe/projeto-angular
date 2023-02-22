import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from 'src/shared/frase.model';
import { FRASES } from './frase-mock'; 

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

      public frases: Frase[] = FRASES
      public instrucao: string = 'Traduza a frase:'
      public resposta: string = ''

      public rodada: number = 0
      public rodadaFrase!: Frase;

      public progresso: number = 0

      public tentativas: number = 3

     @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  public atualizaResposta(resposta: Event): void {
    //-----navegando pelo input do html para buscar os valores do text-----------
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
   // console.log('Verificar resposta: ', this.resposta)

   if(this.rodadaFrase.frasePtBr == this.resposta) {
    alert("A tradução está correta!")

   //Trocar pergunta da rodada
   this.rodada++

   //progresso
   this.progresso = this.progresso + (100 / this.frases.length)
   
   //
   if (this.rodada === 4 ){
    this.encerrarJogo.emit('Vitória!')
   }
   // Atualiza o objeto rodadaFrase
   this.atualizaRodada()
   

   } else {
    // diminuir a variavel tentativas
    this.tentativas--
    if (this.tentativas === -1){
      this.encerrarJogo.emit('Derrota!')
    } 
   }   
  }

  public atualizaRodada(): void{

    //define a frase da rodada base
    this.rodadaFrase = this.frases[this.rodada]

    //limpar resposta do usuário
    this.resposta = ''
  }

}
