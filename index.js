/**
 * Escrevendo as classes de um Jogo
 * Desafio DIO - Bootcamp
 * 
 * Este programa implementa uma classe genérica que representa um herói
 * de aventura com propriedades e métodos específicos.
 */

/**
 * Classe que representa um herói de aventura
 */
class Heroi {
    /**
     * Construtor da classe Heroi
     * @param {string} nome - Nome do herói
     * @param {number} idade - Idade do herói
     * @param {string} tipo - Tipo do herói (guerreiro, mago, monge, ninja)
     */
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    /**
     * Obtém a descrição do ataque baseado no tipo do herói
     * @returns {string} - Descrição do ataque
     */
    obterAtaque() {
        let ataque;
        
        // Estrutura de decisão para determinar o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        
        return ataque;
    }

    /**
     * Método que executa o ataque do herói
     * Exibe a mensagem: "o {tipo} atacou usando {ataque}"
     */
    atacar() {
        const ataque = this.obterAtaque();
        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
        return mensagem;
    }

    /**
     * Exibe informações completas do herói
     */
    exibirInfo() {
        console.log(`\nHerói: ${this.nome}`);
        console.log(`Idade: ${this.idade} anos`);
        console.log(`Tipo: ${this.tipo}`);
    }
}

// Exemplo de uso básico
console.log('\n🗡️  SISTEMA DE HERÓIS - EXEMPLO BÁSICO\n');
console.log('='.repeat(50));

const heroi1 = new Heroi("Arthas", 30, "guerreiro");
heroi1.exibirInfo();
heroi1.atacar();

console.log('\n' + '='.repeat(50) + '\n');

// Exportar a classe para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Heroi;
}
