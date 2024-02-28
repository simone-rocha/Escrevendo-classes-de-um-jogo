class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


let heroi1 = new Heroi('Poderoso', 15, 'mago');
heroi1.atacar();  

let heroi2 = new Heroi( 'Atacante', 30, 'guerreiro');
heroi2.atacar();

let heroi3 = new Heroi ('Destemido', 40, 'louco');
heroi3.atacar();