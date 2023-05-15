Funcionalidade : Cadastro
  Como um usuário do sistema "Dev Finances"
  Usuário quer cadastrar entradas e saídas
  Para que ele tenha o controle de suas finanças

Contexto:
  Dado que o usuário possua acesso ao sistema

Cenário: Cadastro de entrada
  E ele acessa o sistema
  E ele clica no botão "Nova transação"
  E ele preenche as informações corretamente
  E valor positivo
  Quando ele aciona o botão "Salvar"
  Então deve aparecer um novo registro de entrada na tabela de transações

Cenário: Cadastro de saída
  E ele acessa o sistema
  E ele clica no botão "Nova transação"
  E ele preenche as informações corretamente
  E valor negativo
  Quando ele aciona o botão "Salvar"
  Então deve aparecer um novo registro de saída na tabela de transações

Cenário: Excluir entradas e saídas
  E ele acessa o sistema
  E possui-se registros pré-carregados na tabela de transações
  Quando ele aciona o botão de exclusão
  Então o registro selecionado deve ser removido da tabela de transações

Cenário: Validar saldo entradas
  E ele acessa o sistema
  E possui-se registro(s) de entrada(s) pré-carregado(s) na tabela de transações
  Então a soma de entradas na tabela de transações deve ser igual ao saldo de entradas exibidos no display do topo da tela

Cenário: Validar saldo saídas
  E ele acessa o sistema
  E possui-se registro(s) de saida(s) pré-carregado(s) na tabela de transações
  Então a soma de saídas na tabela de transações deve ser igual ao saldo de saídas exibidos no display do topo da tela

Cenário: Validar saldo total
  E ele acessa o sistema
  E possui-se registro(s) de entrada(s) ou saída(s) pré-carregado(s) na tabela de transações
  Então a soma de entradas e saídas na tabela de transações deve ser igual ao saldo total exibido no display do topo da tela