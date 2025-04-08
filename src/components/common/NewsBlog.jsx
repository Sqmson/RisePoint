import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grow,
  Chip,
  Stack,
} from '@mui/material';

const NewsBlog = ({ posts }) => {
  return (
    <Grid container spacing={3}>
      {posts.map((post, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Grow in timeout={500 * (index + 1)}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {post.categories.map((category, idx) => (
                    <Chip
                      key={idx}
                      label={category}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Stack>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.excerpt}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(post.date).toLocaleDateString()}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsBlog; 