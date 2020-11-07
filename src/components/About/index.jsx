import React from 'react'

import './style.css'
import City from '../../assets/images/city.jpeg'
import Chefe from '../../assets/images/pizzaiolo.jpg'
import Interior from '../../assets/images/antiga.jpg'

export const About = props => {
    return (
        <div className="container-about">
            <h1>About</h1>
            <div className="group-info">
                <p>O Pizzaro foi fundado em blabla pelo Sr. Italiano em lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="chefe">
                    <p>o chefe? Italiano nato sr. ...</p>
                    <img src={Chefe} alt="chefe" />
                </div>

                <div className="inter">
                    <p>nos orgulhamos de nossa historia</p>
                    <img src={Interior} alt="imagem interior do restaurante" />
                </div>
            </div>
            <div className="img-aerea">
                <img src={City} alt="Imagem da cidade" />
            </div>
        </div>
    )
}