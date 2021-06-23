import styled from 'styled-components'

//**************************************************************************

const StickyCentered = styled.header.attrs( props => ({
    shadow: props.shadow
  }))`
    position: sticky;
    top: 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    
    background-color: ${ props => props.theme.background };
    box-shadow: ${ props => props.shadow 
        ? `0px 0px 10px 0.1px ${props.theme.text}`
        : 'none' 
    };

    transition: box-shadow 0.3s ease-in-out;
  `

//**************************************************************************

export default StickyCentered