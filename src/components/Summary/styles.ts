import styled from "styled-components"

export const Container =  styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    color: var(--text-title);
    font-weight: 500;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 1.2rem;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3.5rem;
    }

    &.total-box {
      background: var(--green);
      color: var(--white);
    }

    
  }
`