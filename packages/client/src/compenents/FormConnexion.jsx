import React, { useState, useEffect } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, FormGroup } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import axios from "../axios";
import { useSnackbar } from "notistack";

import * as S from "../header/topbar.styled";

const FormConnexion = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [dataUrl, setDataUrl] = useState("");
  const userIdCourant = localStorage.getItem("usrCourant");
  const userCourantPrenom = localStorage.getItem("usrCourantPrenom");

  const [isInscrit, setIsInscrit] = useState(
    userIdCourant !== "" && userIdCourant !== undefined
  );
  const [userPrenom, setUserPrenom] = useState("");

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [userdata, setUserdata] = useState(); //information bd
  const [user, setUser] = useState({
    email: "",
    password: "",
  }); // information form

  const { email, password } = user;

  useEffect(() => {
    if (isInscrit) setUserPrenom(userCourantPrenom);
  }, [userIdCourant]);

  const onInputChange = (event) => {
    setUser({ ...user, [event.target?.name]: event.target?.value });
  };

  const showError = (error) => {
    enqueueSnackbar("Utilisateur inconnu", {
      variant: "error",
    });
    console.error(error);
  };

  const fetchGet = async () => {
    const request = {
      params: {
        email: user.email,
        password: user.password,
      },
    };
    await axios
      .get(`user`, request)
      .then((response) => {
        setUserdata(response.data.results[0]);
      })
      .catch((err) => {
        showError(err);
      });
  };

  const getUser = async () => {
    if (isInscrit) {
      localStorage.setItem("usrCourant", "");
      localStorage.setItem("usrCourantPrenom", "");
      setDataUrl("");
      setIsInscrit(false);
    } else fetchGet();
  };

  useEffect(() => {
    if (userdata) {
      setUserPrenom(userdata.prenom);
      localStorage.setItem("usrCourant", userdata.id);
      localStorage.setItem("usrCourantPrenom", userdata.prenom);
      setIsInscrit(true);
      setDataUrl(`data:image/jpeg;base64,${userdata.photo.slice(20)}`);
    }
  }, [userdata]);

  const fetchGetUserById = async () => {
    const request = {
      params: {
        id: userIdCourant,
      },
    };
    await axios
      .get(`getuserbyid`, request)
      .then((response) => {
        setUserdata(response.data.results[0]);
      })
      .catch((err) => {
        showError(err);
      });
  };

  useEffect(() => {
    if (isInscrit && !userdata) {
      fetchGetUserById();
    }
  }, [userIdCourant]);

  return (
    <S.CContainer>
      <Box sx={{ width: "70%" }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={12} md={6} sx={{ ml: 1 }}>
            <Avatar alt="user" src={dataUrl} sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid xs={12} md={6}>
            <S.Item>
              <S.FormContainer>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      width: { xs: "30vw", md: "15vw" },
                      borderRadius: "10px",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <S.FlexContainer>
                    <S.InputContainer isinscrit={isInscrit}>
                      <TextField
                        required
                        id="Email"
                        label="Email"
                        name="email"
                        value={email}
                        placeholder="Entrez votre Email"
                        color="secondary"
                        fullWidth
                        onChange={(event) => onInputChange(event)}
                        sx={{
                          backgroundColor: " grey",
                          boxShadow: " 0px 8px 8px #566573  inset",
                        }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <FormControl
                          sx={{ m: 1, width: { xs: "30vw", md: "15vw" } }}
                          variant="outlined"
                        >
                          <FormGroup>
                            <InputLabel
                              htmlFor="outlined-adornment-password"
                              color="secondary"
                            >
                              Mot de passe
                            </InputLabel>
                          </FormGroup>
                          <FormGroup>
                            <OutlinedInput
                              id="outlined-adornment-password"
                              type={showPassword ? "text" : "password"}
                              color="secondary"
                              fullWidth
                              autoComplete="new-password"
                              name="password"
                              value={password}
                              onChange={(event) => onInputChange(event)}
                              sx={{
                                backgroundColor: " grey",
                                boxShadow: " 0px 8px 8px #566573  inset",
                              }}
                              endAdornment={
                                <InputAdornment position="end">
                                  <FormGroup>
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
                                  </FormGroup>
                                </InputAdornment>
                              }
                              label="Password"
                            />
                          </FormGroup>
                        </FormControl>
                      </Box>
                    </S.InputContainer>
                    <S.Prenom isinscrit={isInscrit}>
                      {isInscrit ? userPrenom : ""}
                    </S.Prenom>

                    <S.ButtonLogin
                      isinscrit={isInscrit}
                      variant="contained"
                      size="medium"
                      onClick={() => getUser()}
                    >
                      {isInscrit ? "LOG OUT" : "LOG IN"}
                    </S.ButtonLogin>
                  </S.FlexContainer>
                </Box>
              </S.FormContainer>
            </S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.CContainer>
  );
};

export default FormConnexion;
