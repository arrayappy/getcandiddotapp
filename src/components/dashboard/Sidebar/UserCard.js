/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Image, Text, Box } from "theme-ui";
import firebase from "firebase";
import { auth, googleAuthProvider } from "../../../lib/firebase";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

// Add a custom Link
export function UserCard({ data }) {
  const router = useRouter();

  React.useEffect(() => {
    console.log("user data", data);
  }, [data]);

  const addLinks = () => {
    console.log("add links");
  };

  return (
    <Container sx={style.container}>
      <Container sx={style.coverPhotoView}>
        <Image
          sx={style.coverPhoto}
          alt={'cover img'}
          src={
            data[0].u_cover_image && data[0].u_cover_image != ""
              ? data[0].u_cover_image
              : "/user/cover.png"
          }
        />
      </Container>
      <Container sx={style.userPhotoView}>
        <Image
          sx={style.userImage}
          alt={'profile img'}
          src={
            data[0].u_profile_image && data[0].u_profile_image != ""
              ? data[0].u_profile_image
              : "/user/profile.png"
          }
        />
      </Container>
      <Container sx={style.userNameView}>
        <Container>
          <Text sx={style.userName}>{data[0].u_name}</Text>
        </Container>
      </Container>
      <Container sx={style.aboutMeView}>
        <Container>
          <Text sx={style.aboutMe}>{data[0].u_about}</Text>
        </Container>
      </Container>
    </Container>
  );
}

const style = {
  container: {
    width: "100%",
    borderTopRadius: "16px",
  },
  coverPhotoView: {
    borderTopRadius: "16px",
    backgroundColor: "white",
    width: ["0px","448px","448px","448px","448px","448px"],
    height: ["50px", "248px","248px","248px","248px","248px"],
    justifyContent: "flex-start",
  },
  userPhotoView: {
    mt: "-48px",
    width: "148px",
    height: "148px",
    backgroundColor: "transparent",
    borderRadius: "148px",
  },
  userNameView: {
    mt: "24px",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    px: "auto",
  },
  aboutMeView: {
    width: "80%",
    mt: "8px",
  },
  aboutMe: {
    textAlign: "center",
    color: "#868686",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "400",
  },
  coverPhoto: {
    display:['none', 'inline', 'inline', 'inline', 'inline', 'inline'],
    // mt: ["-150px" ,"0px","0px","0px","0px","0px"],
    textAlign: "center",
    borderRadius: "16px",
  },
  userImage: {
    textAlign: "center",
    borderRadius: "148px",
  },
  userName: {
    mt: '-20px',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24px",
    fontFamily: "Poppins",
    color: "#323232",
  },
};
