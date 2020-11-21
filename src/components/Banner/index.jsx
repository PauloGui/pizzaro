import React from 'react'
import Nav from '../Nav'
import { 
        Container,  
        TitleBanner, 
        LinksBanner, 
        Clock } 
    from './style'


export function Banner() {
    return (
        <Container>
            <Nav />
            <TitleBanner>UMA FINA CROSTA DE MASSA</TitleBanner>
            <LinksBanner href="/">MOSTRE O MENU</LinksBanner>
            <Clock>NOSSO HORARIO DE FUNCIONAMENTO</Clock>
            <Clock>SEG À QUI - 18H ÀS 23H</Clock>
            <Clock>SEX, SAB, DOM E FERIADOS - ATÉ 01H</Clock>
        </Container>
    )
}