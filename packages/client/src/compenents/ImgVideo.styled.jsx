import { styled } from "@mui/material/styles";

<<<<<<< HEAD
=======

>>>>>>> b18f12fa (accueil)
export const MainContainer = styled("div")`
  .image {
    position: relative;
    height: 100vh;
  }
<<<<<<< HEAD
  /* .video {
    width: 100%;
    margin-bottom: -1rem;
  } */
=======
  .video {
    width: 100%;
    margin-bottom: -1rem;
  }
>>>>>>> b18f12fa (accueil)

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
  }
<<<<<<< HEAD
  .content div.video-txt-assofactory {
    background-color: #ff0000;
    text-transform: uppercase;
    color: #de9a5a;
    mix-blend-mode: hard-light;
    letter-spacing: 30px;
  }

  .content span.img-txt-strip {
    background-color: #ff0000;
    text-transform: uppercase;
    color: black;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
  }
  .content span.img-txt-plateau {
    background-color: #b4f573;
    text-transform: uppercase;
    color: #de9a5a;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
  }

  .content span.img-txt-yoga {
    background-color: #66a3fd;
    text-transform: uppercase;
    color: #de9a5a;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
  }

  .content span.img-txt-detente {
    background-color: #66a3fd;
    text-transform: uppercase;
    color: #de9a5a;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 30px;
    z-index: 100;
    mix-blend-mode: difference;
  }
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;

  video {
    position: relative;
    width: 100vw;
  }

  .content {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100vh;
    width: 100%;
  }

  .content .img-txt-video {
    text-transform: uppercase;
    color: #de9a5a;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 50px;
    z-index: 100;
    mix-blend-mode: difference;
  }
`;
=======

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
>>>>>>> b18f12fa (accueil)
