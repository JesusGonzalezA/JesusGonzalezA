import styled from "styled-components"

//**************************************************************************

const Nav = styled.nav`
    display: flex;
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;

    
    @media (max-width: ${ props => props.theme.break }) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        backdrop-filter: blur(50px);
        
        ${ ({ isOpened }) => isOpened
            ? `
                opacity: 1;
            `
            : `
                display: none;
                opacity: 0;
            ` 
        }

        transition: all 0.3s ease-in-out;
    }
`

const Li =  styled.li`
    padding: 10px;
    margin-left: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (max-width: ${ props => props.theme.break }) {
        margin-left: 0;
        margin-top: 20px;
    }
    

    ${ props => props.outlined
        ? `
            margin-left: 70px;
            border: 1px solid ${ props.theme.text };
            border-radius: 10px;
            padding-left: 20px;
            padding-right: 20px;

            transition: background-color 0.5s ease;

            &:hover {
                background-color: ${ props.theme.text };
                color: ${ props.theme.background };
            }

            @media (max-width: ${ props.theme.break }) {
                margin-left: 0;
                margin-top: 3rem;
            }
        ` 
        : `
            position: relative;

            &:after {    
                background: none repeat scroll 0 0 transparent;
                bottom: 0;
                content: "";
                display: block;
                height: 1px;
                left: 50%;
                position: absolute;
                background: ${ props.theme.text };
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
                width: 0;
            }

            &:hover:after { 
                width: 100%; 
                left: 0; 
            }
        `
    }
`

//**************************************************************************

export {
    Nav,
    Ul,
    Li
}