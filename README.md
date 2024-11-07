# Projeto: Lista de Tarefas

Este é um sistema web para o cadastro de tarefas, desenvolvido para gerenciar e organizar tarefas de forma eficiente. O sistema foi construído utilizando **React + Vite** no front-end, **Node.js** no back-end e **MongoDB** para o armazenamento dos dados das tarefas.

## Tecnologias Utilizadas
- **React + Vite:** Front-end da aplicação.
- **Node.js:** Back-end, responsável pelas operações e comunicação com o banco de dados.
- **MongoDB:** Banco de dados, utilizado para armazenar as informações das tarefas.
  
## Link do Projeto Hospedado
A aplicação está hospedada e pode ser acessada pelo seguinte link: https://tarefa-79tnb3354-hirokiasano1s-projects.vercel.app/
## Funcionalidades

### 1. Lista de Tarefas
- Exibe todos os registros cadastrados no banco de dados, listados na ordem de apresentação.
- As tarefas com custo maior ou igual a R$1.000,00 são destacadas visualmente com fundo amarelo.
- Cada tarefa possui dois botões de ação:
  - **Editar**: Permite a edição dos detalhes da tarefa.
  - **Excluir**: Permite a exclusão da tarefa.

### 2. Incluir Tarefa
- Permite a inclusão de uma nova tarefa com os seguintes campos preenchidos pelo usuário:
  - **Nome da Tarefa**
  - **Custo**
  - **Data Limite**
- O **Identificador** e a **Ordem de Apresentação** são gerados automaticamente pelo sistema.
- Garante que não existam duas tarefas com o mesmo nome.

### 3. Editar Tarefa
- Permite a edição dos campos **Nome da Tarefa**, **Custo** e **Data Limite**.
- Verifica se o novo nome da tarefa já existe no banco de dados; se já existir, a alteração não é permitida.
- Implementado com um popup de edição para facilitar a atualização dos dados.

### 4. Excluir Tarefa
- Exclui a tarefa selecionada do banco de dados.
- Apresenta uma mensagem de confirmação antes de excluir a tarefa.

### 5. Reordenação das Tarefas
- Permite que o usuário altere a ordem de apresentação das tarefas através de dois botões:
  - **Subir**: Move a tarefa para uma posição anterior na lista.
  - **Descer**: Move a tarefa para uma posição posterior na lista.

## Estrutura da Base de Dados

A tabela **Tarefas** possui os seguintes campos:
- **Identificador**: Chave primária única da tarefa.
- **Nome da Tarefa**: Nome da tarefa (não repetido).
- **Custo**: Custo da tarefa em reais (R$).
- **Data Limite**: Data limite para a tarefa.
- **Ordem de Apresentação**: Campo numérico exclusivo usado para ordenar as tarefas na tela.

## Rotas da API

A API possui as seguintes rotas para gerenciar as tarefas:

- `GET /api/tarefas`: Retorna a lista de todas as tarefas.
- `POST /api/tarefas`: Adiciona uma nova tarefa (verifica duplicidade do nome).
- `PUT /api/tarefas/:id`: Edita uma tarefa existente.
- `DELETE /api/tarefas/:id`: Exclui uma tarefa específica.
- `PATCH /api/tarefas/reordenar`: Permite alterar a ordem de apresentação das tarefas
