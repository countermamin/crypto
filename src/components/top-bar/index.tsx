import React, {useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {ColorModeContext} from "../../theme";
import {DarkMode, LightMode, NotificationsNone, Search, MenuOutlined} from "@mui/icons-material";
import { useStyles } from './styles';
import FlexBetween from "../flex-between";
import {ITopBarProps} from "../../common/types/top-bar";


const TopBarComponent: React.FC<ITopBarProps> = (props: ITopBarProps): JSX.Element => {
    const theme = useTheme();
    const colorMode: any = useContext(ColorModeContext);
    const classes = useStyles();
    const {isOpen, setIsOpen} = props;
    const firstName = sessionStorage.getItem('name');

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    {isOpen
                        ? <></>
                        : <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>}
                    <Typography variant='h3'>Welcome, {firstName}</Typography>
                </FlexBetween>
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
            </Toolbar>
        </AppBar>
    );
};

export default TopBarComponent;
