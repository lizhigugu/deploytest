//react import

//mui import
import { List, ListItemText, ListItem } from "@mui/material";

//component import 
import CategoryListItem from "./CategoryListItem";

//testData import 
import Category from "../../test datas/Category";

//hooks import
import { useEffect } from 'react'
import useBackend from "../../containers/hooks/useBackend";
import { useWebsite } from "../../containers/hooks/WebsiteContext";

const CategoryList = () => {
    
    //set state
    const { categories } = useWebsite();

    //return
    return(
        <List sx={{
            display: "grid",
            gap: 1
        }}>
            {categories.map((value, index)=>(
                <CategoryListItem  item={value} key={index} ind={index} />
            ))}
        </List>
    )
}

//export 
export default CategoryList;