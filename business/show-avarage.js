import {db} from "../persistence/peristence.js";
import { collection, getDocs, query } from 'firebase/firestore';

async function getAluno() {
    console.log('Buscando alunos...')
    try{
        const alunos = collection(db, 'alunos');
        const alunosSnapshot = await getDocs(alunos);

        let alunosList = [];
        alunosSnapshot.forEach((doc) => {
            alunosList.push(doc.data());
        });
        return alunosList;
    } catch (error) {
        console.log("Erro ao buscar alunos: ", error);
    }
}

export {getAluno};