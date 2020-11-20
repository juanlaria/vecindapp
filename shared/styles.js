import { keyframes, css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import {
  screenSMmin,
  screenSMmax,
  screenMDmin,
  screenMDmax,
  screenLGmin,
  screenXLmin,
} from './breakpoints';

export const globalStyles = (
  <Global
    styles={css`
      :root {
        --color-grey: #4f4c4c;
        --color-lightGrey: #c4c4c4;
        --color-darkGrey: #797979;
        --color-black: #212121;
        --color-white: #ffffff;
        --color-red: #ff0808;
        --color-primary: #1148c2;
        --border-radius: 8px;
        --font-primary: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        --elevation-z1: 0 2px 1px -1px rgba(33, 33, 33, 0.1),
          0 1px 1px 0 rgba(33, 33, 33, 0.07), 0 1px 3px 0 rgba(33, 33, 33, 0.05);
        --elevation-z2: 0 3px 1px -2px rgba(33, 33, 33, 0.1),
          0 2px 2px 0 rgba(33, 33, 33, 0.07), 0 1px 5px 0 rgba(33, 33, 33, 0.05);
        --elevation-z4: 0 2px 4px -1px rgba(33, 33, 33, 0.1),
          0 4px 5px 0 rgba(33, 33, 33, 0.07),
          0 1px 10px 0 rgba(33, 33, 33, 0.05);
        --elevation-z6: 0 3px 5px -1px rgba(33, 33, 33, 0.1),
          0 6px 10px 0 rgba(33, 33, 33, 0.07),
          0 1px 18px 0 rgba(33, 33, 33, 0.05);
        --elevation-z8: 0 5px 5px -3px rgba(33, 33, 33, 0.1),
          0 8px 10px 1px rgba(33, 33, 33, 0.07),
          0 3px 14px 2px rgba(33, 33, 33, 0.05);
        --elevation-z12: 0 7px 8px -4px rgba(33, 33, 33, 0.1),
          0 12px 17px 2px rgba(33, 33, 33, 0.07),
          0 5px 22px 4px rgba(33, 33, 33, 0.05);
        --elevation-z16: 0 8px 10px -5px rgba(33, 33, 33, 0.1),
          0 16px 24px 2px rgba(33, 33, 33, 0.07),
          0 6px 30px 5px rgba(33, 33, 33, 0.05);
        --transition-elevation: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      * {
        box-sizing: border-box;
      }
      html,
      body,
      #__next {
        margin: 0;
        background: var(--color-white);
        color: var(--color-black);
        font-family: var(--font-primary);
        font-size: 20px;
        min-width: 320px;
      }

      html {
        background: var(--color-black);
      }

      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 500px;
        margin: 0 auto;
      }

      #__next {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
      }

      main {
        flex: 1;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7 {
        font-weight: 600;
        line-height: 1.25;
        margin: 0;
      }
      p,
      ul {
        margin: 0;
        font-size: 1rem;
        line-height: 1.25;
        color: var(--color-grey);
        @media (max-width: ${screenSMmax}) {
          font-size: 0.8rem;
        }
        & + & {
          margin-top: 1em;
        }
      }
      a {
        color: inherit;
      }
      .button {
        cursor: pointer;
        display: inline-block;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-black);
        text-decoration: none;
        text-align: center;
        padding: 0.8rem 1.6rem;
        background: var(--color-yellow);
        border: 2px solid transparent;
        border-radius: var(--border-radius);
        box-shadow: var(--elevation-z2);
        outline: none;
        transition: var(--transition-elevation);
        @media (max-width: ${screenSMmax}) {
          font-size: 0.8rem;
          line-height: 1.5;
          padding: 0.5rem 1.2rem;
        }
        &[disabled] {
          opacity: 0.5;
          cursor: not-allowed;
        }
        &:hover,
        &:focus {
          box-shadow: var(--elevation-z4);
        }
        &:focus {
          border-color: var(--color-black);
        }
      }
      /* Make images easier to work with */
      img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }
      /* Inherit fonts for inputs and buttons */
      input,
      button,
      textarea,
      select {
        font: inherit;
      }
      button {
        padding: 0;
        border: 0;
        background: none;
      }
      /* Remove _all_ animations and transitions for people that prefer not to see them */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-play-state: paused !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
      }
    `}
  />
);

export const containerStyles = css`
  flex: 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  /* Small devices (phones, 480px and up) */
  @media (min-width: ${screenSMmin}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: ${screenMDmin}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  /* Large devices (desktops, 1024px and up) */
  @media (min-width: ${screenLGmin}) {
    max-width: 990px;
  }
  /* Extra large devices (large desktops, 1440px and up) */
  @media (min-width: ${screenXLmin}) {
    max-width: 1200px;
  }
`;

/* Visually hidden class */
export const cloakStyles = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  &:focus,
  &:focus-within {
    background-color: red;
    color: white;
    clip: initial;
    height: auto;
    width: auto;
    display: inline-block;
  }
`;

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export const Container = styled('div')`
  ${containerStyles};
`;

export const Cloak = styled('div')`
  ${cloakStyles};
`;

export const Basic = styled('div')`
  ${basicStyles};
`;
