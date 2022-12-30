//react import

//mui import
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

//test data import 
import User from "../test datas/User";

//functional component
const PersonalPage = () => {
    //set state
    
    //function define

    //return
    return(
        <Box>
            <Typography gutterBottom variant="h4" component="div" color="text.primary">
                個人基本資料
            </Typography>
            <Typography variant="body1" color="text.secondary">
                名稱：{User.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                地址：{User.address}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                電話：{User.phoneNumber}
            </Typography>
        </Box>
    )
}

//export
export default PersonalPage;