import styled from "styled-components";

// Define the :root style
export const RootStyles = styled.div`
  --white: #f0f0ec;
  --dark-white: #b1b1ac;
  --black: #1b1e20;
  --light-black: #2d3438;
  --öppettider: #ccdee7;
  --öppettider-Faded: #ccdee77a;
  --priser: #ccd6e7;
  --priser-faded: #ccd6e77a;
  --uthyrning: #e1d1e7;
  --lärDig: #d9f4f1;
  --pistKarta: #e2dbf8;
`;

export const HeaderStyles = styled.div`
  background-color: var(--priser);
`;

export const BodyStyles = styled.div`
  background-color: var(--pistKarta);
`;

//Det här fungerar inte.
/* export const NavStyles = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  padding: 0px 7%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  background-color: var(--black);
`; */
