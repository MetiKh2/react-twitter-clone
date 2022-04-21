import { createMuiTheme } from "@material-ui/core";
import tinyColor from "tinycolor2";

const colorPrimary='#5eapdd';
const theme=createMuiTheme({
    
    overrides:{
        MuiTypography:{
            root:{
                fontFamily:'shabnam !important',
            }
        },
        MuiButton:{
            label:{
                fontFamily:'shabnam !important'
            }
        }
    },
    pallete:{
        primary:{
         main:colorPrimary,
         light:tinyColor(colorPrimary).lighten().toHexString()
        }
    },
 
});

export default theme;