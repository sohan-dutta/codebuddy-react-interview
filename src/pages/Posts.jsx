import { useEffect, useState } from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Avatar } from "@mui/material";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://codebuddy.review/posts");
        const result = await response.json();
        setPosts(result.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Posts
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" height="140" image={post.image} alt="Post" />
              <CardContent>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item>
                    <Avatar src={post.avatar} />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      {post.firstName} {post.lastName}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  {post.writeup}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Posts;
