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
import { IconButton, Input, FormGroup } from "@mui/material";
import axios from "../../axios.js";
import { useSnackbar } from "notistack";
import Clock from "../../shared/clock";
import storage from "../../service/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import * as S from "./blog.styled";

const Blog = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [postdata, setPostdata] = useState([{}]);
  const [post, setPost] = useState({});
  const [newPostId, setNewPostrId] = useState(0);

  const [commentsdata, setCommentsdata] = useState([{}]);
  const [comment, setComment] = useState({});
  const [newCommentId, setNewCommentId] = useState(0);

  const [filterItemsArray, setFilterItemsArray] = useState([{}]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [fileImage, setFileImage] = useState(null);

  const userIdCourant = localStorage.getItem("usrCourant");
  const isAuthorised = userIdCourant !== "" && userIdCourant !== undefined;
  const salonCourant = localStorage.getItem("salonCurant");

  ////COMMON///////

  const showError = (err, mess) => {
    enqueueSnackbar(mess, { variant: "error" });
    console.error(err);
  };

  const filter = (item, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (salonCourant !== undefined && salonCourant !== 0)
      setSelectedIndex(salonCourant - 1);
  }, []);

  ////block GET /////////

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

  const fetchGet = async (endpoint) => {
    await axios
      .get(endpoint)
      .then((response) => {
        const result = response.data.results[0];
        if (result)
          endpoint === `posts` ? setPostdata(result) : setCommentsdata(result);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchGet(`posts`);
  }, [selectedIndex]);

  useEffect(() => {
    fetchGet(`comments`);
  }, [selectedIndex]);

  ////block POST /////////

  useEffect(() => {
    setPost({
      ...post,
      time: Clock().toString(),
      id_salon: selectedIndex + 1,
      id_user: userIdCourant,
    });
  }, [selectedIndex]);

  useEffect(() => {
    setComment({
      ...comment,
      time: Clock().toString(),
      id_user: userIdCourant,
    });
  }, [selectedIndex]);

  const uploadPhotoFirebase = () => {
    const part1 = Math.trunc(Math.random() * 6 + 1).toString();
    const fileName =
      "image_time" +
      Clock().toString() +
      "salon" +
      selectedIndex.toString() +
      "user" +
      userIdCourant +
      part1;

    const storageRef = ref(storage, `images/${fileName}`);
    uploadBytes(storageRef, fileImage)
      .then(async (snapshot) => {
        const downloadURL = await getDownloadURL(snapshot.ref);
        console.log("downloadURL " + downloadURL);
        if (downloadURL !== "" && downloadURL !== undefined) {
          enqueueSnackbar("l'image a été ajouté à la bdd", {
            variant: "success",
          });
          console.log("comment?.id_post " + comment?.id_post);
          if (comment?.id_post !== undefined && comment?.id_post !== 0)
            setComment({ ...comment, media: downloadURL });
          else setPost({ ...post, media: downloadURL });
        }
      })
      .catch((err) => {
        showError(err, "l'image n'a pas été ajouté à la bdd");
      });
  };

  const handleUpload = async (event) => {
    if (event.target.files) {
      setFileImage(event.target.files[0]);
    }
  };

  const fetchPost = async () => {
    const request = {
      data: post,
    };
    await axios
      .post(`createpost`, request)
      .then((response) => setNewPostrId(response.data.results))
      .catch((err) => {
        showError(err, "Le post n'a pas créé");
      });
  };

  const fetchComment = async () => {
    const request = {
      data: comment,
    };
    await axios
      .post(`createcomment`, request)
      .then((response) => setNewCommentId(response.data.results))
      .catch((err) => {
        showError(err, "Le comment n'a pas créé");
      });
  };

  const sendMessage = async () => {
    if (isAuthorised) {
      if (post.message !== "" || comment.message !== "" || fileImage) {
        if (fileImage) await uploadPhotoFirebase();
        setTimeout(() => {
          console.log("fileImage " + fileImage);
          console.log("post.media " + post.media);
          console.log("comment.media " + comment.media);

          if ((fileImage && (post.media || comment.media)) || !fileImage) {
            if (comment?.id_post) fetchComment();
            else fetchPost();
          }
        }, 1000);
      } else return <Spinner size={120} />;
    } else showError("Autorisation requise", "Autorisation requise");
  };

  useEffect(() => {
    if (newPostId) {
      enqueueSnackbar("Le post est créé avec succès", {
        variant: "success",
      });
    }
  }, [newPostId]);

  useEffect(() => {
    if (newCommentId) {
      enqueueSnackbar("Le comment est créé avec succès", {
        variant: "success",
      });
    }
  }, [newCommentId]);

  const onInputChange = (e) => {
    if (comment.id_post) setComment({ ...comment, message: e.target?.value });
    else setPost({ ...post, message: e.target?.value });
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
                  "&, &.Mui-selected": {
                    backgroundColor:
                      item.id === 1
                        ? "colorRed.main"
                        : item.id === 2
                        ? "secondary.main"
                        : "colorBlue.main",

                    textAlign: "center",
                    borderRadius: "10px",
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
          {postdata
            .filter((el) => el.id_salon === selectedIndex + 1)
            ?.map((item) => (
              <div>
                <BlockWall
                  key={item.id}
                  dataBlock={item}
                  idSalon={selectedIndex + 1}
                />
                {commentsdata
                  ? commentsdata
                      .filter((elem) => elem.id_post === item.id)
                      .map((itemC) => (
                        <BlockWall
                          key={itemC.id}
                          dataBlock={itemC}
                          idSalon={selectedIndex + 1}
                          isComment={true}
                        />
                      ))
                  : ""}
              </div>
            ))}
        </S.GridCadre>
      )}
      <S.GridSendBox idSalon={selectedIndex + 1}>
        <FormGroup>
          <TextField
            required
            id="idPost"
            type="text"
            sx={{
              width: { xs: "3vw", sm: "5vw", md: "5vw", lg: "10vw" },
              backgroundColor: "colorWhite.main",
              boxShadow: " 0px 8px 8px #566573  inset",
              ml: { xs: "2vw", sm: "2vw", md: "0vw", lg: "0vw" },
            }}
            placeholder="№ de post"
            fullWidth
            onChange={(e) =>
              setComment({ ...comment, id_post: e.target?.value })
            }
          />
        </FormGroup>
        <FormGroup>
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
        </FormGroup>

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
                    fontSize: { xs: "10vw", sm: "10vw", md: "8vw", lg: "4vw" },
                    borderColor: "colorBlack.main",
                  }}
                />
                <FormGroup>
                  <Input
                    style={{ display: "none" }}
                    type="file"
                    hidden
                    onChange={handleUpload}
                    name="fileImage"
                  />
                </FormGroup>
              </IconButton>
            ),
          }}
        />
        <Button
          name="sendmessage"
          onClick={() => sendMessage()}
          sx={{
            color: "colorOrangeBlog.main",
            borderRadius: "50px",
            width: "1vw",
            fontSize: { xs: "10vw", sm: "10vw", md: "8vw", lg: "4vw" },
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
