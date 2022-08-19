import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";

const FollowersCard = ({ uri_img, f_name, l_name, no_followers }) => {
  return (
    <div className="f-card" style={{ width: "100%" }}>
      <Card style={{ width: "100%", marginBottom: "10px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="90"
            image={uri_img}
            alt="user-profile-image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {f_name + " " + l_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="text-muted display-6 fs-6 d-block">
                Followers: {no_followers}
              </span>
              <span className="pe-3 pt-2">
                <FavoriteRounded />
              </span>
              <span className="pe-3 pt-2">
                <i className="bi bi-share-fill"></i>
              </span>
              <span className="pe-3 pt-2">
                <i className="bi bi-three-dots-vertical"></i>
              </span>

              {/* <Divider/> */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default FollowersCard;
