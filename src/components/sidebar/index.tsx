import React, {useEffect, useState} from 'react';
import {useStyles} from "./styles";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material';
import {
    LogoutOutlined,
    CloseOutlined
} from '@mui/icons-material';
import {useLocation, useNavigate} from "react-router-dom";
import FlexBetween from "../flex-between";
import {navMenu} from "../../common/moks/navigate";
import {tokens} from "../../theme";
import Logo from '../../assets/images/sidebar/logo.svg';

const SidebarComponent = (props: any) => {
    const [active, setActive] = useState('');
    const {isNoneMobile, drawerWidth, isOpen, setIsOpen} = props;
    const classes = useStyles();
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

    const renderNavMenu = navMenu.map((el): JSX.Element => {
        return (
            <ListItem key={el.id}>
                <ListItemButton onClick={() => navigate(`${el.path}`)} className={classes.navItem}>
                    <ListItemIcon>
                        {el.icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant='body1'>{el.name}</Typography>
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        )
    });

    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        }
                    }}
                >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    <img src={Logo} alt="Logo"/>
                                    <Typography
                                        variant='h1'
                                        className={classes.brandTitle}
                                    >
                                        Demo
                                    </Typography>
                                </Box>

                                <IconButton sx={{mr: '8px'}} onClick={() => setIsOpen(!isOpen)}>
                                    <CloseOutlined/>
                                </IconButton>

                            </FlexBetween>
                        </Box>
                        <List className={classes.navList}>
                            {renderNavMenu}
                        </List>
                    </Box>
                    <Box width='100%'>
                        <List>
                            <ListItem>
                                <ListItemButton onClick={() => navigate('/login')} className={classes.navItem}>
                                    <ListItemIcon>
                                        <LogoutOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1'>Выйти</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;
