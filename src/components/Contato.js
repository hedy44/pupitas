import React from 'react';
import '../styles/Contato.css';

function Contato() {
  return (
    <section className="contato">
      <h2>Entre em Contato</h2>
      <p>Envie-nos uma mensagem ou entre em contato pelas redes sociais.</p>
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;