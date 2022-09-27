import { Box, Stack } from "@mui/material";
import React from "react";
import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Rightbar from "../../components/Rightbar/Rightbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainPage = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        direction="row"
        justifyContent="space-between"
        mt={9}
        sx={{ mx: { xs: "0", sm: "5vw" } }}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default MainPage;
