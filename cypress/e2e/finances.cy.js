/// <reference types="cypress" />

import { format, prepareLocalStorage } from '../support/utils'

describe.only('Dev Finances', () => {

  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app', {
      onBeforeLoad: (win) =>{
        prepareLocalStorage(win) // carrega a página com 2 dados já inseridos
      }
    })
    cy.get('#data-table tbody tr').should('have.length', 2)
  });

  it('Cadastrar entradas', () => {

    cy.get('#transaction .button').click()
    cy.get('#description').type('Presente')
    cy.get('[name=amount]').type(20)
    cy.get('[type=date]').type('2023-05-12')
    cy.get('button').contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 3)
  })

  it('Cadastrar saídas', () => {

    cy.get('#transaction .button').click()
    cy.get('#description').type('Presente')
    cy.get('[name=amount]').type(-10)
    cy.get('[type=date]').type('2023-05-12')
    cy.get('button').contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 3)
  })

  it('Excluir entradas e saídas', () => {

    cy.get('#data-table tbody tr').should('have.length', 2)

    cy.get('td.description').contains("Mesada").parent().find('img[onclick*=remove]').click()
    cy.get('#data-table tbody tr').should('have.length', 1)
    cy.get('td.description').contains("Suco Kapo").parent().find('img[onclick*=remove]').click()
    cy.get('#data-table tbody tr').should('have.length', 0)


  })

  it('Validar saldo entradas', () => {
    let incomes = 0

    cy.get('#transaction .button').click()
    cy.get('#description').type('Presente')
    cy.get('[name=amount]').type(50)
    cy.get('[type=date]').type('2023-05-12')
    cy.get('button').contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 3)

    cy.get('#data-table tbody tr').each(($elemento, index, $list)=> {

      cy.get($elemento).find('td.income, td.expense').invoke('text').then(text => {
          if(text.includes('-'))
            incomes = incomes
          else
            incomes += format(text)
          
       // cy.log('entradas', incomes)
        
      })

    })

    cy.get('#incomeDisplay').invoke('text').then(text =>{   
      let formattedIncomeDisplay = format(text)
      let expectedIncomes = incomes

      expect(formattedIncomeDisplay).to.eq(expectedIncomes)
    })
  });

  it('Validar saldo saídas', () => {
    let expenses = 0

    cy.get('#transaction .button').click()
    cy.get('#description').type('Presente')
    cy.get('[name=amount]').type(-50)
    cy.get('[type=date]').type('2023-05-12')
    cy.get('button').contains('Salvar').click()

    cy.get('#data-table tbody tr').should('have.length', 3)

    cy.get('#data-table tbody tr').each(($elemento, index, $list)=> {

      cy.get($elemento).find('td.income, td.expense').invoke('text').then(text => {
          if(text.includes('-'))
            expenses += format(text)
          else
            expenses = expenses
          
       // cy.log('saidas', expenses)
        
      })

    })

    cy.get('#expenseDisplay').invoke('text').then(text =>{
      //cy.log('valor total', format(text))
      
      let formattedExpenseDisplay = format(text)
      let expectedExpenses = expenses

      expect(formattedExpenseDisplay).to.eq(expectedExpenses)
    })
  });

  it('Validar saldo total', () => {
    
    // capturar as linhas com as transações e as colunas com valores
    // capturar o texto dessas colunas
    // formatar esses valores das linhas
    // somar os valores de entradas e saídas
    // capturar o texto do total
    // comparar o somatório de entradas e saídas com o total

    let incomes = 0
    let expenses = 0

    cy.get('#data-table tbody tr').each(($elemento, index, $list)=> {

      cy.get($elemento).find('td.income, td.expense').invoke('text').then(text => {
        if(text.includes('-'))
          expenses += format(text)
        else
          incomes += format(text)
          
       // cy.log('entradas', incomes)
       // cy.log('saidas', expenses)
        
      })

    })

    cy.get('#totalDisplay').invoke('text').then(text =>{
      //cy.log('valor total', format(text))
      
      let formattedTotalDisplay = format(text)
      let expectedTotal = incomes + expenses

      expect(formattedTotalDisplay).to.eq(expectedTotal)
    })

    
  });
})