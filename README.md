## Lista dia 1
- [x] Colocar um titulo
- [] Fazer um formulario representando um pessoa
- [] O formulario tera um espaço para o nome e outro para a data de nascimento 
- [] Um botão para submeter o formulario
- [] Copie e cole o esqueleto base da estrutura HTML

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

- [] Criar uma função para pegar o valor dos capos do formulário e imprimir no console.
- [] 