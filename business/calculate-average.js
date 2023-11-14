import { collection, addDoc } from "firebase/firestore";
import {db} from "../persistence/peristence.js";

function calculateAverage(n1, n2, n3, ex) {
  return (n1 + n2 * 2 + n3 * 3 + ex) / 7;
}

async function salvarMedia(nome, n1, n2, n3, ex, media) {
    console.log("Salvando dados...");
  try {
    await addDoc(collection(db, "alunos"), {
      nome: nome,
      nota1: n1,
      nota2: n2,
      nota3: n3,
      mediaExercicios: ex,
      mediaFinal: media,
    });
    console.log("Dados salvos com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar os dados: ", error);
  }
}

export { calculateAverage, salvarMedia };
