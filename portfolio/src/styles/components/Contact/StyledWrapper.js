import styled from 'styled-components'

//**************************************************************************

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: calc(280px + 0.15vw);
    height: calc(35px + 14px + 0.15vw);
    border: solid transparent 0px;
    border-radius: 15px;
    cursor: pointer;

    background: ${ props => props.theme.gradient };
    color: ${ props => props.theme.text_primary };
  `

//**************************************************************************

export default StyledWrapper