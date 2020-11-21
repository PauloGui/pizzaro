import styled, { css } from 'styled-components'
import BannerImage from '../../assets/images/banner-pizza.jpg'


export const Container = styled.div`
    width: 100%;
    height: 700px;
    background-image: url(${BannerImage});
    background-repeat: no-repeat;
    background-size: cover;
`

export const TitleBanner = styled.strong`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    color: var(--color-text);
    padding-top: 100px;
`

export const LinksBanner = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin-left: 40%;
    margin-top: 30px;
    text-decoration: none;
    font-size: 50px;
    padding: 10px 5px 10px 5px;
    background: var(--color-background);
    color: var(--color-text);

    :hover{
        background: var(--color-text);
        color: var(--color-background);
    }
`

export const Clock = styled.p`
    display: flex;
    background: var(--color-background);
    width: 220px;
    color: var(--color-text);
    font-size: 20px;
    padding: 10px;
    margin-left: 20px;
    margin-top: 100px;

    & + p {
        margin-top: 0;
        padding-top: 0;
    }

`