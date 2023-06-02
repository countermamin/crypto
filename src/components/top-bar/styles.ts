import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode);
    return (
        {
            root: {
                background: `${colors.primary.DEFAULT} !important`,
                borderBottom: `1px solid ${colors.borderColor}`,
                boxShadow: 'none !important'
            },
            toolbar: {
              justifyContent: 'space-between',

            },
            searchIcon: {
                '&:hover': {
                    'backgroundColor': 'transparent'
                }
            },
            themeIcon: {
                marginRight: '45px',
            },
            searchBlock: {
                display: 'flex',
                borderRadius: '8px',
                margin: '15px 0 15px 28px',
                backgroundColor: `${colors.primary[600]}`,
            },
            searchInput: {
                padding: '4px 2px',
            },
            iconBlock: {
                paddingRight: '35px',
                paddingTop: '14px',
                borderRight: `1px solid ${colors.borderColor}`
            },
            menuIcon: {
                marginRight: '10px',
                cursor: 'pointer',

            }
        }
    )
})
