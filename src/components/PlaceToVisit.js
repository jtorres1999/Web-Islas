import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
   /*  AQUI ES PARA MOSTRAR LAS CARDS */
    <div className={classes.root} id="place-to-visit">
      <div class="col-12">
        <ImageCard place={places[3]} checked={checked} />
        <ImageCard place={places[2]} checked={checked} />
      </div>
      <div class="col-12">
        <ImageCard place={places[1]} checked={checked} /> 
        <ImageCard place={places[0]} checked={checked} />
      </div>
    </div>
  );
}
