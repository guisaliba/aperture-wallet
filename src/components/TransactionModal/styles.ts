import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: var(--input-background);
    border: 1px solid #d7d7d7;

    
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
      width: 100%;
      padding-top: 0.rem;
      height: 4rem;
      background: var(--blue);
      color: #fff;
      border-radius: 0.25rem;
      border: 0;
      font-size: 1.15rem;
      font-weight: 400;
      margin-top: 2rem;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.95);
      }
    }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`

interface RadioBoxProps {
  isActive: boolean
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    border-color: ${(props) => props.isActive ? 'var(--green)' : '#d7d7d7'};

    background: ${(props) => props.isActive ? 'rgba(51, 204, 149, 0.1)' : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

  span {
    display: inline-block;
    margin-left: 0.6rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--text-title);
  }
  
  transition: border-color 0.3s; 
  &:hover {
    border-color: var(--green);
  }
`

export const RadioBox2 = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    border-color: ${(props) => props.isActive ? 'var(--red)' : '#d7d7d7'};

    background: ${(props) => props.isActive ? 'rgba(229, 46, 77, 0.1)' : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

  span {
    display: inline-block;
    margin-left: 0.6rem;
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--text-title);
  }
  
  transition: border-color 0.3s;
  
  &:hover {
    border-color: var(--red);
  }
` 