import React from "react";
// import { Link } from "react-router-dom"
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import TextsmsIcon from "@mui/icons-material/Textsms";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { PlayArrow } from "@mui/icons-material";
import InsertChartIcon from "@mui/icons-material/InsertChart";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#fff",
    position: "fixed",
    color: "#fff",
    bottom: 0,
    left: 0,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // display: 'flex',
  },
});

const Nav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <BottomNavigation
        className={classes.root}
        showLabels
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}
      >
        <Link to="/home">
          <BottomNavigationAction
            label="Today"
            size={30}
            icon={<RestoreIcon />}
          />
        </Link>

        <Link to="/followers">
          <BottomNavigationAction
            label="Followers"
            icon={<InsertChartIcon />}
          />
        </Link>

        <div className="center-nav">
          <Link to="/progress">
            <BottomNavigationAction
              label="Followers"
              icon={<PlayArrow className="icon-special" />}
            />
          </Link>
        </div>

        <Link to="/addContent">
          <BottomNavigationAction label="Content" icon={<TextSnippetIcon />} />
        </Link>
        <Link to="/message">
          <BottomNavigationAction label="Chats" icon={<TextsmsIcon />} />
        </Link>
      </BottomNavigation>
    </>
  );
};

export default Nav;
