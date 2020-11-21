import styled from 'styled-components'


export const NavBar = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    height: 40px;
    background-color: var(--color-background);
    opacity: 0.8;
    z-index: 2;

    :hover{
        opacity: 1;
    }
`

export const LinksBar = styled.a`
    display: flex;
    justify-content: center;
    padding: 5px 10px 0 10px;
    height: 100%;
    font-size: 25px;
    text-decoration: none;
    color: var(--color-text);
    z-index: 2;

    :hover{
        background: var(--color-text);
        color: var(--color-background);
    }
`