import React from 'react';
import './App.css';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent, CardActions, CardMedia, InputBase, Divider, Stack, Paper, BottomNavigation } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: '#191715',
      contrastText: "#0275D8",
    },
    secondary: {
      main: '#E44B23',
      contrastText: '#373A3C',
    },
  },
});

const Div = styled('div')(({ theme }) => ({
  backgroundColor: "#0275D8",
  padding: theme.spacing(1),
}));


function App() {
  return (
    <Box sx={{ my: 8, bgcolor: 'E5E5E5' }}>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Button color="secondary">Navbar</Button>
              <Button color="secondary">Home</Button>
              <Button color="secondary">Early Accrss</Button>
              <Button color="secondary">Explore</Button>
              <Button color="secondary">Patch notes</Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <Typography variant="h2" color="secondary" align='center'>
          Patch Notes
        </Typography>
        <Divider />
        <Stack direction="row" spacing={20} sx={{ mx: 4, my: 2 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="monster image"
              height="140"
              src="https%3A%2F%2Fmobile.twitter.com%2Fdeathtrash"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Patch 1.2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For this patch we added more weapons, enemies, allies and places to visit. For more info click button below...
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="monster image"
              height="140"
              image="/images/attention.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Patch 1.1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For this patch we added more weapons, enemies, allies and places to visit. For more info click button below...
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="monster image"
              height="140"
              image="/images/attention.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Patch 1.0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For this patch we added more weapons, enemies, allies and places to visit. For more info click button below...
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">More</Button>
            </CardActions>
          </Card>

        </Stack>
        <Typography variant="h2" color="secondary" align='center'>
          .
        </Typography>
        <Stack direction="row" spacing={20} sx={{ mx: 4, my: 2 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="monster image"
              height="140"
              image="/images/attention.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Patch 0.03
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For this patch we added more weapons, enemies, allies and places to visit. For more info click button below...
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="monster image"
              height="140"
              image="/images/attention.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Patch 0.02
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For this patch we added more weapons, enemies, allies and places to visit. For more info click button below...
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="monster image"
              height="140"
              image="/images/attention.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Patch 0.01
              </Typography>
              <Typography variant="body2" color="text.secondary">
                For this patch we added more weapons, enemies, allies and places to visit. For more info click button below...
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small" color="primary">More</Button>
            </CardActions>
          </Card>
        </Stack>
      </ThemeProvider>
      <Div>
        <BottomNavigation>
          <Toolbar>
            <Stack direction="row" spacing={20} sx={{ mx: 4, my: 2 }}>
              <Typography component="div" sx={{ flexGrow: 1 }}>
                <Button color="secondary">Navbar</Button>
                <Button color="secondary">Home</Button>
                <Button color="secondary">Contact us</Button>
              </Typography>
            </Stack>
          </Toolbar>
        </BottomNavigation>
      </Div>
    </Box >
  );
}

export default App;