import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemAvatar,
  ListItemIcon,
} from "@material-ui/core";
import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Keyboard,
} from "@material-ui/icons";
import avatar from "../silent.jpg";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    minWidth: 100,
    minHeight: 100,
  },
  listItem: {
    color: "tan",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

//  COMPONENT RENDERS HERE

const Navbar = ({ titulo }) => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider("right", false)}
    >
      <Avatar
        className={classes.avatar}
        src={avatar}
        alt="Juan Diego Serrano"
      />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar
          position="static"
          style={{
            background: "#222",
          }}
        >
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu
                style={{
                  color: "tomato",
                }}
              />
            </IconButton>
            <Typography
              variant="h5"
              style={{
                color: "tan",
              }}
            >
              {titulo}
            </Typography>
            <MobilRightMenuSlider
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
