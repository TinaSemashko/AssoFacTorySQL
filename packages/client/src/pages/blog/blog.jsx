import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import BlockWall from "../components/blockWall/blockWall";
import Spinner from "@mui/material/CircularProgress";
import { IconButton, Input } from "@mui/material";

import * as S from "./blog.styled";

const Blog = () => {
  const [sendmessage, setSendmessage] = useState("");
  const [componentList, setComponentList] = useState([]);
  const [file, setFile] = useState("");
  const [userdata, setUserdata] = useState();
  // const { email, password } = user;

  // useEffect(() => {
  //   fetchGet();
  // }, [userdata]);

  // const fetchGet = async () => {
  //   const request = {
  //     params: {
  //       email: user.email,
  //     },
  //   };
  //   await axios
  //     .get(`user`, request)
  //     .then((response) => {
  //       setUserdata(response.data.results[0]);
  //     })
  //     .catch((err) => {
  //       showError(err);
  //     });
  // };

  const onInputChange = (event) => {
    setSendmessage(event.target?.value);
  };

  const sendMessage = (buttonImage = false) => {
    if ((sendmessage !== "" || file !== "") && !buttonImage) {
      const newComponent = <BlockWall text={sendmessage} imageUrl={file} />;
      setComponentList([...componentList, newComponent]);
      setSendmessage("");
      setFile("");
    } else return <Spinner size={120} />;
  };

  const handleUpload = (event) => {
    if (event.target.files) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <S.MainContainer>
      <S.GridCadre>
        <S.GridTitle>Bienvenu de blog !</S.GridTitle>
        {componentList.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </S.GridCadre>
      <S.GridSendBox>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "45vw",
              borderRadius: "10px",
              backgroundColor: "colorWhite.main",
              boxShadow: " 0px 4px 4px gray inset",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="message"
            type="text"
            sx={{
              backgroundColor: "colorOrangeBlog.main",
              boxShadow: " 0px 8px 8px #566573  inset",
            }}
            placeholder="Ecrivez votre message..."
            fullWidth
            onChange={(e) => onInputChange(e)}
          />
        </Box>

        <TextField
          variant="outlined"
          type="text"
          sx={{
            border: "none",
            "& fieldset": { border: "none" },
            width: { xs: "20vw", md: "10vw" },
            textAlign: "left",
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                component="label"
                onClick={() => sendMessage(true)}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  fontSize: "4rem",
                }}
              >
                <AddPhotoAlternateIcon
                  fontSize="inherit"
                  sx={{
                    color: "colorBlack.main",
                    borderRadius: "50%",
                    fontSize: "4rem",
                    borderColor: "colorBlack.main",
                  }}
                />
                <Input
                  style={{ display: "none" }}
                  type="file"
                  hidden
                  onChange={handleUpload}
                  name="[licenseFile]"
                />
              </IconButton>
            ),
          }}
        />
        <Button
          name="sendmessage"
          value={sendmessage}
          onClick={() => sendMessage()}
          sx={{
            color: "colorOrangeBlog.main",
            borderRadius: "50px",
            width: "1vw",
            fontSize: "4rem",
          }}
        >
          <SendRoundedIcon
            fontSize="inherit"
            className="icon"
            sx={{
              color: "colorBlack.main",
              // backgroundColor: "primary.main",
              borderRadius: "50%",
            }}
          />
        </Button>
      </S.GridSendBox>
    </S.MainContainer>
  );
};

export default Blog;
