import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BLACK_700};
  color: ${({ theme }) => theme.COLORS.GRAY_800};

  margin-bottom: .8rem;
  border-radius: 10px;

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE_800};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;