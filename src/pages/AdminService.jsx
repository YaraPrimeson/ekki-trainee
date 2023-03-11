import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cards from '../Components/Cards';
import {Context} from '../Context/Context'
import  { useContext,useEffect,useState} from 'react'
import styles from '../styles/AdminService.module.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {getClothes} = useContext(Context);
    const [data,setData] = useState([]);
    useEffect(()=>{
    getClothes().then((res)=> setData(res)).catch(e => console.log(e))
    }, []);

    
    const {getToys}  = useContext(Context)
    const [toys,setToys] = useState([])
    useEffect(()=>{
        getToys().then((res)=> setToys(res)).catch(e => console.log(e))
        }, []);
  return (
    <div className={styles.admin__service}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Clothes" />
                <Tab label="Toys"  />
                <Tab label="Accessories" />
                <Tab label="CARRYING BAGS"  />
                <Tab label="DOG BED"  />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <div className={styles.header}>Clothes</div>
              <div className={styles.header__title}>Showing {data.length} products</div>
              <div className={styles.container}>
                  {data.map((item) =>
                  <div key={item.id}>
                     <Cards item={item}/>
                  </div>
                  )}
               </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <div className={styles.header}>Toys</div>
            <div className={styles.header__title}>Showing {toys.length} products</div>
            <div className={styles.container}>
                {toys.map((item) =>
                           <div key={item.id}>
                <Cards item ={item}/>
                           </div>
                )}
            </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
}