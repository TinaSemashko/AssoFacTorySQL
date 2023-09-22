import React, { useState, useEffect, useCallback } from "react";
import * as S from "../header/topbar.styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";

// import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Avatar from "@mui/material/Avatar";
import axios from "../axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";

export default function FormConnexion() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [dataUrl, setDataUrl] = useState("");
  const [isInscrit, setIsInscrit] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const userIdCourant = localStorage.getItem("usrCourant");

  const [userdata, setUserdata] = useState(); //information bd
  const [user, setUser] = useState({
    email: "",
    password: "",
  }); // information form

  const { email, password } = user;

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
      localStorage.setItem("usrCourant", userdata.Id);
      setIsInscrit(false);
    } else fetchGet();
  };

  useEffect(() => {
    if (userdata) {
      localStorage.setItem("usrCourant", userdata.Id);
      setIsInscrit(true);
      console.log("userIdCourant " + userdata.Id);
      setDataUrl(`data:image/jpeg;base64,${userdata.photo.slice(20)}`);
    } else setIsInscrit(false);
  }, [userdata]);

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
                    <S.InputContainer isInscrit={isInscrit}>
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
                          />
                        </FormControl>
                      </Box>
                    </S.InputContainer>
                    <S.Prenom isInscrit={isInscrit}>
                      {userdata ? userdata.prenom : ""}
                    </S.Prenom>

                    <S.ButtonLogin
                      isInscrit={isInscrit}
                      variant="contained"
                      size="medium"
                      onClick={() => getUser()}
                    >
                      {isInscrit ? "LOG OUT" : "LOG IN"}
                    </S.ButtonLogin>
                  </S.FlexContainer>
                </Box>
                <S.Inscrivez>
                  Vous n’avez pas encore de compte!
                  <u
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/inscription")}
                  >
                    Inscrivrez-vous ici!
                  </u>
                </S.Inscrivez>
              </S.FormContainer>
            </S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.CContainer>
  );
}
