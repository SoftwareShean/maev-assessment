import React from "react";
import { IconButton, Flex } from "theme-ui";
import { theme } from "../../styles/theme";

export default function Added() {
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
        <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 7.65793L7.6775 14.3159L21.0325 1" stroke="white" />
        </svg>
      </IconButton>
      <div variant="heading3" sx={{ color: "white" }}>
        Added
      </div>
    </Flex>
  );
}
