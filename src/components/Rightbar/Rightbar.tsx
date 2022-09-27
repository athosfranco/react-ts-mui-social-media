import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Box>
          <Typography variant="h6" fontWeight={300}>
            Amigos Online
          </Typography>
          <AvatarGroup sx={{ marginTop: "1rem", margin: "auto" }} max={5}>
            <Avatar
              alt="Remy Sharp"
              src="https://faces-img.xcdn.link/image-lorem-face-3430.jpg"
            />

            <Avatar
              alt="Cindy Baker"
              src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://s3.amazonaws.com/arc-authors/washpost/e00ac523-3c81-4eac-a48e-2fe1983b0ac1.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://thumbs.dreamstime.com/b/lifestyle-happy-young-adult-asian-woman-smiling-teeth-smile-outdoors-walking-city-street-sunset-time-sensual-smile-106209277.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://thumbs.dreamstime.com/b/lifestyle-happy-young-adult-asian-woman-smiling-teeth-smile-outdoors-walking-city-street-sunset-time-sensual-smile-106209277.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://thumbs.dreamstime.com/b/lifestyle-happy-young-adult-asian-woman-smiling-teeth-smile-outdoors-walking-city-street-sunset-time-sensual-smile-106209277.jpg"
            />
          </AvatarGroup>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "1.5rem",
          }}
        >
          {" "}
          <Typography variant="h6" fontWeight={300} mb={2}>
            Últimas Publicações
          </Typography>
          <ImageList
            sx={{ width: 300, height: 200, overflow: "hidden" }}
            cols={3}
            rowHeight={100}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Typography variant="h6" fontWeight={300} mb={2} mt={2}>
          Últimas Conversas
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },

  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },

  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },

  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

export default Rightbar;
