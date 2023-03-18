import React from 'react';

import './style.css'

export default function SecaoSobre () {
  return (
    <section className='section-sb'>
      <div id='sobre' className='limitar-secao container-sb'>
        <h2>Quem somos nós?</h2>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de
          renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.
        </p>
        <div className='box-cards-sb'>
          <img className='cards' src="./assets/loja.png" alt="" />
          <div className='cards card'>
            <h3>Nossas Filiais</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className='cards card'>
            <h3>Atendimento Flexivel</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>
          <img className='cards' src="./assets/atendimento.png" alt="" />
        </div>
      </div>
    </section>
  )
}