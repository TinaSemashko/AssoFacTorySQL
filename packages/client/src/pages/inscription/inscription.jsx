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
import { useSnackbar } from "notistack";
import axios from "../../axios";
import { BackGroundGradientInscription } from "../../shared/shared.styled";
import UpLoad from "../../images/UpLoad.png";

import * as S from "./inscription.styled";

export default function Inscription() {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [newUserId, setNewUserId] = useState(0);

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
      console.log(base64Data);
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
    if (newUserId)
      enqueueSnackbar("L'utilisateur est créé avec succès", {
        variant: "success",
      });
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
                  }}
                >
                  Inscription
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                      "& fieldset": {
                        borderColor: "red",
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
                          // color="warning"
                          sx={{
                            borderRadius: "20px",

                            "& .MuiFormLabel-root.Mui-focused ": {
                              color: "colorOrangeed701d.main",
                            },

                            m: 1,
                            width: { xs: "50vw", md: "25vw" },
                            backgroundColor: " white",
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
                          borderRadius: "20px",
                          "& .MuiFormLabel-root.Mui-focused ": {
                            color: "colorOrangeed701d.main",
                          },
                          m: 1,
                          width: { xs: "50vw", md: "25vw" },
                          backgroundColor: " white",
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
                              color: "white",
                              "&.Mui-checked": {
                                color: "#ff9a23",
                              },
                            }}
                          >
                            <FormControlLabel
                              value="Femme"
                              control={
                                <Radio
                                  sx={{
                                    color: "#ff9a23",
                                    "&.Mui-checked": {
                                      color: "#ff9a23",
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
                                      color: "#ff9a23",
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
                                      color: "#ff9a23",
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
                                borderRadius: "10px",
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
                        <S.Img2
                          src={UpLoad}
                          style={{
                            cursor: "pointer",
                          }}
                        />
                        <Input
                          style={{ display: "none" }}
                          type="file"
                          hidden
                          onChange={handleUpload}
                          name="[licenseFile]"
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
