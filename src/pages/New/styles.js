import styled from "styled-components";

export const Container = styled.div`
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
    grid-area: content;
    width: 100%;
    padding: 4rem 0;
    overflow: hidden;

    .wrapper {
      height: 100%;
      overflow-y: scroll;
    }

    .wrapper::-webkit-scrollbar {
      width: .8rem;
    }

    .wrapper::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK_800};
      border-radius: 8rem;
    }

    a {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: ${({ theme }) => theme.COLORS.PINK_800};
    }

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;

      margin: 2.4rem 0 4rem; 
    }

    h2 {
      display: flex;
      font-size: 2rem;
      line-height: 2.6rem;
      margin-bottom: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_700};

      @media (max-width: 768px) {
        text-align: left;
      }
    }

    .tags {
      width: 100%;

      padding: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.BLACK_900};

      border-radius: .8rem;
      margin-bottom: 4rem;

      display: flex;
      gap: 4rem;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        gap: 1rem;
        > div {
          width: 100%;
        }
      }
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  > div {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 4rem;

  > button {
    width: 100%;
  }

  > button:nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.BLACK_900};
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;

    > button {
      margin-top: 0;
    }
  }
`;