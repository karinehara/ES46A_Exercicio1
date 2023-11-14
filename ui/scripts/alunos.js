import { getAluno } from "../../business/show-avarage.js";

const divAlunos = document.querySelector("#alunos");

async function showAlunos() {
    try {
        // Aguarde a resolução da promessa
        const listAlunos = await getAluno();

        for (let indice in listAlunos) {
            const aluno = listAlunos[indice];
            console.log(aluno);
            const alunoDiv = document.createElement('div');
            alunoDiv.classList.add('listAlunos');

            const nome = document.createElement('h3');
            nome.textContent = `Aluno: ${aluno.nome}`;

            const nota1 = document.createElement('p');
            nota1.textContent = `Nota 1: ${aluno.nota1}`;

            const nota2 = document.createElement('p');
            nota2.textContent = `Nota 2: ${aluno.nota2}`;

            const nota3 = document.createElement('p');
            nota3.textContent = `Nota 3: ${aluno.nota3}`;

            const mediaExercicios = document.createElement('p');
            mediaExercicios.textContent = `Média de exercícios: ${aluno.mediaExercicios}`;

            const mediaFinal = document.createElement('p');
            mediaFinal.textContent = `Média final: ${aluno.mediaFinal}`;

            alunoDiv.appendChild(nome);
            alunoDiv.appendChild(nota1);
            alunoDiv.appendChild(nota2);
            alunoDiv.appendChild(nota3);
            alunoDiv.appendChild(mediaExercicios);
            alunoDiv.appendChild(mediaFinal);

            divAlunos.appendChild(alunoDiv);
        }
    } catch (error) {
        console.error("Erro ao obter alunos:", error);
    }
}

// Chame a função assíncrona para exibir os alunos
showAlunos();
