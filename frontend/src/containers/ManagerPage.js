//react import 
import {useState} from "react";

//mui import
import { Typography, Box, Chip, Divider, Stack } from '@mui/material';

//component import 
import ModifyProduct from '../components/ManagerComponent/ModifyProduct';
import ModifyBills from "../components/ManagerComponent/ModifyBills";


//router import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//functional component
const ManagerPage = () => {
    //set state
    const [open, setOpen] = useState([false, false, false, false]);
    const [atWhich, setAtWhich] = useState(0);

    //function define
    const handleClick = (which) => {
        let newopen = [...open]
        newopen[atWhich] = false;
        newopen[which] = true;
        setOpen(newopen);
        setAtWhich(which);
    }

    //return
    return(
        <Box sx={{
            width: "100%",
            display: "grid",
            gap: 2
            }}>
            <Typography variant="h5" component="div">
                管理者介面
            </Typography>
            <Divider />
            <Stack direction="row" spacing={1}>
                <Chip label="商品管理" variant="outlined" onClick={()=>{handleClick(0)}} />
                <Chip label="訂單管理" variant="outlined" onClick={()=>{handleClick(1)}} />
                <Chip label="買家管理" variant="outlined" onClick={()=>{handleClick(2)}} />
            </Stack>
            {open[0]? <ModifyProduct />:<></>}
            {open[1]? <ModifyBills />:<></>}
            {open[2]? <div>Not Yet</div>:<></>}
        </Box>
    )
}

//export
export default ManagerPage;

