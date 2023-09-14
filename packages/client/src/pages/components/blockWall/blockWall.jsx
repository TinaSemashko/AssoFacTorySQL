import { Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import * as S from "./blockWall.styled";

const blockWall = ({ text = "", imageUrl = "" }) => {
  const datatime = dayjs();
  // const [userdata, setUserdata] = useState();

  userId = localStorage.getItem("usrCourant");
  //console.log(auth);

  // const fetchGet = async () => {
  //   const request = {
  //     params: {
  //       email: user.email,
  //       password: user.password,
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

  return (
    <S.MainContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <S.MyTimeField defaultValue={datatime} disableFuture />
        <S.Img src={imageUrl} />
        <S.Text>
          <Typography variant="h6"> {text}</Typography>
        </S.Text>
      </LocalizationProvider>
    </S.MainContainer>
  );
};

export default blockWall;
