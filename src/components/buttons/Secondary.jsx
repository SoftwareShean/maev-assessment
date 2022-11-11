import React from "react";
import { Box, Button, Flex } from "theme-ui";
import Arrow from "../icons/Arrow";

export default function Secondary(props) {
  const { products } = props;
  return (
    <Box my={2}>
      <Button variant="secondary">
        <Flex sx={{ alignItems: "center" }}>
          {products.title}
          <Arrow />
        </Flex>
      </Button>
    </Box>
  );
}
