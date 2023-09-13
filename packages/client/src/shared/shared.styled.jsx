import { styled } from "@mui/material/styles";

export const BackGroundGradientMain = styled("div")`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.colorMaroonFonce.main} 13.54%,
    ${({ theme }) => theme.palette.colorOrange087.main} 57.29%,
    ${({ theme }) => theme.palette.colorBrown.main} 100%
  );
`;

export const BackGroundGradientLogo = styled("div")`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.colorOrange04624.main} 43.23%,
    ${({ theme }) => theme.palette.colorWhite.main} 100%
  );
`;
