"use client";

import { Box, TextField } from "@mui/material";
// STYLES
import { HistoryConteiner } from "./TheHistory.styled";
// APi
// LOCALS
import { ListHistory } from "./ListHistory/ListHistory";

const TheHistory = () => {
  return (
    <Box display={"grid"} gridTemplateRows={"200px auto"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        width={"100%"}
      >
        <TextField
          variant="filled"
          size="small"
          label="Email"
          sx={{ width: "300px" }}
        />
        <TextField
          variant="filled"
          size="small"
          label="Phone"
          sx={{ width: "300px" }}
        />
      </Box>
      <Box>
        <HistoryConteiner>
          <ListHistory />
        </HistoryConteiner>
      </Box>
    </Box>
  );
};

export { TheHistory };
