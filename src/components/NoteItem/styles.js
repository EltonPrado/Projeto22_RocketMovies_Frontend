import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BLACK_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_800}` : 'none'};

  border-radius: 1rem;
  padding-right: 1.6rem;

  > button {
    border: none;
    background: none;
    
    display: grid;
    place-content: center;
  }

	.button-delete {
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK_800};
  }

  > input {
    font-family: 'Roboto';
    width: 100%;
    height: 5.6rem;
    
    padding: 1.6rem;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE_800};
    background: transparent;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;