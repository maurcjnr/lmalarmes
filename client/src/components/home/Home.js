import React from 'react'

export default props => {
  return (
    <div className="home">
      <div className="home__coming-soon">Novidades em breve...</div>
      <div className="home__image"></div>
      <div className="home__loader"></div>
      <div className="home__social">
        <a className="home__social__facebook" href="https://pt-br.facebook.com/" target="_blank"></a>
        <a className="home__social__instagram" href="https://www.instagram.com/" target="_blank"></a>
        <a className="home__social__whatsapp" href="https://wa.me/5553984013848" target="_blank"></a>
      </div>
      <div className="home__contact">
        <p>E-mail para contato/orçamentos:</p>
        <p>lmalarmesmonitoramento24horas@gmail.com</p>
      </div>
    </div >
  )
}