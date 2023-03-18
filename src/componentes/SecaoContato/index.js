import React from 'react';
import './style.css'

export default function SecaoContato () {
  return (
    <section className='section-ct'>
      <div id='contato' className='limitar-secao '>
        <h2>Fale Conosco</h2>
      <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>

      <div className='box-container-ct'>
      <div className='box-ct'>
        <div card-ct>
          <h2>Contato</h2>
        <div className='card-ct'>
        <img src="./assets/local.png" alt="local" />
        <span>Nova Iguaçu, RJ</span>
        </div>
        <div className='card-ct'>
        <img src="./assets/telefone.png" alt="local" />
        <span>(21) 9999-9999</span>
        </div>
        <div className='card-ct'>
        <img src="./assets/email.png" alt="local" />
        <span>contato@oticavida.com</span>
        </div>
      </div>
      </div>
      <div className='box-ct'>
        <h2>Nossas Redes Sociais</h2>
        <div className='card-ct'>
          <img src="./assets/fb.png" alt="icone fb" />
          <span>/OticaVida</span>
        </div>
        <div className='card-ct'>
          <img src="./assets/ig.png" alt="icone ig" />
        <span>@oticavidarj</span>
        </div>
        <div className='card-ct'>
          <img src="./assets/tt.png" alt="icone tt" />
        <span>@oticavidarj</span></div>
      </div>
      </div>
      </div>
    </section>
  )
}