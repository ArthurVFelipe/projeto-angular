export class Coracao{
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string='/assets/heart.png',
        public urlCoracaoVazio: string = '/assets/love.png',

        ){}

        public exibeCoracao(): string{
            if(this.cheio){
                return this.urlCoracaoCheio
            } else {
                return this.urlCoracaoVazio
            }
        }
}