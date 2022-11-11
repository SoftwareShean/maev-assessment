import React from "react";
import { Box, Button, Flex } from "theme-ui";
import Arrow from "../icons/Arrow";
import { PrimaryText } from "../Text";
import Loading from "../icons/Loading";
import Added from "../icons/Added";

export default function AddToCart(props) {
  const { disabled, addToCart, products, loading, added } = props;
  return (
    <Box my={2}>
      <Flex
        sx={{
          position: "absolute",
          margin: "0",
          zIndex: "2",
        }}
      >
        {loading ? <Loading /> : <></>}
        {added ? <Added /> : <></>}
      </Flex>
      <Button
        variant="primary"
        disabled={disabled}
        onClick={(id) => addToCart(products.id)}
        sx={{ width: "359px", height: "61px" }}
      >
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
