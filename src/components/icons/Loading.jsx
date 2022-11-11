import React from "react";
import { IconButton, Flex } from "theme-ui";
import { Spinner } from "theme-ui";

export default function Loading() {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "359px",
        height: "61px",
        bg: "rgba(14, 105, 102, 0.75)",
      }}
    >
      <IconButton>
        <Spinner />
      </IconButton>
    </Flex>
  );
}
