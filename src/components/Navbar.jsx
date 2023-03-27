import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Mail, MicExternalOn, Notifications } from "@mui/icons-material";
import { borderRadius, Box, palette } from "@mui/system";

const MyToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "50px",
  padding: "0 10px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  padding: "0 2px",
  display: "flex",
  gap: "20px",
  alignItems: "center",
}));

const Boxes = styled(Box)(({ theme }) => ({
  display: "flex",
}));
export const theme = createTheme();
theme.typography.h6 = {
  fontSize: "15px",
  padding: "1px",
  color: "myColor",
};
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <MyToolBar>
        <Boxes>
          <MicExternalOn
            sx={{ display: { xs: "block", sm: "block" }, width: "55px" }}
          />
          <Typography
            variant="h6"
            color="white"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            COVERAOKE
          </Typography>
        </Boxes>
        <SearchBar>
          {" "}
          <InputBase placeholder="Search..."></InputBase>{" "}
        </SearchBar>
        <Icons>
          <Badge badgeContent={5} color="error">
            <Mail></Mail>
          </Badge>
          <Badge badgeContent={"99+"} color="error">
            <Notifications></Notifications>
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://www.vecteezy.com/vector-art/2002403-man-with-beard-avatar-character-isolated-icon"
            onClick={(e) => setOpen(true)}
          ></Avatar>
        </Icons>
      </MyToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
