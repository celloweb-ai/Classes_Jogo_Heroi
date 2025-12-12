/**
 * Exemplos de uso do Sistema de Classes de Herói
 * Demonstra o uso com múltiplos heróis, laços de repetição e POO
 */

const Heroi = require('./index.js');

console.log('\n⚔️  SISTEMA DE HERÓIS - DEMONSTRAÇÃO COMPLETA ⚔️\n');
console.log('='.repeat(60));
console.log('\n');

// Array de heróis para demonstração - usando Classes e Objetos
const herois = [
    new Heroi("Gandalf", 2019, "mago"),
    new Heroi("Arthas", 30, "guerreiro"),
    new Heroi("Aang", 112, "monge"),
    new Heroi("Naruto", 17, "ninja"),
    new Heroi("Merlin", 150, "mago"),
    new Heroi("Conan", 35, "guerreiro"),
    new Heroi("Liu Kang", 28, "monge"),
    new Heroi("Ryu Hayabusa", 23, "ninja")
];

console.log('📋 LISTA DE HERÓIS E SEUS ATAQUES:\n');

// Laço de repetição para exibir informações de todos os heróis
for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    console.log(`${i + 1}. ${heroi.nome} (${heroi.tipo}, ${heroi.idade} anos)`);
    heroi.atacar();
    console.log('');
}

console.log('='.repeat(60));

// Estatísticas usando estruturas de decisão e operadores
console.log('\n📊 ESTATÍSTICAS:\n');

let contagemPorTipo = {
    mago: 0,
    guerreiro: 0,
    monge: 0,
    ninja: 0
};

let idadeTotal = 0;

// Laço para contar heróis por tipo e calcular média de idade
for (let i = 0; i < herois.length; i++) {
    const tipo = herois[i].tipo.toLowerCase();
    
    // Estrutura de decisão para contagem
    if (contagemPorTipo.hasOwnProperty(tipo)) {
        contagemPorTipo[tipo]++;
    }
    
    // Operador de adição para somar idades
    idadeTotal += herois[i].idade;
}

console.log(`Total de heróis: ${herois.length}`);
console.log(`\nHeróis por tipo:`);
console.log(`  - Magos: ${contagemPorTipo.mago}`);
console.log(`  - Guerreiros: ${contagemPorTipo.guerreiro}`);
console.log(`  - Monges: ${contagemPorTipo.monge}`);
console.log(`  - Ninjas: ${contagemPorTipo.ninja}`);
console.log(`\nIdade média: ${(idadeTotal / herois.length).toFixed(1)} anos`);

// Encontrar o herói mais velho usando laço e operador de comparação
let maisVelho = herois[0];
for (let i = 1; i < herois.length; i++) {
    if (herois[i].idade > maisVelho.idade) {
        maisVelho = herois[i];
    }
}

console.log(`\nHerói mais velho: ${maisVelho.nome} (${maisVelho.idade} anos)`);

console.log('\n' + '='.repeat(60));
console.log('\n✅ Demonstração concluída!\n');

// Exemplo adicional: simulando uma batalha
console.log('\n⚔️  SIMULAÇÃO DE BATALHA:\n');
console.log('='.repeat(60));
console.log('\n');

// Selecionar 4 heróis aleatórios para batalha
const heroisBatalha = [];
for (let i = 0; i < 4 && i < herois.length; i++) {
    heroisBatalha.push(herois[i]);
}

console.log('Heróis entrando em combate:\n');
for (let i = 0; i < heroisBatalha.length; i++) {
    console.log(`Turno ${i + 1}:`);
    heroisBatalha[i].atacar();
    console.log('');
}

console.log('='.repeat(60));
console.log('\n🏆 Batalha finalizada!\n');
