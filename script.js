function cadastrarEmprestimo(){

    event.preventDefault()
    
    var nomeAluno = document.getElementById('nomeAluno').value
    var nomeLivro = document.getElementById('nomeLivro').value
    
    var dataEmprestimo = document.getElementById('dataEmprestimo').value
    var dataDevolucao = document.getElementById('dataDevolucao').value
    
    var tabelaEmprestimos = document.getElementById('tabelaEmprestimos')
    
    var linha = document.createElement('tr')
    
    var colunaNomeAluno = document.createElement('td')
    var colunaNomeLivro = document.createElement('td')
    
    var colunaDataEmprestimo = document.createElement('td')
    var colunaDataDevolucao = document.createElement('td')
    
    colunaNomeAluno.innerHTML = nomeAluno
    colunaNomeLivro.innerHTML = nomeLivro
    
    colunaDataEmprestimo.innerHTML = dataEmprestimo
    colunaDataDevolucao.innerHTML = dataDevolucao
    
    linha.appendChild(colunaNomeAluno)
    linha.appendChild(colunaNomeLivro)
    
    linha.appendChild(colunaDataEmprestimo)
    linha.appendChild(colunaDataDevolucao)
    
    tabelaEmprestimos.appendChild(linha)
    
    alert(`O livro "${livro}" foi emprestado para "${aluno}" com sucesso!`);
    }