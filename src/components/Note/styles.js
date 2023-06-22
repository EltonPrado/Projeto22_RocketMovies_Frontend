import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  text-align: left;
  
  padding: 2.2rem;
  margin-bottom: 1.6rem;
  
  border: none;
  border-radius: 10px;
  
  background-color: ${({ theme }) => theme.COLORS.BROWN_900};

  > h3 {
    flex: 1;
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE_800};
  }

  > p {
    height: 4rem;

    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};

    word-wrap: normal;
    overflow: hidden;
    text-overflow: ellipsis;

    margin: 1.5rem 0;
  }

  > footer {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    margin-top: 2.4rem;
    gap: .8rem;
  }
`;