import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Link } from 'gatsby'


import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Done from '@material-ui/icons/Done'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const IndexPage = () => {

  const classes = useStyles()
  const [category, setcategory] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch (id) {
      case "category":
        setcategory(!category);
        break;
      case "info":
        setInfo(!info);
        break;

      default:
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1>brapzy</h1>
          <h5>
          Brapzy is price list databases for all products and services in Indonesia market. 
          It's free to use, no licence need. 
          you can use it for estimating your needs and project.
          </h5>
        </Grid>
      </Grid>
      <Divider />

      <List
        component="nav"
        className={classes.root}
      >
        <ListItem id="category" button onClick={() => handleClick("category")}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Category 1" />
          {category ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!category} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/product">
              <ListItem button className={classes.nested}>
                <ListItemIcon><Done /></ListItemIcon>
                <ListItemText primary="Product 1" />
              </ListItem>
            </Link>
            <Link to="/producttest">
              <ListItem button className={classes.nested}>
                <ListItemIcon><Done /></ListItemIcon>
                <ListItemText primary="Product Test" />
              </ListItem>
            </Link>
            <Link to='/cpu'>
            <ListItem button className={classes.nested}>
              <ListItemIcon><Done /></ListItemIcon>
              <ListItemText primary="CPU" />
            </ListItem>
            </Link>
            <ListItem button className={classes.nested}>
              <ListItemIcon><Done /></ListItemIcon>
              <ListItemText primary="Product 4" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon><Done /></ListItemIcon>
              <ListItemText primary="Product 5" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => handleClick("info")}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="Info" />
          {info ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={!info} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/about">
            <ListItem button className={classes.nested}>
              <ListItemIcon><Done /></ListItemIcon>
              <ListItemText primary="About us" />
            </ListItem>
            </Link>
            <Link to="/webapp">
            <ListItem button className={classes.nested}>
              <ListItemIcon><Done /></ListItemIcon>
              <ListItemText primary="Offline Web App" />
            </ListItem>
            </Link>
          </List>
        </Collapse>
      </List>
    </Layout>
  )
}

export default IndexPage
