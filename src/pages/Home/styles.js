import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container  = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  @media (max-width: 768px) {
    grid-template-rows: 11.6rem 1fr;
  }

  > main {
    width: 100%;
    grid-area: content;
    overflow: hidden;

    > .wrapper {
      display: flex;
      height: 100%;
      
      flex-direction: column;
      overflow-y: auto;
      padding: 5rem 4rem;
    }
  }
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 3.2rem;
    font-weight: 400;
  }
`;

export const ButtonAdd = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: .8rem;
  padding: 1.4rem 3.2rem;
  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK_800};
  color: ${({ theme }) => theme.COLORS.BLACK_800};

  cursor: pointer;
  
  > svg {
    font-size: 2rem;
  }
`;

export const Notes = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 3.8rem;
  overflow-y: auto;
  padding-right: 0.8rem;

  h2 {
    text-align: center;
  }

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_800};
    border-radius: 8rem;
  }
`;