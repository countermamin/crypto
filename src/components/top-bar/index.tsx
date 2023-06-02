import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {ColorModeContext} from "../../theme";
import {DarkMode, LightMode, NotificationsNone, Search} from "@mui/icons-material";
import { useStyles } from './styles';


const TopBarComponent = () => {
    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid>Welcome, Orzu</Grid>
            <Box display='flex'>
                <Grid className={classes.iconBlock} >
                    <IconButton onClick={colorMode.toggleColorMode} className={classes.themeIcon}>
                        {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNone/>
                    </IconButton>
                </Grid>
                <Grid className={classes.searchBlock}>
                    <IconButton className={classes.searchIcon}>
                        <Search/>
                    </IconButton>
                    <InputBase className={classes.searchInput} placeholder='Поиск' />
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;
