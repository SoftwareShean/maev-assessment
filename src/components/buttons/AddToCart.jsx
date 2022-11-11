import React from "react";
import { Box, Button, Flex } from "theme-ui";
import Arrow from "../icons/Arrow";
import { PrimaryText } from "../Text";
import { Spinner } from "theme-ui";
import Added from "../icons/Added";

export default function AddToCart(props) {
  const { disabled, addToCart, products, loading, added } = props;
  return (
    <Box my={2}>
      <Button
        variant="primary"
        disabled={disabled}
        onClick={(id) => addToCart(products.id)}
        sx={{ width: "359px", height: "61px" }}
      >
        <Flex
          sx={{
            position: "absolute",
            left: "47%",
            zIndex: "2",
          }}
        >
          {loading ? (
            <Flex sx={{}}>
              <Spinner />
            </Flex>
          ) : (
            <></>
          )}
          {added ? <Added /> : <></>}
        </Flex>
        <Flex sx={{ flexDirection: "column", width: "100%" }}>
          <Flex
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "16px",
            }}
          >
            <PrimaryText>${products.price}</PrimaryText>
            <Flex sx={{ alignItems: "center" }}>
              <PrimaryText>Add To Cart</PrimaryText>
              <Arrow />
            </Flex>
          </Flex>
          <Flex
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PrimaryText>{products.title}</PrimaryText>
          </Flex>
        </Flex>
      </Button>
    </Box>
  );
}
