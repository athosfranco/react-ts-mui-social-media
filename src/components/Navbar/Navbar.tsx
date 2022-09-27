import styled from "@emotion/styled";
import { Avatar, Badge, InputBase, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import AppBar from "@mui/material/AppBar";
import SpaIcon from "@mui/icons-material/Spa";
import { Stack } from "@mui/system";

import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import AccountMenu from "../AccountMenu/AccountMenu";

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Search = styled.div`
  padding: 4px;
  background-color: white;
  border-radius: 30px;
  width: 30%;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h5">
          <SpaIcon />
        </Typography>
        <Search>
          <SearchIcon sx={{ color: "#A2A2A2" }} />
          <InputBase placeholder="Pesquisar..." sx={{ width: "100%" }} />
        </Search>
        <Stack spacing={3} direction="row" alignItems="center">
          <Badge badgeContent={2} color="error">
            <MessageIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            onClick={handleClick}
            src="https://st.depositphotos.com/1715570/3200/i/450/depositphotos_32004151-stock-photo-cheerful-young-african-woman-smiling.jpg"
          ></Avatar>
        </Stack>
      </StyledToolbar>
      <AccountMenu handleClose={handleClose} open={open} anchorEl={anchorEl} />
    </AppBar>
  );
};

export default Navbar;
