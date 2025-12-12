# ⚔️ Escrevendo as Classes de um Jogo

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![OOP](https://img.shields.io/badge/OOP-Programming-orange?style=for-the-badge)
![DIO](https://img.shields.io/badge/DIO-Bootcamp-blue?style=for-the-badge)

## 📋 Sobre o Projeto

Desafio prático do Bootcamp da **Digital Innovation One (DIO)** que implementa um sistema de classes para representar heróis de aventura em um jogo, utilizando conceitos de Programação Orientada a Objetos (POO) em JavaScript.

Este projeto demonstra o uso de conceitos fundamentais:
- ✅ Variáveis
- ✅ Operadores
- ✅ Estruturas de decisão (switch/case)
- ✅ Funções e Métodos
- ✅ **Classes e Objetos**
- ✅ Laços de repetição

## 🎯 Objetivo

Criar uma classe genérica que represente um herói de aventura com as seguintes características:

### Propriedades
- **nome** - Nome do herói
- **idade** - Idade do herói
- **tipo** - Tipo do herói (guerreiro, mago, monge, ninja)

### Métodos
- **atacar()** - Executa um ataque baseado no tipo do herói

### 🗡️ Tipos de Ataque

| Tipo | Ataque |
|------|--------|
| Mago | usou magia |
| Guerreiro | usou espada |
| Monge | usou artes marciais |
| Ninja | usou shuriken |

## 📤 Saída Esperada

O método `atacar()` exibe a mensagem no formato:

```
o {tipo} atacou usando {ataque}
```

### Exemplos:
```
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (versão 12 ou superior)
- Git instalado

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/celloweb-ai/classes-jogo-heroi.git
```

2. Entre no diretório do projeto:
```bash
cd classes-jogo-heroi
```

3. Execute o programa:
```bash
node index.js
```

## 💻 Uso

### Criando um Herói

```javascript
const Heroi = require('./index.js');

// Criar um novo herói
const meuHeroi = new Heroi("Gandalf", 2019, "mago");

// Exibir informações
meuHeroi.exibirInfo();

// Executar ataque
meuHeroi.atacar();
// Saída: o mago atacou usando magia
```

### Testando Múltiplos Heróis

Execute o arquivo de exemplos:
```bash
node exemplos.js
```

Ou usando npm:
```bash
npm run exemplos
```

## 📂 Estrutura do Projeto

```
classes-jogo-heroi/
│
├── index.js           # Classe Heroi e exemplo básico
├── exemplos.js        # Exemplos com múltiplos heróis
├── README.md          # Documentação do projeto
├── package.json       # Configurações do projeto
├── .gitignore         # Arquivos ignorados pelo Git
└── LICENSE            # Licença MIT
```

## 🔧 Funcionalidades

### Classe Heroi

```javascript
class Heroi {
    constructor(nome, idade, tipo)
    obterAtaque()      // Retorna o tipo de ataque baseado no tipo do herói
    atacar()           // Exibe a mensagem de ataque
    exibirInfo()       // Mostra informações do herói
}
```

## 🎓 Conceitos de POO Aplicados

### Classes e Objetos
```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

const heroi1 = new Heroi("Thor", 1500, "guerreiro");
```

### Encapsulamento
```javascript
obterAtaque() {
    // Lógica interna da classe
    switch (this.tipo) {
        case "mago":
            return "usou magia";
        // ...
    }
}
```

### Métodos
```javascript
atacar() {
    const ataque = this.obterAtaque();
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
}
```

## 🎮 Exemplos de Heróis

| Nome | Idade | Tipo | Ataque |
|------|-------|------|--------|
| Gandalf | 2019 | mago | usou magia |
| Arthas | 30 | guerreiro | usou espada |
| Aang | 112 | monge | usou artes marciais |
| Naruto | 17 | ninja | usou shuriken |

## 🔄 Estruturas de Decisão

O projeto utiliza `switch/case` para determinar o tipo de ataque:

```javascript
switch (this.tipo.toLowerCase()) {
    case "mago":
        ataque = "usou magia";
        break;
    case "guerreiro":
        ataque = "usou espada";
        break;
    // ...
}
```

## 🔁 Laços de Repetição

No arquivo `exemplos.js`, utilizamos laços para processar múltiplos heróis:

```javascript
for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Marcus Vasconcellos**
- GitHub: [@celloweb-ai](https://github.com/celloweb-ai)
- LinkedIn: [Marcus Vasconcellos](https://www.linkedin.com/in/marcusvasconcellos)

## 🙏 Agradecimentos

- [Digital Innovation One (DIO)](https://www.dio.me/) pelo desafio e conteúdo educacional
- Comunidade de desenvolvedores que contribuem com feedback e melhorias

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
