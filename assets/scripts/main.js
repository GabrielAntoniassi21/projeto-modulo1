import {
    Candidato,
    VagaFrontEndJunior,
    proximaVaga
} from "./motor.js";

const melhorVagaElemento = document.getElementById("melhor-vaga");
const listaVagasElemento = document.getElementById("lista-vagas");
const formulario = document.getElementById("form-candidato");
const campoNome = document.getElementById("nome");
const campoExperiencia = document.getElementById("experiencia");
const campoArea = document.getElementById("area");
const campoHabilidades = document.querySelectorAll(
    'input[name="habilidades"]'
);

import { organizarVagas } from "./dados.js";

const vagas = [
    new VagaFrontEndJunior(
        1,
        "Tech Start",
        "Desenvolvedor Front-End Junior",
        ["JavaScript", "GitHub", "Lógica de Programação"],
        2800,
        "Remoto"
    ),
    new VagaFrontEndJunior(
        2,
        "CodeLab",
        "Estagiário Front-End",
        ["JavaScript", "Kanban", "GitHub"],
        1800,
        "Híbrido"
    ),
    new VagaFrontEndJunior(
        3,
        "WebSolutions",
        "Programador JavaScript Junior",
        ["JavaScript", "Arrays", "Objetos", "Funções"],
        3000,
        "Presencial"
    )
];

async function mostrarRanking(candidato) {
    
    melhorVagaElemento.innerHTML = "";
    listaVagasElemento.innerHTML = "";
    console.log("Organizando vagas por compatibilidade...");
    await organizarVagas();
    console.log("Vagas organizadas!");
    console.log(candidato.exibirResumo());
    console.log(`Compatibilidade do candidato ${candidato.nome} com as vagas:
--------------------------------------------------`);
    // Analisa cada vaga
    vagas.forEach(vaga => {
        console.log(`Análise da vaga #${proximaVaga()}`);
        const resultado =
            candidato.calcularCompatibilidade(vaga);
        const cardVaga = document.createElement("article");
        const classificacao =
            resultado.compatibilidade >= 80
                ? "Alta Compatibilidade"
                : resultado.compatibilidade >= 50
                    ? "Média Compatibilidade"
                    : "Baixa Compatibilidade";
        cardVaga.innerHTML = `
            <h3>${vaga.cargo}</h3>
            <p>
                <strong>Empresa:</strong>
                ${vaga.empresa}
            </p>
            <p>
                <strong>Compatibilidade:</strong>
                ${resultado.compatibilidade.toFixed(2)}%
            </p>
            <p>
                <strong>Classificação:</strong>
                ${classificacao}
            </p>
            <p>
                <strong>Salário:</strong>
                ${vaga.salario.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </p>
            <p>
                <strong>Modalidade:</strong>
                ${vaga.modalidade}
            </p>
            <p>
                <strong>Habilidades encontradas:</strong>
                ${resultado.habilidadesEncontradas.join(", ")}
            </p>
            <p>
                <strong>Habilidades faltantes:</strong>
                ${
                    resultado.habilidadesFaltantes.length > 0
                        ? resultado.habilidadesFaltantes.join(", ")
                        : "Nenhuma"
                }
            </p>
        `;
        listaVagasElemento.appendChild(cardVaga);
        // Logs para teste
        console.log(`Vaga: ${vaga.cargo}`);
        console.log(
            `Compatibilidade: ${resultado.compatibilidade.toFixed(2)}%`
        );
        if (
            vaga.requisitos.every(requisito =>
                candidato.habilidades.includes(requisito)
            )
        ) {
            console.log("Você cumpre todos os requisitos da vaga.");
        } else {
            console.log(
                `Habilidades faltantes: ${resultado.habilidadesFaltantes.join(", ")}`
            );
        }
        console.log(
            `Habilidades encontradas: ${resultado.habilidadesEncontradas.join(", ")}`
        );
        console.log(
            `Salário: ${
                vaga.salario.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })
            }`
        );
        console.log(`Modalidade: ${vaga.modalidade}`);
        console.log(`Empresa: ${vaga.empresa}`);
        if (resultado.compatibilidade >= 80) {
            console.log("Classificação: Alta Compatibilidade");
        } else if (resultado.compatibilidade >= 50) {
            console.log("Classificação: Média Compatibilidade");
        } else {
            console.log("Classificação: Baixa Compatibilidade");
        }
        console.log(
            "--------------------------------------------------"
        );
    });
    // Encontra a melhor vaga
    const melhorVaga = vagas.reduce((melhor, atual) => {
        const compatibilidadeAtual =
            candidato.calcularCompatibilidade(atual).compatibilidade;
        const compatibilidadeMelhor =
            candidato.calcularCompatibilidade(melhor).compatibilidade;
        if (compatibilidadeAtual > compatibilidadeMelhor) {
            return atual;
        }
        return melhor;
    });

    // Calcula o resultado da melhor vaga
    const resultadoMelhorVaga =
        candidato.calcularCompatibilidade(melhorVaga);

    // Exibe a melhor vaga na tela
    melhorVagaElemento.innerHTML = `
        <h3>Melhor oportunidade para você</h3>
        <h4>${melhorVaga.cargo}</h4>
        <p>
            <strong>Empresa:</strong>
            ${melhorVaga.empresa}
        </p>
        <p>
            <strong>Compatibilidade:</strong>
            ${resultadoMelhorVaga.compatibilidade.toFixed(2)}%
        </p>
        <p>
            <strong>Salário:</strong>
            ${melhorVaga.salario.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}
        </p>
        <p>
            <strong>Modalidade:</strong>
            ${melhorVaga.modalidade}
        </p>
    `;
    console.log("Melhor vaga encontrada:");
    console.log(
        `Compatibilidade: ${
            resultadoMelhorVaga.compatibilidade.toFixed(2)
        }%`
    );
    console.log(`Empresa: ${melhorVaga.empresa}`);
}

formulario.addEventListener("submit", (event) => {

    console.log("EVENTO SUBMIT EXECUTADO");
    event.preventDefault();

    const habilidades = [];
    campoHabilidades.forEach((habilidade) => {
        if (habilidade.checked) {
            habilidades.push(habilidade.value);
        }
    });

    if (
        campoNome.value.trim() === "" ||
        campoExperiencia.value.trim() === "" ||
        Number(campoExperiencia.value) < 0 ||
        campoArea.value === "" ||
        habilidades.length === 0
    ) {
        alert(
            "Preencha todos os campos corretamente e selecione pelo menos uma habilidade."
        );
        return;
    }

    const candidato = new Candidato(
        campoNome.value,
        campoArea.value,
        habilidades,
        Number(campoExperiencia.value)
    );

    mostrarRanking(candidato);
});