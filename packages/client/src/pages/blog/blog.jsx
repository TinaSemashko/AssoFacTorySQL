import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import BlockWall from "../components/blockWall/blockWall";
import Spinner from "@mui/material/CircularProgress";
import ListItem from "@mui/material/ListItem";
import {
  uploadImageToImgur,
  uploadImageToImgBB,
  uploadImageToCloudinary,
} from "./imageService.js";
import { IconButton, Input } from "@mui/material";
import axios from "../../axios.js";
import { useSnackbar } from "notistack";
import Clock from "../../shared/clock";
import storage from "../../service/firebase";
import { ref, uploadBytes, uploadString } from "firebase/storage";

import * as S from "./blog.styled";

const Blog = () => {
  const { enqueueSnackbar } = useSnackbar();
  // const [sendmessage, setSendmessage] = useState("");
  // const [componentList, setComponentList] = useState([]);
  // const [file, setFile] = useState("");
  const [postdata, setPostdata] = useState([{}]);
  const [post, setPost] = useState({});
  const { id_user, id_salon, message, media, time } = post;
  const [filterItemsArray, setFilterItemsArray] = useState([{}]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchGetSalons = async () => {
      await axios
        .get(`salons`)
        .then((response) => {
          setFilterItemsArray(response.data.results[0]);
        })
        .catch((err) => {
          showError(err, "Il n'y a pas de salons");
        });
    };

    fetchGetSalons();
  }, []);

  const showError = (err, mess) => {
    enqueueSnackbar(mess, { variant: "error" });
    console.error(err);
  };

  const fetchGet = async () => {
    await axios
      .get(`posts`)
      .then((response) => {
        console.log(selectedIndex);
        setPostdata(
          Array.from(response.data.results[0]).filter(
            (el) => el.id_salon === selectedIndex + 1
          )
        );
      })
      .catch((err) => {
        showError(err, "Il n'y a pas de post");
      });
  };

  useEffect(() => {
    fetchGet();
  }, [selectedIndex]);

  const handleUpload = async (event) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      const storageRef = ref(storage, "images/");
      uploadBytes(storageRef, selectedFile)
        .then((snapshot) => {
          enqueueSnackbar("l'image a été ajouté à la bdd", {
            variant: "success",
          });
        })
        .catch((err) => {
          showError(err, "l'image n'a pas été ajouté à la bdd");
        });

      setPost({ ...post, media: URL.createObjectURL(event.target.files[0]) });
    }
  };

  const fetchPost = async () => {
    const request = {
      data: post,
    };
    await axios
      .post(`createpost`, request)
      .then((response) => setNewUserId(response.data.results))
      .catch((err) => {
        showError(err, "Le post n'a pas créé");
      });
  };

  const sendMessage = (buttonImage = false) => {
    if ((message !== "" || file !== "") && !buttonImage) {
      setPost({
        ...post,
        time: Clock().toString(),
        id_salon: selectedIndex + 1,
        id_user: 1,
      });
      console.log(post);
      fetchPost();
      // const newComponent = <BlockWall text={sendmessage} imageUrl={file} />;
      // setComponentList([...componentList, newComponent]);
      // setSendmessage("");
      // setFile("");
    } else return <Spinner size={120} />;
  };

  const filter = (item, index) => {
    setSelectedIndex(index);
  };

  return (
    <S.MainContainer>
      <S.Filter>
        {filterItemsArray ? (
          filterItemsArray.map((item, index) => (
            <ListItem
              disablePadding
              key={item.id}
              sx={{
                width: "30vw",
              }}
            >
              <S.MyButton
                selected={selectedIndex === index}
                onClick={() => filter(item, index)}
                sx={{
                  "&": {
                    backgroundColor:
                      item.id === 1
                        ? "colorRed.main"
                        : item.id === 2
                        ? "secondary.main"
                        : "colorBlue.main",

                    textAlign: "center",
                  },
                }}
              >
                <Typography variant="h3">{item.salon}</Typography>
              </S.MyButton>
            </ListItem>
          ))
        ) : (
          <Spinner size={120} />
        )}
      </S.Filter>
      {!postdata ? (
        <Spinner />
      ) : (
        <S.GridCadre idSalon={selectedIndex + 1}>
          {postdata?.map((item) => (
            <div key={item.id}>
              <BlockWall dataBlock={item} />
            </div>
          ))}
        </S.GridCadre>
      )}

      {/* <S.GridCadre>
        {componentList.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </S.GridCadre> */}
      <S.GridSendBox idSalon={selectedIndex + 1}>
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
            onChange={(e) => setPost({ ...post, message: e.target?.value })}
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
          name="message"
          value={message}
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
              borderRadius: "50%",
            }}
          />
        </Button>
      </S.GridSendBox>
    </S.MainContainer>
  );
};

export default Blog;
