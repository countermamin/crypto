import {makeStyles} from "@mui/styles";
import {tokens} from "../../theme";
import {Theme} from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            navBlock: {
                width: '100%',
                borderBottom: `1px solid ${colors.borderColor}`,
            },
            navList: {
                marginBottom: '55px',
            },
            brand: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '30px 15px',
                cursor: 'pointer'
            },
            navItem: {
                '&:hover': {
                    backgroundColor: '#1900D5 !important',
                    color: '#fff',
                    borderRadius: '4px',
                    '& .MuiSvgIcon-root': {
                        color: `${colors.white.DEFAULT} !important`,
                    }
                }
            },
            brandTitle: {
                color: `${theme.palette.mode === 'dark' ? colors.white.DEFAULT: colors.black.DEFAULT}`

            },
            active: {
                backgroundColor: '#1900D5 !important',
                color: '#fff !important',
                borderRadius: '4px !important',
                '& .MuiSvgIcon-root': {
                    color: `${colors.white.DEFAULT} !important`,
                }
            }
        }
    )
})
