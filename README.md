## Tarefas dia 1
- [x] Colocar um titulo
- [x] Fazer um formulario representando um pessoa
- [x] O formulario tera um espaço para o nome e outro para a data de nascimento 
- [x] Um botão para submeter o formulario
- [x] Copie e cole o esqueleto base da estrutura HTML

    ```
    <h1>Cadastro de pessoas</h1>
    <form class="form js-form">
        <label for="name" action="">
            Nome
            <input class="form-field js-field" id="name" name="name" type="text" minlength="3" maxlength="120" pattern="([a-z A-Z]+)" required>
        </label>
        <label for="birth-date">
            Data de Nascimento
            <input class="form-field js-field" id="birth-date" name="birth-date" type="date" required>
        </label>
        <button id="btnSave" type="submit">Salvar</button>
        <script type="text/javascript" src="./script.js"></script>


    </form>
    ```

- [x] Criar uma função para pegar o valor dos capos do formulário e imprimir no console.

## Tarefas do dia 2
- [x] Criar validação para o campo nome com as seguintes regras de negócio:
    Nome precisa ter no minimo 3 letras.
    Nome precisa ter no maximo 120 letras.
    Nome só pode conter letras.
- [x] Criar validação para o campo data de nascimento coma seguintes regras de negócio:
    Data de nascimento precisa estar no formato DD/MM/AAAA
    O mês deve estar entre 01 e 12.
## Tarefas do dia 3

- [x] Adicionar um evento para ouvir
a submissão do formulário
- [x] Este evento coletarar os dados informados nos campos e montarar um objeto representando um pessoa.
- [x] Com todos os dados em mãos, savalos localmente de forma persistente.
- [x] Exibir esses dados em uma tabela quando a pagina for recaregada ou reaberta

## Tarefas do dia 4

- [x] Adicionar botão "Atualizar" a cada linha da tabela
- [x] Ao clicar o "Atualizar", os dados da linha em questao serão recuperados
- [x] Após alteados os dados serão salvos novamente na mesma posição

## Tarefas do dia 5

- [x] Adicionar botão "Deletar" a cada linha da tabela
- [x] Ao clicar o "Deletar", os dados da linha em questão seram deletados do localStorange e os seus respectivos elementos na interface.

## Tarefa do dia 6

- [] Estilize o projeto. buque referencias de um layout na internet. 