import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, Container, Card, CardContent, CardActions, CardMedia, InputBase, Divider, Stack, Paper, BottomNavigation, Grid } from '@mui/material';
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

interface GithubRepositories {
  id: number;
  name: string;
  description: string;
}

const getData = async () => {
  return await fetch(`https://api.github.com/users/vladdy-moses/repos`)
  .then(res => res.json())
  .then((res: GithubRepositories[]) => {
      console.log(res);
      return res
  })
};


function App() {
  const [data, setData] = useState<GithubRepositories[]>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);
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
        <Grid style={{ marginTop: 100 }}
        id="cards"
        sx={{
          margin: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}>
        {data.map((item) => (
          <Grid item xs={6}>
            <Card key={item.id} sx={{
              backgroundColor: "#191715",
              color: "#E44B23",
              height: 180,
              margin: 3
            }}>
              <CardContent>
                <Typography variant="h5" component="div" textAlign="center"> {item.name} </Typography>
                <Typography variant="h6" color="#E44B23">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      </Grid>
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