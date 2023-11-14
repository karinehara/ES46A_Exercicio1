# ES46A_Exercicio1

Arquitetura em Camadas
Neste repositório se encontra um sistema simples de média ponderada.

Este projeto utiliza o Firebase para persistência de dados e interação em tempo real. Siga os passos abaixo para configurar e executar a aplicação:

### 1. Instalação de Pacotes:
Certifique-se de ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados na sua máquina. Em seguida, execute o seguinte comando no terminal para instalar os pacotes necessários:

```
npm install
```

### 2. Iniciar a Aplicação:
Após instalar os pacotes, você pode iniciar a aplicação localmente. Execute o seguinte comando:
```
npm start
```

### Camadas do sistema

#### Camada de Interface do Usuário (UI):
**Arquivos HTML:**
- calculate-avarage.html: Página para calcular a média dos alunos.
- index.html: Página inicial da aplicação.
- show-avarage.html: Página para listar as notas dos alunos.

**JavaScript (Scripts para Interatividade):**
- media.js: Responsável pela lógica relacionada à página calculate-avarage.html.
- alunos.js: Lida com a lógica para exibir alunos na página show-avarage.html.


#### Camada de Lógica de Negócios:
**calculate-average.js:**
- Função calculateAverage(n1, n2, n3, ex): Calcula a média dos alunos com base nas notas e pontuação dos exercícios.
- Função salvarMedia(nome, n1, n2, n3, ex, media): Salva os dados do aluno no Firestore.

**show-avarage.js:**
- Função getAluno(): Obtém dados dos alunos do Firestore para exibição.

#### Camada de Persistência de Dados:
**peristence.js:**
configuração e Inicialização do Firebase
- firebaseConfig: Configuração da aplicação Firebase.
- app: Inicialização da aplicação Firebase.
- db: Inicialização do Firestore para interação com o banco de dados.

#### Observações:
As funções em calculate-average.js e show-avarage.js atuam como uma ponte entre a camada de Lógica de Negócios e a camada de Persistência de Dados ao utilizar o Firestore para operações de leitura e escrita.
