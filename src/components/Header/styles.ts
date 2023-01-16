import styled from 'styled-components'

export const Container = styled.header`
  background:${props => props.theme.colors.header};
`

export const Content = styled.div`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 11rem;
  max-width: 1120px;
  margin: 0 auto;
  
  .aperture-logo {
    color: ${props => props.theme.colors.logo}
  }

  .theme-switch {
    margin-top: 2rem;
    margin-left: 32rem;
    
  }
  
  span {
    color: ${props => props.theme.colors.span};
    font-size: 2rem;
    font-weight: 200;
    margin-left: 0.5rem;
    margin-top: 0.9rem;
  }

  p {
    color: ${props => props.theme.colors.p};
    font-size: 2rem;
    font-weight: 300;
    margin-top: 0.88rem;
    margin-left: 0.4rem;
  }

  button {
    margin-top: 1.1rem;
    margin-left: 1rem;
    font-size: 1.15rem;
    font-weight: 500;
    color: ${props => props.theme.colors.buttontext};
    background: ${props => props.theme.colors.button};
    border: 0;
    padding: 0 0;
    border-radius: 0.25rem;
    height: 3rem;
    width: 12rem;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    } 
  }
  


`