import { Box, Stack } from "@mui/material";
import React from "react";
import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { SidebarProps } from "../../types";

const MainPage = ({ mode, setMode }: SidebarProps) => {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        justifyContent="space-between"
        mt={8}
        sx={{ mx: { xs: "0", sm: "5vw" } }}
      >
        <Sidebar mode={mode} setMode={setMode} />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default MainPage;
