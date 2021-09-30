import React, { useState } from "react";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "@material-ui/core";
import CallMadeIcon from '@material-ui/icons/CallMade';

const useStyles = makeStyles(theme => ({
    card: {
        width: 500,
        margin: 'auto',
        marginTop: theme.spacing(4),
        backgroundColor: theme.palette.primary.light
    },
    title: {
        padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px`,
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        textAlign: 'center'
    },
    icon: {
        fontSize: `1.2rem`,
        edge: 'end'
    },
    iconButton: {
        padding: `${theme.spacing(0)}px`,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
        textAlign: 'center'
    }
}));

function CommitCard (props) {
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <Typography variant='h6' className={classes.title}>
                {props.tittle}
            </Typography>
            <CardContent>
                <div className={classes.container}>
                    <div style={{ gridColumnEnd: 'span 6' }}>
                        <Typography variant='body1'>
                            Author: {props.author}
                        </Typography>
                    </div>
                    <div style={{ gridColumnEnd: 'span 6' }}>
                        <Typography variant='body2' color='primary'>
                            {props.date}
                        </Typography>
                    </div>
                </div>                
            </CardContent>
            <CardActions >
                <IconButton className={classes.iconButton} target="_blank" href={props.url} aria-label='link'>
                    <CallMadeIcon  className={classes.icon} />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default CommitCard;