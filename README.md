
# Automação com Cypress - DEV Finances

Olá, 
Este projeto tem como objetivo realizar a automação do site "https://devfinance-agilizei.netlify.app", o qual consiste em um sistema para controle financeiro (entradas e saídas).
Nele, realizei a criação de 6 cenários principais, e criei a automação em Cypress com base nesses cenários.

Funcionalidade : Cadastro
  &nbsp;&nbsp;&nbsp;Como um usuário do sistema "Dev Finances"
  &nbsp;&nbsp;&nbsp;Usuário quer cadastrar entradas e saídas
  &nbsp;&nbsp;&nbsp;Para que ele tenha o controle de suas finanças

Contexto:
  &nbsp;&nbsp;&nbsp;Dado que o usuário possua acesso ao sistema

Cenário: Cadastro de entrada
  &nbsp;&nbsp;&nbsp;E ele acessa o sistema
  &nbsp;&nbsp;&nbsp;E ele clica no botão "Nova transação"
  &nbsp;&nbsp;&nbsp;E ele preenche as informações corretamente
  &nbsp;&nbsp;&nbsp;E valor positivo
  &nbsp;&nbsp;&nbsp;Quando ele aciona o botão "Salvar"
  &nbsp;&nbsp;&nbsp;Então deve aparecer um novo registro de entrada na tabela de transações

Cenário: Cadastro de saída
  &nbsp;&nbsp;&nbsp;E ele acessa o sistema
  &nbsp;&nbsp;&nbsp;E ele clica no botão "Nova transação"
  &nbsp;&nbsp;&nbsp;E ele preenche as informações corretamente
  &nbsp;&nbsp;&nbsp;E valor negativo
  &nbsp;&nbsp;&nbsp;Quando ele aciona o botão "Salvar"
  &nbsp;&nbsp;&nbsp;Então deve aparecer um novo registro de saída na tabela de transações

Cenário: Excluir entradas e saídas
  &nbsp;&nbsp;&nbsp;E ele acessa o sistema
  &nbsp;&nbsp;&nbsp;E possui-se registros pré-carregados na tabela de transações
  &nbsp;&nbsp;&nbsp;Quando ele aciona o botão de exclusão
  &nbsp;&nbsp;&nbsp;Então o registro selecionado deve ser removido da tabela de transações

Cenário: Validar saldo entradas
  &nbsp;&nbsp;&nbsp;E ele acessa o sistema
  &nbsp;&nbsp;&nbsp;E possui-se registro(s) de entrada(s) pré-carregado(s) na tabela de transações
  &nbsp;&nbsp;&nbsp;Então a soma de entradas na tabela de transações deve ser igual ao saldo de entradas exibidos no display do topo da tela

Cenário: Validar saldo saídas
  &nbsp;&nbsp;&nbsp;E ele acessa o sistema
  &nbsp;&nbsp;&nbsp;E possui-se registro(s) de saida(s) pré-carregado(s) na tabela de transações
  &nbsp;&nbsp;&nbsp;Então a soma de saídas na tabela de transações deve ser igual ao saldo de saídas exibidos no display do topo da tela

Cenário: Validar saldo total
  &nbsp;&nbsp;&nbsp;E ele acessa o sistema
  &nbsp;&nbsp;&nbsp;E possui-se registro(s) de entrada(s) ou saída(s) pré-carregado(s) na tabela de transações
  &nbsp;&nbsp;&nbsp;Então a soma de entradas e saídas na tabela de transações deve ser igual ao saldo total exibido no display do topo da tela
