import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 900,
        fontSize: 40
    },

});

function List (props) {

    const classes = useStyles();

    return (
        props.haut.map((haku) =>
            <div className={classes.root}>
                <li>{haku.teksti}</li>
            </div>)
    );

}
export default List;

