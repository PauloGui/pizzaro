import React from 'react'

import './style.css'

export const Menu = props => {
    return (
        <div className="container-menu">
            <h1>Menu</h1>

            <div className="menu">
                <div className="title-menu">
                    <h1>Pizzas</h1>
                </div>

                <div className="group-menu">
                    <div className="pizza">
                        <div className="sabor-preco">
                            <p>Calabresa</p>
                            <p className="price">r$ 19,90</p>
                        </div>
                        <p className="ingredientes">linguiça calabresa, mussarela e cebola em rodelas e oregano</p>
                        <hr />
                    </div>
                    <div className="pizza">
                        <div className="sabor-preco">
                            <p>Frango com requeijão</p>
                            <p className="price">r$ 22,90</p>
                        </div>
                        <p className="ingredientes">Frango desfiado, cebola, oregano e requeijão.</p>
                        <hr />
                    </div>
                    <div className="pizza">
                        <div className="sabor-preco">
                            <p>Pepperoni</p>
                            <p className="price">r$ 22,90</p>
                        </div>
                        <p className="ingredientes">Mussarela, oregano e pepperoni.</p>
                        <hr />
                    </div>
                    <div className="pizza">
                        <div className="sabor-preco">
                            <p>4 Queijos</p>
                            <p className="price">r$ 19,90</p>
                        </div>
                        <p className="ingredientes">Mussarela, requeijão, gorgonzola, oregano e parmesão ralado.</p>
                        <hr />
                    </div>
                    <div className="pizza">
                        <div className="sabor-preco">
                            <p>Portuguesa</p>
                            <p className="price">r$ 22,90</p>
                        </div>
                        <p className="ingredientes">Mussarela, presunto, ovo de codorna, azeitona preta, cebola, oregano e pimentão verde.</p>
                        <hr />
                    </div>
                    <div className="pizza">
                        <div className="sabor-preco">
                            <p>Egg e Bacon</p>
                            <p className="price">r$ 26,90</p>
                        </div>
                        <p className="ingredientes">Mussarela, bacon, cebola, cream cheese, oregano e ovo de codorna.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}