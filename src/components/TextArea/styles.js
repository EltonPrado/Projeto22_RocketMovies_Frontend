import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  font-family: 'Roboto', serif;

  background-color: ${({ theme }) => theme.COLORS.BLACK_700};
  color: ${({ theme }) => theme.COLORS.WHITE_800};

  border: none;
  resize: none;

  margin: 4rem auto;
  border-radius: 10px;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_800};
  }
`;