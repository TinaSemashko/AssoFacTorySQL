import { Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import * as S from "./blockWall.styled";

const blockWall = ({ dataBlock }) => {
  const datatime = dayjs();
  // const [userdata, setUserdata] = useState();

  // const userId = localStorage.getItem("usrCourant");
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
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      {/* <S.MyTimeField defaultValue={datatime} disableFuture /> */}
      <S.Author>
        <Typography variant="h6"> {dataBlock.user}</Typography>
      </S.Author>
      <S.Time>
        <Typography variant="h6"> {dataBlock.time}</Typography>
      </S.Time>
      <S.Img src={dataBlock.media} />
      <S.Text>
        <Typography variant="h6"> {dataBlock.message}</Typography>
      </S.Text>
      {/* </LocalizationProvider> */}
    </S.MainContainer>
  );
};

export default blockWall;
