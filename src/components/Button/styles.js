import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_800};
  color: ${({ theme }) => theme.COLORS.BLACK_600};

  font-weight: 500;
  padding: 1.6rem 0;
  margin-top: 1.6rem;

  border: 0;
  border-radius: 1rem;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;