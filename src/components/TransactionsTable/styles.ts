import styled from "styled-components"

export const Container = styled.div`
  margin-top: 4rem;
  
  table {
    width: 100%;
    border-spacing: 0 0.75rem;
    background-color: ${props => props.theme.colors.table};
    
    th {
      color: ${props => props.theme.colors.tabletext};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: ${props => props.theme.colors.tablecontent};
      font-weight: 400;
      color: ${props => props.theme.colors.tabletext};
      

      &.deposit {
      color: var(--green);
      font-weight: 500;
      }

      &.withdraw {
      color: var(--red);
      font-weight: 500;
      }

      &.transaction-date {
        font-weight: 500;
      }
    } 
  }

`