/** @jsxRuntime classic */
/** @jsx jsx */

import { event } from "analytics/ga";
import { Flex, Grid, Image, jsx, Text } from "theme-ui";

const SocialElement = ({ item }) => (
  <Flex
    sx={style.socialView}
    onClick={() => {
      event("SOCIAL_HANDLE_CLICK", {
        social_name: item.social_ulink + item.u_name,
      });
      localStorage.setItem(
        "clickLatestSocial",
        item.social_ulink + item.u_name
      );
      window.open(item.social_ulink + item.u_name, "_blank"); //to open new page
    }}
  >
    <Image
      src={item.social_logo}
      alt="Logo for Social Network Websites"
      sx={style.social}
    />
    <Text sx={style.socialText}>
      {item && item.social_name && item.social_name.length > 9
        ? item.social_name.slice(0, 10) + ".."
        : item.social_name}
    </Text>
  </Flex>
);

// Add a custom Link
export function SocialHandles({ data }) {
  return (
    <Flex sx={style.headingTextView}>
      {/* <Text sx={style.heading}>Social Handles</Text> */}
      <Grid gap={2} columns={[3, 6, 6, 6, 6, 6]} sx={style.grid}>
        {data.map((item, index) => {
          return <SocialElement item={item} key={index} />;
        })}
      </Grid>
    </Flex>
  );
}

const style = {
  grid: {},
  headingTextView: {
    width: "100%",
    px: ["0%", "0%", "5%", "5%", "5%", "5%"],
    my: "4px",
    flexDirection: "column",
  },
  heading: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "18px",
    py: "8px",
  },
  socialView: {
    ml: ["50px", "50px", "50px", "10px", "10px", "10px"],
    textAlign: "center",
    cursor: "pointer",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  social: {
    width: "24px",
    height: "24px",
  },
  socialText: {
    fontFamily: "Poppins",
    fontSize: "8px",
    color: "#646464",
    textAlign: "center",
  },
  addbutton: {
    cursor: "pointer",
    backgroundColor: "transparent",
  },
  addContainer: {
    textAlign: "center",
  },
  addbuttonText: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "12px",
    color: "#FFFFFF",
  },
};
