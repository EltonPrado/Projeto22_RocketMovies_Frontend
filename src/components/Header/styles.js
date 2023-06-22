import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;
  padding: 3rem 0;

  border-bottom: .1rem solid ${({ theme }) => theme.COLORS.GRAY_900};

  > .wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.PINK_800};
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > .user {
    display: flex;
    flex-direction: column;
    line-height: 1.8rem;
    
    strong {
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.WHITE_800};
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};

    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const Logout = styled.button`
  display: block;
  width: 100%;

  border: none;
  background-color: transparent;

  text-align: right;
  font-size: 1.4rem;
  
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  cursor: pointer;
`;