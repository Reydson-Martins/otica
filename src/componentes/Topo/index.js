import React from 'react';
import './style.css';

export default function Topo(){
  return (
    <header className='topo'>
      <aside className='limitar-secao topo-menu'>
        <img src="./assets/logo.png" alt="logo" className='logo' />
        <nav className='box-link'>
          <a href="#produtos" className='topo-link'>produtos</a>
          <a href="#sobre" className='topo-link'>sobre</a>
          <a href="#contato" className='topo-link'>contato</a>
        </nav>
      </aside>
    </header>
  )
}