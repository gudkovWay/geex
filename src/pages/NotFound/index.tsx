import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const NotFound = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}
  >
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Typography variant="h3">
            404
          </Typography>
          <Typography variant="h6">
            dude, what are you looking for? wtfk maaaaaaaaan
          </Typography>
          <Button
            variant="contained"
            to="/"
            component={RouterLink}
          >
            {`На главную ->`}
          </Button>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default NotFound
