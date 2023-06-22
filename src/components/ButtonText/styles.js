import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK_800};

  border: none;
  font-size: 1.6rem;
  
  display: inline-flex;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;

  > svg {
    font-size: 1.6rem;
  }
`;