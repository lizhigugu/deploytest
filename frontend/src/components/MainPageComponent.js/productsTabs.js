// react import
import { useState, useEffect } from "react";
import { useWebsite } from "../../containers/hooks/WebsiteContext";
import useBackend from "../../containers/hooks/useBackend"

// mui import
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "@mui/material/Grid";

// component import
import ProductCard from "./ProductCard";

// test data import 
import Products from "../../test datas/Products";

function ProductsTabs() {
  const { categories, products } = useWebsite();
  const { GetCategories, GetProductsByCategory } = useBackend();
  
  const [value, setValue] = useState('all');
  const [renderProducts, setRenderProducts] = useState([]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  //get existing categories on each re-render.
  useEffect(()=>{
    async function fetchData(){
      await GetCategories();
      //await GetProductsByCategory(categories[0]);
    };
    fetchData();
    //if(categories[0]) setValue(categories[0]); 使用login
    setRenderProducts(products);
  }, [])

  //
  useEffect(()=>{
    async function fetchData(){
      await GetProductsByCategory(value);
    }
    fetchData();
    setRenderProducts(products);
  },[value])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth">
            <Tab label='all' value='all'/>
            {categories.map((label,index)=>(<Tab label={label} value={label} key={index}/>))}
          </TabList>
        </Box>
  {/*the "all" tab*/}
        <TabPanel value='all' key='all'>
          <Grid container key='all'>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr' },
                    gap: 2,
                  }}>
                </Box>
            </Grid>
            {products.length?
              (<Grid container key="1">
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr' },
                    gap: 2,
                  }}>
                    {products.map((value,index)=>(
                      <Grid item>
                        <ProductCard item={value} key={index} />
                      </Grid>))}
                </Box>
              </Grid>):<p>No product in this category : /</p>}
        </TabPanel>
  {/*end of the "all" tab*/}
        {categories.map((label, index)=>(
          <TabPanel value={label} key={index}>
            <Grid container key={index}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr' },
                    gap: 2,
                  }}>
                </Box>
            </Grid>
            {products.length?
              (<Grid container key="1">
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr 1fr 1fr' },
                    gap: 2,
                  }}>
                    {products.map((value,index)=>(
                      <Grid item>
                        <ProductCard item={value} key={index} />
                      </Grid>))}
                </Box>
              </Grid>):<p>No product in this category : /</p>}
        </TabPanel>))}
      </TabContext>
    </Box>
  );
}

export default ProductsTabs;
