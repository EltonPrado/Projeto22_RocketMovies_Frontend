import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BROWN_900};

    display: flex;
    align-items: center;
    padding: 0 14.4rem;

    > a {
      display: flex;
      align-items: center;
      align-self: center;
      gap: .8rem;
      color: ${({ theme }) => theme.COLORS.PINK_800};
    }

    @media (max-width: 425px) {
      > a {
        position: absolute;
        left: 50%;

        transform: translateX(-70%);
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  @media (max-width: 425px) {
    margin: 15rem auto 0; 
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;
  
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_800};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BLACK_800};
    }
  }
`;