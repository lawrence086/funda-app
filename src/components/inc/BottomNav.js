import React from "react";
// import { Link } from "react-router-dom"
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import AddIcon from "@mui/icons-material/Add";
// import Home from '../pages/Home';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    position: "fixed",
    bottom: 0,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      className={classes.root}
      // showlabel
      value={value}
      onChange={(event, newValue) => handleChange(event, newValue)}
    >
      <Link to="/home">
        <BottomNavigationAction label="Today" icon={<RestoreIcon />} />
      </Link>
      <Link to="/followers">
        <BottomNavigationAction label="Followers" icon={<FavoriteIcon />} />
      </Link>
      <Link to="/addContent">
        <BottomNavigationAction label="Content" icon={<AddIcon />} />
      </Link>
      <Link to="/message">
        <BottomNavigationAction label="Chats" icon={<ChatIcon />} />
      </Link>
    </BottomNavigation>
  );
};

export default BottomNav;
