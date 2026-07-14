import {
    Candidato,
    VagaFrontEndJunior,
    proximaVaga
} from "./motor.js";

import { organizarVagas } from "./dados.js";

const candidato1 = new Candidato(
    "João Silva",
    "Front-End",
    ["JavaScript", "GitHub", "Lógica de Programação", "Kanban"],
    3
);

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

async function mostrarRanking() {

    console.log("Organizando vagas por compatibilidade...");

    await organizarVagas();

    console.log("Vagas organizadas!");

    console.log(candidato1.exibirResumo());

    console.log(`Compatibilidade do candidato ${candidato1.nome} com as vagas:
--------------------------------------------------`);

    vagas.forEach(vaga => {

        console.log(`Análise da vaga #${proximaVaga()}`);

        const resultado =
            candidato1.calcularCompatibilidade(vaga);

        console.log(`Vaga: ${vaga.cargo}`);

        console.log(
            `Compatibilidade: ${resultado.compatibilidade.toFixed(2)}%`
        );

        if (
            vaga.requisitos.every(requisito =>
                candidato1.habilidades.includes(requisito)
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

    const melhorVaga = vagas.reduce((melhor, atual) => {

        const compatibilidadeAtual =
            candidato1.calcularCompatibilidade(atual).compatibilidade;

        const compatibilidadeMelhor =
            candidato1.calcularCompatibilidade(melhor).compatibilidade;

        if (compatibilidadeAtual > compatibilidadeMelhor) {

            return atual;

        }

        return melhor;

    });

    console.log("Melhor vaga encontrada:");

    console.log(
        `Compatibilidade: ${
            candidato1
                .calcularCompatibilidade(melhorVaga)
                .compatibilidade
                .toFixed(2)
        }%`
    );

    console.log(`Empresa: ${melhorVaga.empresa}`);
}

mostrarRanking();