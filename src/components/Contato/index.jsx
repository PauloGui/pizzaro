import React from 'react'

import './style.css'

const Contato = props => {
    return(
        <div className="container-contact">
            <h1>Contato</h1>

            <div className="group-contact">
                <p>Nos contate pelo whatsapp <i class="fab fa-whatsapp"></i>: (00) 0 0000-0000</p>
                <p>Temos um serviço completo de buffet, a melhor pizza para seu evento. trabalhamos
                    com eventos de todos os tamanhos, pequenos, médios e grandes. nossa satisfação é
                    entregar o melhor para nossos clientes.
                </p>

                <div className="group-input">
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Numero de convidados" />
                    <input type="text" placeholder="Data do evento" />
                    <input type="text" placeholder="Informações adicionais" />
                    <input type="submit" placeholder="enviar mensagem" />
                </div>
            </div>
        </div>
    )
}

export default Contato