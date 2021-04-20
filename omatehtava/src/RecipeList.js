import React from 'react';
import { Card, Typography, Grid, CardContent, makeStyles, CardActions } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 300,
        height: 400,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    rootG: {
        flexGrow: 1,
        
      },
      paper: {
        height: 140,
        width: 100,
      },
      text: {
        height: 60
      },
});

function RecipeList(props) {


    const classes = useStyles();

    if (props.recipes.length === 0) {
        return (<p>Ei sisältöä</p>);
    }

    const imgStyle = {
        width: 150,
        height: 150,
    };

    return (
        <Grid container className={classes.rootG} spacing={10}>
            
            {
                props.recipes.map(recipe => {
                    var imageUrl = recipe.thumbnail.toString();
                    return (
                        <div key={recipe.id}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.text} variant="h5" component="h2">
                                        {recipe.title}
                                    </Typography>
                                    <img style={imgStyle} src={imageUrl} alt='Ruokakuva' />
                                </CardContent>
                                <CardActions>
                                <a href={recipe.href}>Avaa resepti</a>
                                </CardActions>
                            </Card>
                        </div>
                    );
                })
            }
        </Grid>
    );
}

export default RecipeList;