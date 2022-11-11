import React from "react";
import { Box, Button } from "theme-ui";
import { PrimaryText } from "../Text";

export default function Tertiary() {
  return (
    <Box my={2}>
      <Button variant="tertiary">
        <PrimaryText>See Details</PrimaryText>
      </Button>
    </Box>
  );
}
