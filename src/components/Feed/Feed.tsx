import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { createClient } from "pexels";
import { useState, useEffect } from "react";

const client = createClient(
  "563492ad6f91700001000001dee513c8167c4b0384777fc2cbd2bc83"
);

const defaultQueries = [
  "travel destinations",
  "vacation",
  "summer",
  "landscapes",
  "europe",
  "parties",
  "people having fun",
];

const Feed = () => {
  interface Image {
    id: number;
    width: number;
    height: number;
    avg_color: string;
    liked: boolean;
    photographer: string;
    photographer_id: number;
    photographer_url: string;
    src: object;
  }

  const [posts, setPosts] = useState<Image[] | undefined>();

  const [query, setQuery] = useState(
    defaultQueries[Math.floor(Math.random() * defaultQueries.length)]
  );

  useEffect(() => {
    client.photos
      .search({ query, per_page: 20, locale: "pt-BR" })
      .then((res) => setPosts(res.photos));
  }, [query]);

  return (
    <Box mx={1} flex={4} p={2}>
      {posts ? (
        posts!.map((post) => {
          return (
            <Card key={post.id} sx={{ minWidth: "100%", marginBottom: "1rem" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: post.avg_color }}>
                    {post.photographer
                      .split(" ")
                      .map((n) => n[0])
                      .join(".")}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={post.photographer}
                subheader={`${new Date().toLocaleDateString("pt-BR")}`}
              />

              <CardMedia
                component="img"
                height="450"
                image={post.src!.landscape}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post!.alt}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          );
        })
      ) : (
        <span>Carregando...</span>
      )}
    </Box>
  );
};

export default Feed;
