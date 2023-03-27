import { Box, Card } from "@mui/material";
import { Post } from "./Post";
import React from "react";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
