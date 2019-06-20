import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Markdown from './Markdown';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://cdn2.sportngin.com/attachments/photo/3523/5538/Power_Rankings_large.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const sections = [
  'Home',
  'League Code',
  'Managers',
  'Power Rankings',
  'Weekly GOAT',
  'Weekly Bro',
  'Draft Picks',
  'Champions',

];

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];        

const archives = [
  'Week 1',
  'Week 2',
  'Week 3',
  'Week 4',
  'Week 5',
  'Week 6',
  'Week 7',
  'Week 8',
  'Week 9',
  'Week 10',
  'Week 11',
  'Week 12',
  'Week 13'
];

const social = [
  {
    name: 'GitHub',
    url: "https://github.com/lrtoenjes/dynastyffl"
  }, 
  {
    name: 'Sleeper App',
    url: "https://sleeper.app/leagues/407291191407734784"
  }];

export default function Blog(props) {

  
   const mdText = props.mdText;
   const classes = useStyles();

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbar}>            
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              GOATs and Bros Fantasy Football League
            </Typography>
          </Toolbar>
          <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            {sections.map(section => (
              <Link
                color="inherit"
                noWrap
                key={section}
                variant="body2"
                href="#"
                className={classes.toolbarLink}
              >
                {section}
              </Link>
            ))}
          </Toolbar>
          <main>
            {/* Main featured post */}
            <Paper className={classes.mainFeaturedPost}>
              {/* Increase the priority of the hero background image */}
              {
                <img
                  style={{ display: 'none' }}
                  src=""
                  alt="background"
                />
              }
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      Title of a longer featured blog post
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      Multiple lines of text that form the lede, informing new readers quickly and
                      efficiently about what&apos;s most interesting in this post&apos;s contents.
                    </Typography>
                    <Link variant="subtitle1" href="#">
                      Continue reading…
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            {/* End main featured post */}
            {/* Sub featured posts */}
            <Grid container spacing={4} className={classes.cardGrid}>
              {featuredPosts.map(post => (
                <Grid item key={post.title} xs={12} md={6}>
                  <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            {post.title}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                          </Typography>
                          <Typography variant="subtitle1" paragraph>
                            {post.description}
                          </Typography>
                          <Typography variant="subtitle1" color="primary">
                            Continue reading...
                          </Typography>
                        </CardContent>
                      </div>
                      <Hidden xsDown>
                        <CardMedia
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          title="Image title"
                        />
                      </Hidden>
                    </Card>
                  </CardActionArea>
                </Grid>
              ))}
            </Grid>
            {/* End sub featured posts */}
            <Grid container spacing={5} className={classes.mainGrid}>
              {/* Main content */}
              <Grid item xs={12} md={8}>
                
                <Divider />
                           
                  <Markdown className={classes.markdown} >
                    {mdText}
                  </Markdown>
                  
             
              </Grid>
              {/* End main content */}
              {/* Sidebar */}
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                  <Typography variant="h6" gutterBottom>
                    About
                  </Typography>
                  <Typography>
                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                  </Typography>
                </Paper>
                <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                  Power Rankings
                </Typography>
                {archives.map(archive => (
                  <Link display="block" variant="body1" href="#" key={archive}>
                    {archive}
                  </Link>
                ))}
                <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                  Social
                </Typography>
                {social.map(network => (
                  <Link display="block" variant="body1" href={network.url} key={network.name}>
                    {network.name}
                  </Link>
                ))}
              </Grid>
              {/* End sidebar */}
            </Grid>
          </main>
        </Container>
        {/* Footer */}
        <footer className={classes.footer}>
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              Footer
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Something here to give the footer a purpose!
            </Typography>
            <MadeWithLove />
          </Container>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
  
//}

//export default Blog;