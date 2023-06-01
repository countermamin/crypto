import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {ColorModeContext, tokens} from "../../theme";
import {DarkMode, LightMode, NotificationsNone, Search} from "@mui/icons-material";
import { useStyles } from './styles';


const TopBarComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode: any = useContext(ColorModeContext);
    const classes = useStyles();

    return (
        <Box display='flex' justifyContent='space-between' px='32px' py='24px'>
            <Grid>Welcome Orzu</Grid>
            <Box display='flex'>
                <Grid sx={{pr: '37px', borderRight: `1px solid ${colors.borderColor}`}} >
                    <IconButton onClick={colorMode.toggleColorMode} sx={{mr: '45px'}}>
                        {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNone/>
                    </IconButton>
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        backgroundColor: `${colors.primary[600]}`,
                        borderRadius: '8px',
                        ml: '28px',
                    }}
                >
                    <IconButton className={classes.root}>
                        <Search/>
                    </IconButton>
                    <InputBase sx={{px: '18px', py: '12px'}} placeholder='Поиск' />
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;
