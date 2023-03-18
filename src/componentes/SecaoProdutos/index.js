import React from 'react';
import './style.css'

export default function SecaoProdutos () {
  return (
    <section className='section-prod'>
      <div className='limitar-secao'>

        <h2>Nossos Produtos</h2>
        <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todosos nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

        <div className='container-cards'>
          <div className='box-card'>
            <h3>Óculos de grau</h3>
            <img src="./assets/oculos01.png" alt="oculos" />
            <p>R$ 500,00</p>
          </div>        
           <div className='box-card'>
            <h3>Óculos transition</h3>
            <img  src="./assets/oculos02.png" alt="oculos" />
            <p>R$ 750,00</p>
          </div>        
          <div className='box-card'>
            <h3>Óculos de sol</h3>
            <img src="./assets/oculos03.png" alt="oculos" />
            <p>R$ 700,00</p>
          </div>        
          <div className='box-card'>
            <h3>Óculos infantil</h3>
            <img src="./assets/oculos04.png" alt="oculos" />
            <p>R$ 500,00</p>
          </div> 
        </div>

        <p>Todos os nosso produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      
      </div>
    </section>
  )
}