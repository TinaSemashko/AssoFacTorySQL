import * as React from "react";
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
import * as S from "./topbar.styled";



const menuItemsArray = ["accueil", "blog",  "STRIP PLASTIC ","PLATEAU", "KINE et YOGA"];


const drawerWidth = "30%";

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (item) =>
    pathname.includes(item) || (pathname === "/" && item === "accueil");


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
   
      onClick={handleDrawerToggle}
      sx={{ height: "100vh", textAlign: "center",  background: "linear-gradient(180deg, #BE0000 13.54%, rgba(220, 80, 2, 0.87) 57.29%, #9B2525 100%)" }}
    >
      <S.CloseIconStyle>
        <Typography variant="h5" color="" className="close">
          Close
        </Typography>
        <CloseIcon sx={{ fontSize: "2rem",  }} />
      </S.CloseIconStyle>
      <Typography
        onClick={() => navigate("/")}
        variant="h6"
        fontFamily='"Chicle", cursive'
        fontSize="12vw"
        sx={{ my: 2, color: "black" }}
        
      >
        AssoFacTory
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          color: "black",
         
         
        }}
      >
        {menuItemsArray.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              selected={isSelected(item)}
              sx={{ textAlign: "center", color: "black" }}
            >
              <ListItemText
                primary={item}
                onClick={() => navigate(item)}
                primaryTypographyProps={{
                  fontSize: "40px",
                  textTransform: "capitalize",
                  color: "black",
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
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
       
        >
          <Toolbar
            sx={{ display: "flex", justifyContent: "end", width: "100%", color: "black",   background: "linear-gradient(180deg, #BE0000 0%, rgba(220, 80, 2, 0.46) 61.98%, rgba(155, 37, 37, 0.00) 100%)"}}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              fontFamily='"Wallpoet", cursive'
              color="#5E0202"
              textAlign= "center"
              fontSize= "32px"
              fontStyle= "normal"
              fontWeight= "400"
              lineHeight= "normal"
              component="div"
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
            {/* <Box component="nav"> */}
          <Drawer
            anchor="left"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
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
        {/* </Box> */}
            {/* <List sx={{ display: { xs: "none", sm: "flex" } }}> */}
              {/* {menuItemsArray.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton
                    selected={isSelected(item)}
                    onClick={() => navigate(item)}
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      "&.Mui-selected": {
                        color: item === "inscription" ? "white" : "#daca3bff",
                        backgroundColor:
                          item === "inscription" ? "#daca3bff" : "transparent",
                        borderRadius: item === "inscription" ? "10px" : "0",
                        boxShadow:
                          item === "inscription"
                            ? " 0px 4px 4px #2e4f44 "
                            : "transparent",
                      },
                    }}
                  >
                    {item}
                  </ListItemButton>
                </ListItem>
              ))} */}
            {/* </List> */}
          </Toolbar>
        </AppBar>
        
      </Box>
    </S.Container>
  );
}