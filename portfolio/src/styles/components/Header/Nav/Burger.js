import styled from 'styled-components'

export const StyledBurger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.20rem;
    background: ${({ theme }) => theme.text };

    transition: all 0.3s linear;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }
  
    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: ${ props => props.theme.break }) {
    display: flex;
  }
`