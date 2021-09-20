import React, {FunctionComponent} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
                textDecoration: "none",

            },
            link  : {
               textDecoration: "none" ,
                padding : '0 10px',
                color: "white"
            },
            title: {
                flexGrow: 1,
            },
        }),
);

interface HeaderProps {
    title : string;
    navTitle:string;
}



const Header:FunctionComponent<HeaderProps> = ({
    title,
    navTitle,
                                      }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    <Button    color="inherit" className={classes.link}  >{navTitle}</Button>
                    <Button color="inherit" className={classes.link} >Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;