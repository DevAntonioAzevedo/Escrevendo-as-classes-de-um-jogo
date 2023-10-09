// Estudo de Logica da Programacao
// Bootcamp Logica da Programacao na Dio
// Autor do desafio: Felipe Aguiar
// Projeto desenvolvido por: Antonio Azevedo (aluno)
// Criado em 09/10/2023

// Definicao e Construcao da classe Heroi
class hero {
    // Construtor da classe Heroi
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    // Metodo para realizar o ataque
    attack() {
        let attacking;

        // Determina o tipo do ataque com base no tipo do Heroi
        switch (this.type) {
            case "Mago":
                attacking = "uma magia"
                break
            case "Guerreiro":
                attacking = "uma espada"
                break
            case "Monge":
                attacking = "artes marciais"
                break
            case "Ninja":
                attacking = "um shuriken"
                break
            default:
                attacking = "ataque indefinido"
        }
        
        // Exibe a mensagem de ataque esperada
        console.log(`O ${this.type} ${this.name} atacou usando ${attacking}.`)
    }
}

// Cria uma instancia da classe Heroi
const myHero = new hero("Antonio", 45, "Guerreiro")

// Chama o metodo attack para realizar o ataque
myHero.attack()