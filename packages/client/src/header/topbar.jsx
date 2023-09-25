import * as React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router";
import Logo from "../logo/Logo.gif";
import FormConnexion from "../compenents/FormConnexion";

import * as S from "./topbar.styled";

const menuItemsArray = [
  "accueil",
  "blog",
  "STRIP PLASTIC ",
  "PLATEAU",
  "KINE et YOGA",
];

const drawerWidth = "50%";

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (item) =>
    pathname.includes(item) || (pathname === "/" && item === "accueil");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigateItem = (item) => {
    if (item === "accueil") navigate("/");
    else navigate(item);
  };

  const fetchGet = async () => {
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

  const showError = (error) => {
    enqueueSnackbar("Utilisateur inconnu", {
      variant: "error",
    });
    console.error(error);
  };

  useEffect(() => {
    if (userIdCourant && (!userdata || userdata.id !== userIdCourant))
      fetchGet();
  }, [userIdCourant]);

  useEffect(() => {
    if (userdata && !(userIdCourant === "" || userIdCourant === undefined)) {
      setDataUrl(`data:image/jpeg;base64,${userdata.photo.slice(20)}`);
    } else setDataUrl("");
  }, [userdata, userIdCourant]);

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        background:
          "linear-gradient(180deg, #BE0000 13.54%, rgba(220, 80, 2, 0.87) 57.29%, #9B2525 100%)",
      }}
    >
      <S.CloseIconStyle>
        <Typography variant="h5" color="black" className="close">
          Close
        </Typography>
        <CloseIcon
          onClick={handleDrawerToggle}
          sx={{ fontSize: "4rem", cursor: "pointer" }}
        />
      </S.CloseIconStyle>

      <S.Form>
        <FormConnexion />
      </S.Form>
      <Divider />
      <Typography
        onClick={() => navigate("/")}
        variant="h2"
        fontFamily="Wallpoet"
        sx={{ my: 2, color: "white" }}
      >
        AssoFacTory
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {menuItemsArray.map((item, index) => (
          <ListItem key={item}>
            <ListItemButton
              selected={isSelected(item)}
              onClick={handleDrawerToggle}
              sx={{
                textAlign: "center",
                color: index > 1 ? "colorWhite.main" : "colorBlack.main",
              }}
            >
              <ListItemText
                primary={item}
                onClick={() => navigateItem(item)}
                primaryTypographyProps={{
                  fontSize: index > 1 ? "15px" : "30px",
                  textTransform: "capitalize",
                  lineHeight: "normal",
                  fontWeight: "400",
                  fontFamily: "Wallpoet",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <S.Container>
      <Box
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
          },
          display: "flex",
        }}
      >
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "black",
              background: "transparent",
            }}
          >
            <IconButton
              id="iconbutton"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <S.LogoText>
              <S.Img
                src={Logo}
                alt="Logo"
                style={{ width: "54px", height: "46px", marginRight: "40px" }}
              />

              <Typography
                variant="h4"
                fontFamily='"Wallpoet", cursive'
                color="#5E0202"
                onClick={() => navigate("/")}
                sx={{
                  my: 2,
                  opacity: 0.8,
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  cursor: "pointer",
                }}
              >
                AssoFacTory
              </Typography>
            </S.LogoText>
            <div></div>
            <ClickAwayListener
              mouseEvent="onMouseDown"
              touchEvent="onTouchStart"
              onClickAway={() => mobileOpen && handleDrawerToggle()}
            >
              <Drawer
                anchor="left"
                variant="temporary"
                open={mobileOpen}
                onClose={(_, reason) => reason === "backdropClick"}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </ClickAwayListener>
          </Toolbar>
        </AppBar>
      </Box>
    </S.Container>
  );
}
