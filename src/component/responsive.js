import { css } from "styled-components";

export const small = (props) => {
  return css`
    @media only screen and (min-width: 280px) and (max-width: 411px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 412px) and (max-width: 500px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 1041px) {
      ${props}
    }
  `;
};
