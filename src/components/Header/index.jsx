import React from 'react'

import './style.css'

export function Header() {
    return (
        <div className="container-header">
            <div className="nav-bar">
                <a href="#">Home</a>
                <a href="#">Menu</a>
                <a href="#">About</a>
                <a href="#">Contato</a>
            </div>

            <div className="title-banner">
                <p>uma crosta</p>
                <br />
                <p>fina de massa</p>

                <a href="#" className="">mostre o menu</a>
            </div>

            <div className="work">
                <p>Nosso horário de funcionamento</p>
                <p>seg à qui - 18h às 23h</p>
                <p>finais de semana e feriados- 17h às 01h</p>
            </div>
        </div>
    )
}