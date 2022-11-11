import React from "react";
import { Box, Button, Flex } from "theme-ui";
import Arrow from "../icons/Arrow";

export default function Primary() {
  return (
    <Box my={2}>
      <Button variant="primary">
        <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
          Add To Cart
          <Arrow />
        </Flex>
      </Button>
    </Box>
  );
}
