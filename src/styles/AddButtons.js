const addButtonsStyles = {
  container: {
    px: ["4%", "4%", "0%", "0%", "0%", "0%"],
    // mb: "16px",
    justifyContent: [
      "justify-evenly",
      "justify-evenly",
      "flex-end",
      "flex-end",
      "flex-end",
      "flex-end",
    ],
    alignItems: "flex-start",
    width: ["100%", "100%", null],
  },
  flex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addbutton: {
    // mt: "16px",
    borderRadius: "16px",
    borderWidth: "2px",
    borderColor: "#FFF",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "16px",
    // ml: "16px",
    color: "#D7354A",
    flexDirection: "row",
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
    py: ["2px", "2px", "4px", "8px"],
    px: ["4px", "4px", "8px", "16px"],
    mx: "4px",
    flex: [1, 1, `0 1 auto`],
  },
  addbuttonText: {
    ml: "6px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "16px",
    color: "#D7354A",
  },
  button: {
    fontSize: "16px",
    color: "#ffff",
    fontWeight: 700,
    borderRadius: "8px",
    height: ["48px", null, null, null, null, "60px", "60px"],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 32px",
    WebkitAppearance: "none",
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    mx: ["auto", 0],
    transition: "all 500ms ease",
    "&:hover": {
      backgroundColor: "secondary",
    },
  }
};

export default addButtonsStyles;
