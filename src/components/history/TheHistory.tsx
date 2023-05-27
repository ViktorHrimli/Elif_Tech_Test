"use client";
import { useState } from "react";

import { Box, TextField } from "@mui/material";
// STYLES
import { HistoryConteiner } from "./TheHistory.styled";
// APi
// LOCALS
import { ListHistory } from "./ListHistory/ListHistory";

const TheHistory = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
          value={email}
          onChange={(event) => setEmail(event.target.value.toLowerCase())}
        />
        <TextField
          variant="filled"
          size="small"
          label="Phone"
          sx={{ width: "300px" }}
          value={phone}
          onChange={(event) => setPhone(event.target.value.toLowerCase())}
        />
      </Box>

      <HistoryConteiner>
        <ListHistory email={email} phone={phone} />
      </HistoryConteiner>
    </Box>
  );
};

export { TheHistory };
