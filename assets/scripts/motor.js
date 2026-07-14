class Candidato {
    constructor(nome, area, habilidades, experienciaMeses) {
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
        this.experienciaMeses = experienciaMeses;
    }

    calcularCompatibilidade(vaga) {
        const habilidadesComuns = this.habilidades.filter(
            habilidade => vaga.requisitos.includes(habilidade)
        );

        return {
            compatibilidade:
                (habilidadesComuns.length / vaga.requisitos.length) * 100,

            habilidadesEncontradas: habilidadesComuns,

            habilidadesFaltantes:
                vaga.requisitos.filter(
                    requisito => !this.habilidades.includes(requisito)
                )
        };
    }

    exibirResumo() {
        return `${this.nome} possui ${this.experienciaMeses} meses de experiência na área ${this.area}.`;
    }
}

class Vaga {
    constructor(id, empresa, cargo, requisitos, salario) {
        this.id = id;
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos;
        this.salario = salario;
    }
}

class VagaFrontEndJunior extends Vaga {
    constructor(id, empresa, cargo, requisitos, salario, modalidade) {
        super(id, empresa, cargo, requisitos, salario);
        this.modalidade = modalidade;
    }
}

function criarContador() {
    let contador = 0;

    return function () {
        contador++;
        return contador;
    };
}

const proximaVaga = criarContador();

export {
    Candidato,
    Vaga,
    VagaFrontEndJunior,
    criarContador,
    proximaVaga
};