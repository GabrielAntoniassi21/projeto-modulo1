# SkillMatch Web

Aplicação web desenvolvida para analisar a compatibilidade entre um candidato e vagas de Front-End Júnior.

O sistema compara as habilidades informadas pelo candidato com os requisitos das vagas e apresenta a porcentagem de compatibilidade, habilidades encontradas, habilidades faltantes e a melhor oportunidade.

---

## Funcionalidades

- Cadastro do perfil do candidato;
- Seleção da área de atuação;
- Seleção de habilidades;
- Cálculo de compatibilidade com as vagas;
- Identificação de habilidades encontradas e faltantes;
- Classificação da compatibilidade;
- Identificação da melhor oportunidade;
- Interface responsiva.

---

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Live Server

---

## Estrutura do projeto

```text
SkillMatch-Web/
│
├── index.html
│
├── assets/
│   │
│   ├── img/
│   │   └── logo.png
│   │
│   ├── scripts/
│   │   ├── main.js
│   │   ├── motor.js
│   │   └── dados.js
│   │
│   └── styles/
│       └── styles.index.css
│
└── README.md
```

---

## Como executar o projeto

### 1. Baixar o projeto

Baixe o projeto pelo GitHub ou clone o repositório utilizando o Git.

### 2. Abrir o projeto no VS Code

1. Abra o Visual Studio Code;
2. Clique em **File > Open Folder**;
3. Selecione a pasta principal do projeto;
4. Clique em **Select Folder**.

### 3. Instalar o Live Server

Caso ainda não tenha o Live Server instalado:

1. No VS Code, clique no ícone de **Extensions**;
2. Pesquise por **Live Server**;
3. Selecione a extensão;
4. Clique em **Install**.

### 4. Abrir o projeto no navegador

Depois de instalar o Live Server:

1. Abra o arquivo `index.html`;
2. Clique com o botão direito dentro do arquivo;
3. Selecione **Open with Live Server**.

O projeto será aberto automaticamente no navegador.

> É necessário utilizar o Live Server para executar o projeto corretamente, pois o JavaScript utiliza módulos com `import` e `export`.

---

## Como utilizar o sistema

1. Informe o nome do candidato;
2. Informe a quantidade de meses de experiência;
3. Selecione a área de atuação;
4. Selecione as habilidades do candidato;
5. Clique em **Analisar Compatibilidade**.

Após a análise, o sistema exibirá:

- A compatibilidade com cada vaga;
- A classificação da compatibilidade;
- As habilidades encontradas;
- As habilidades faltantes;
- O salário;
- A modalidade de trabalho;
- A melhor oportunidade para o candidato.

---

## Conceitos utilizados

O projeto utiliza:

- Classes e objetos;
- Herança;
- Métodos de array;
- `filter()`;
- `includes()`;
- `every()`;
- `reduce()`;
- Closures;
- Promises;
- `async/await`;
- Manipulação do DOM;
- Eventos de formulário;
- Validação de dados;
- Módulos JavaScript com `import` e `export`.

---

## Autor

Gabriel Antoniassi de Oliveira