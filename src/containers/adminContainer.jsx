import React, {useState, useContext, useEffect,} from 'react';
import {Tabs, Tab, Box, Stack} from '@mui/material';
import {Context} from '../Context/Context'
import styles from '../styles/AdminService.module.scss'
import AdminTab from "../Components/Admin/AdminTab";

const tabCards = [
    {label: "Clothes", data: "",},
    {label: "Toys", data: "",},
    {label: "Accessories", data: "",},
    {label: "Carrying bags", data: "",},
    {label: "dog bed", data: "",},
]

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Stack
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </Stack>
    );
}

function BasicTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const {getClothes} = useContext(Context);
    const [data, setData] = useState([]);
    useEffect(() => {
        getClothes().then((res) => setData(res)).catch(e => console.log(e))
    }, []);


    const {getToys} = useContext(Context)
    const [toys, setToys] = useState([])
    useEffect(() => {
        getToys().then((res) => setToys(res)).catch(e => console.log(e))
    }, []);
    return (
        <div className={styles.admin__service}>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {tabCards.map((item, index) => (
                            <Tab key={item.label} label={item.label}/>
                        ))}
                    </Tabs>
                </Box>
                {tabCards.map((item, index) => (
                    <TabPanel key={index} value={value} index={index}>
                        <AdminTab title={item.label}/>
                    </TabPanel>
                ))}
            </Box>
        </div>
    );
}

export default BasicTabs;
