import styled from 'styled-components'

//**************************************************************************

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
  height: 300px; 
  width: 90%;
  text-align: center;

  @media (max-width: ${ props => props.theme.break }) {
    margin: 0px;
    display: inline-block;
    width: 80%;
  }
`

//**************************************************************************

export default Title