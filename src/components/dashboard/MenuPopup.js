import { Flex, Divider, Text } from "@chakra-ui/react";

// Add a custom Link
export function MenuPopup() {
  return (
    <Flex sx={style.container}>
      <Text sx={style.text}>Edit Profile</Text>
      <Divider />
      <Text sx={style.text}>Sign Out</Text>
    </Flex>
  );
}

const style = {
  container: {
    zIndex: 200,
    position: "fixed",
    top: "96px",
    right: "60px",
    width: "200px",
    height: "96px",
    borderRadius: "8px",
    boxShadow: "0px 1px 2px 3px rgba(0,0,0,0.5)",
    p: "8px",
    backgroundColor: "white",
  },
  text: {
    fontFamily: "Poppins",
    fontWeight: "medium",
    fontSize: "16px",
  },
};
