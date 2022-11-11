import React from "react";
import { theme } from "../../styles/theme";
import { IconButton } from "theme-ui";

export default function Arrow() {
  return (
    <IconButton sx={{padding: "0px", height: "0px"}}>
      <svg
        width="18"
        height="15"
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.8995 14.0716L16.9706 7.00049M16.9706 7.00049L14.6135 7.00049L0 7.00049M16.9706 7.00049L10.4887 0.518674"
          stroke={theme.buttons.primary.color}
        />
      </svg>
    </IconButton>
  );
}
