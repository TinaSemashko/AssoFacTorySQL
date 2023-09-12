import { styled } from "@mui/material/styles";


export const MainContainer = styled("div")`
  .image {
    position: relative;
    height: 100vh;
  }
  .video {
    width: 100%;
    margin-bottom: -1rem;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
  }

  .content span.img-txt {
    background-color: #333;
    text-transform: uppercase;
    color: #fff;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 10px;
    z-index: 100;
  }
`;