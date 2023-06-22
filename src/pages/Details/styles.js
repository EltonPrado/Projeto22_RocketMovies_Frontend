import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    width: 100%;
    padding: 4rem 0;

    overflow-y: hidden;

    > .wrapper {
      height: 100%;
      overflow-y: auto;
      padding: 0 4rem;

      p {
        text-align: justify;
        word-wrap: break-word;
      }
    }

    > .wrapper::-webkit-scrollbar {
      width: 0.8rem;
    }

    > .wrapper::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK_800};
      border-radius: 8rem;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.4rem;
  gap: 2.4rem;

  @media (max-width: 768px) {
    align-items: center;

    > a {
      font-size: 2rem;
    }
  }

  > .highlight {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    @media (max-width: 768px) {
      display: block;
      text-align: center;
    }

    > h1 {
      word-wrap: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      @media (max-width: 768px) {
        font-size: 4rem;
        margin-bottom: 1.5rem;
      }
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  .infos {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .user-infos,
  .note-infos {
    display: flex;
    align-items: center;
    gap: .8rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    
    > .infos {
      margin: 2rem 0;
    }
  }

  img {
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }
`;

export const Tags = styled.div`
  margin: 4rem 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }

  > span {
    background-color: ${({ theme }) => theme.COLORS.BROWN_900};
  }
`;