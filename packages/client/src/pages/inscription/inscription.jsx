import React, { useState, useEffect } from "react";
import videoInscription from "../../videos/videoInscription.mp4";
import Grid from "@mui/system/Unstable_Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, Input } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useSnackbar } from "notistack";
import axios from "../../axios";
import { BackGroundGradientInscription } from "../../shared/shared.styled";
import UpLoad from "../../images/UpLoad.png";

import * as S from "./inscription.styled";

export default function Inscription() {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [newUserId, setNewUserId] = useState(0);
  const [dataUrl, setDataUrl] = useState(UpLoad);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [user, setUser] = useState({
    prenom: "",
    genre: "",
    email: "",
    password: "",
    photo: null,
  });

  const { prenom, genre, email, password, photo } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target?.name]: event.target?.value });
  };

  const openTopbar = () => {
    document.querySelector("#iconbutton").click();
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUpload = async (event) => {
    if (event.target.files) {
      const base64Data = await convertToBase64(event.target.files[0]);
      setDataUrl(URL.createObjectURL(event.target.files[0]));
      setUser({ ...user, photo: base64Data });
    }
  };

  console.log(user);

  const fetchPost = async () => {
    const request = {
      data: user,
    };
    await axios
      .post(`createuser`, request)
      .then((response) => setNewUserId(response.data.results))
      .catch((err) => {
        showError(err);
      });
  };

  const setUp = async () => {
    if (
      user.email !== "" &&
      user.genre !== "" &&
      user.password !== "" &&
      user.prenom !== ""
    ) {
      fetchPost();
    } else
      enqueueSnackbar("Corrigez les erreurs dans le formulaire", {
        variant: "error",
      });
  };

  useEffect(() => {
    if (newUserId) {
      enqueueSnackbar("L'utilisateur est créé avec succès", {
        variant: "success",
      });
    }
  }, [newUserId]);

  const showError = (err) => {
    enqueueSnackbar("Quelque chose ne va pas", { variant: "error" });
    console.error(err);
  };

  return (
    <S.Container>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={12} md={6}>
            <S.Item>
              <video src={videoInscription} autoPlay loop muted />
            </S.Item>

            <S.Item>{/* <S.Img src={fdinscription} /></S.Item> */}

      {/* <S.Item>
        <video src={videoInscription} autoPlay loop muted />
      </S.Item> */}
      {/* </Grid> */}
      <Grid xs={12} md={6}>
        <S.Item>
          <S.FormContainer>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontFamily: "Gravitas One', cursive",
              }}
            >
              Inscription
            </Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 3,
                  borderRadius: "10px",
                  height: "8vh",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <S.FlexContainer>
                <S.FlexContainerNom>
                  <TextField
                    required
                    id="prenom:"
                    label="Prenom"
                    value={prenom}
                    name="prenom"
                    onChange={(e) => onInputChange(e)}
                    placeholder="Entrez votre prénom..."
                    color="secondary"
                    sx={{
                      m: 1,
                      width: { xs: "24vw", md: "12vw" },
                      height: "8vh",
                      backgroundColor: " grey",
                      boxShadow: " 0px 8px 8px #566573  inset",
                    }}
                  />
                </S.FlexContainerNom>
                <TextField
                  required
                  id="Email"
                  label="Email"
                  value={email}
                  name="email"
                  onChange={(e) => onInputChange(e)}
                  placeholder="Entrez votre Email"
                  color="secondary"
                  sx={{
                    m: 1,
                    width: { xs: "50vw", md: "25vw" },
                    backgroundColor: " grey",
                    boxShadow: " 0px 8px 8px #566573  inset",
                  }}
                />
                <FormControl>
                  <S.RadioButton>
                    <div>Genre:&nbsp;&nbsp;</div>
                    <RadioGroup
                      row
                      aria-labelledby="radio-buttons"
                      name="genre"
                      value={genre}
                      onChange={(e) => onInputChange(e)}
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "lime",
                        },
                      }}
                    >
                      <FormControlLabel
                        value="Femme"
                        control={
                          <Radio
                            sx={{
                              color: "lime",
                              "&.Mui-checked": {
                                color: "lime",
                              },
                            }}
                          />
                        }
                        label="Femme"
                      />
                      <FormControlLabel
                        value="Homme"
                        control={
                          <Radio
                            sx={{
                              color: "grey",
                              "&, &.Mui-checked": {
                                color: "lime",
                              },
                            }}
                          />
                        }
                        label="Homme"
                      />
                      <FormControlLabel
                        value="Autre"
                        control={
                          <Radio
                            sx={{
                              color: "grey",
                              "&, &.Mui-checked": {
                                color: "lime",
                              },
                            }}
                          />
                        }
                        label="Autre"
                      />
                    </RadioGroup>
                  </S.RadioButton>
                </FormControl>
                <S.FlexContainerPass>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      flexWrap: "wrap",
                      width: { xs: "50vw", md: "25vw" },
                    }}
                  >
                    <FormControl
                      sx={{
                        m: 1,
                        textAlign: "start",
                        width: { xs: "50vw", md: "25vw" },
                      }}
                      variant="outlined"
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-password"
                        color="secondary"
                      >
                        Mot de passe
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        color="secondary"
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: " grey",
                          boxShadow: " 0px 8px 8px #566573  inset",
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        value={password}
                        name="password"
                        onChange={(e) => onInputChange(e)}
                      />
                    </FormControl>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <FormControl
                      sx={{ m: 1, width: { xs: "50vw", md: "25vw" } }}
                      variant="outlined"
                    >
                      <InputLabel
                        htmlFor="outlined-adornment-password"
                        color="secondary"
                      >
                        Confimez votre mot de passe
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        color="secondary"
          </Grid>
          <Grid xs={12} md={6}>
            <S.Item>
              <S.FormContainer>
                <Typography
                  variant="h2"
                  pt={6}
                  pb={6}
                  sx={{
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                >
                  Inscription
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "15px",
                      "& fieldset": {
                        borderColor: "red",
                        height: "8vh",
                      },
                      "&:hover fieldset": {
                        borderColor: "red",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "colorOrangeed701d.main",
                      },
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <BackGroundGradientInscription>
                    <S.FlexContainer>
                      <S.FlexContainerNom>
                        <TextField
                          required
                          id="Prénom:"
                          label="Prénom"
                          value={prenom}
                          name="prenom"
                          onChange={(e) => onInputChange(e)}
                          placeholder="Entrez votre prénom..."
                          sx={{
                            borderRadius: "15px",
                            height: "7vh",
                            "& .MuiFormLabel-root.Mui-focused ": {
                              color: "colorOrangeed701d.main",
                            },

                            m: 1,
                            width: { xs: "50vw", md: "25vw" },
                            backgroundColor: "colorWhite.main",
                            boxShadow: " 0px 8px 8px #566573  inset",
                            textAlign: "center",
                          }}
                        />
                      </S.FlexContainerNom>
                      <S.FlexContainerNom>
                        <TextField
                          required
                          id="Email"
                          label="Email"
                          value={email}
                          name="email"
                          onChange={(e) => onInputChange(e)}
                          placeholder="Entrez votre Email"
                          color="secondary"
                          sx={{
                            borderRadius: "15px",
                            height: "7vh",
                            "& .MuiFormLabel-root.Mui-focused ": {
                              color: "colorOrangeed701d.main",
                            },
                            m: 1,
                            width: { xs: "50vw", md: "25vw" },
                            backgroundColor: "colorWhite.main",
                            boxShadow: " 0px 8px 8px #566573  inset",
                          }}
                        />
                      </S.FlexContainerNom>
                      <FormControl>
                        <S.RadioButton>
                          <div>Genre:&nbsp;&nbsp;</div>
                          <RadioGroup
                            row
                            aria-labelledby="radio-buttons"
                            name="genre"
                            value={genre}
                            onChange={(e) => onInputChange(e)}
                            sx={{
                              color: "colorWhite.main",
                              "&.Mui-checked": {
                                color: "colorOrange.main",
                              },
                            }}
                          >
                            <FormControlLabel
                              value="Femme"
                              control={
                                <Radio
                                  sx={{
                                    color: "colorOrange.main",
                                    "&.Mui-checked": {
                                      color: "colorOrange.main",
                                    },
                                  }}
                                />
                              }
                              label="Femme"
                            />
                            <FormControlLabel
                              value="Homme"
                              control={
                                <Radio
                                  sx={{
                                    color: "white",
                                    "&, &.Mui-checked": {
                                      color: "colorOrange.main",
                                    },
                                  }}
                                />
                              }
                              label="Homme"
                            />
                            <FormControlLabel
                              value="Autre"
                              control={
                                <Radio
                                  sx={{
                                    color: "white",
                                    "&, &.Mui-checked": {
                                      color: "colorOrange.main",
                                    },
                                  }}
                                />
                              }
                              label="Autre"
                            />
                          </RadioGroup>
                        </S.RadioButton>
                      </FormControl>
                      <S.FlexContainerPass>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            flexWrap: "wrap",
                            width: { xs: "50vw", md: "25vw" },
                          }}
                        >
                          <FormControl
                            sx={{
                              height: "7vh",
                              "& .MuiFormLabel-root.Mui-focused ": {
                                color: "colorOrangeed701d.main",
                              },
                              m: 1,
                              textAlign: "start",
                              width: { xs: "50vw", md: "25vw" },
                            }}
                            variant="outlined"
                          >
                            <InputLabel
                              required
                              htmlFor="outlined-adornment-password"
                              color="secondary"
                            >
                              Mot de passe
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password"
                              type={showPassword ? "text" : "password"}
                              color="secondary"
                              sx={{
                                height: "7vh",
                                width: { xs: "50vw", md: "25vw" },
                                textAlign: "center",
                                justifyContent: "center",
                                borderRadius: "15px",
                                backgroundColor: " white",
                                boxShadow: " 0px 8px 8px #566573  inset",
                              }}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                              value={password}
                              name="password"
                              onChange={(e) => onInputChange(e)}
                            />
                          </FormControl>
                        </Box>
                      </S.FlexContainerPass>
                      <S.ButtonUpload variant="contained" component="label">
                        <Avatar
                          alt="user"
                          src={dataUrl}
                          sx={{ width: 130, height: 130 }}
                        />
                        <Input
                          style={{ display: "none" }}
                          type="file"
                          hidden
                          onChange={handleUpload}
                          name="userphoto"
                        />
                      </S.ButtonUpload>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "colorWhite.main",
                        }}
                      >
                        Choisissez votre photo de profil
                      </Typography>

                      <S.ButtonValider
                        variant="contained"
                        size="medium"
                        onClick={() => setUp()}
                        sx={{
                          m: 1,
                          backgroundColor: "green",
                          boxShadow: " 0px 4px 4px #566573 ",
                          width: "20vw",
                          borderRadius: "10px",
                        }}
                      >
                        Valider
                      </S.ButtonValider>
                      <S.Inscrivez>
                        Déja Inscrit ?
                        <u
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => openTopbar()}
                        >
                          Connectez-vous
                        </u>
                      </S.Inscrivez>
                    </S.FlexContainer>
                  </BackGroundGradientInscription>
                </Box>
              </S.FormContainer>
            </S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.Container>
  );
}
