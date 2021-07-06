import styled from 'styled-components'

//**************************************************************************

const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;

  min-height: ${ props => props.cut
    ? `calc(100vh - ${ props.cut }px)`
    : '100vh'
  };

  @media (max-width: ${ props => props.theme.break }) {
    flex-direction: column;
    justify-content: center;
  }
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-right: 200px;

  @media (max-width: ${ props => props.theme.break }) {
    margin-right: 0;
  }  
`

const MainPhoto = styled.img`
  width: 256px;
  height: 256px; 
  border-radius: 50%; 
  margin: 20px; 
  margin-top: 40px;

  @media (max-width: ${ props => props.theme.break }) {
    width: 128px;
    height: 128px;
    margin-top: 10px;
  } 
`

//**************************************************************************

export {
  FullPage,
  FlexColumn,
  MainPhoto
} 