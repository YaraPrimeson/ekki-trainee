import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import styles from "../../styles/AdminService.module.scss";
import {Context} from "../../Context/Context";
import Cards from "../Cards";
import {Button, Stack, Typography} from "@mui/material";
import AdminModal from "./AdminModal";
import AdminEditItem from "./AdminEditItem";

const AdminTab = ({title,}) => {
    const {getProducts} = useContext(Context);
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [editItem, setEditItem] = useState(false)
    const [selectedItem, setSelectedItem] = useState({});
    const toggleModal = (item, mode) => {
        if (mode === "edit") {
            setEditItem(true);
        } else {
            setEditItem(false);
        }
        setSelectedItem(item);
        setOpenModal(!openModal);
    };
    const handleChangeSelectedItem = (e) => {
        const {value, name} = e.target;
        setSelectedItem((prevState) => ({...prevState, [name]: value}))
    }
    useLayoutEffect(() => {
        switch (title) {
            case "Clothes":
                return () => getProducts("clothes").then((res) => setData(res)).catch(e => console.log(e));
            case "Toys":
                return () => getProducts("toys").then((res) => setData(res)).catch(e => console.log(e))
            case "Accessories":
                return () => getProducts("accessories").then((res) => setData(res)).catch(e => console.log(e))
            case "Carrying bags":
                return () => getProducts("carrying").then((res) => setData(res)).catch(e => console.log(e))
            case "dog bed":
                return () => getProducts("dogbed").then((res) => setData(res)).catch(e => console.log(e))
            default:
                return;
        }
    }, []);
    return (
        <>
            <div className={styles.header}>{title}</div>
            <div className={styles.header__title}>Showing {data?.length} products</div>
            <div className={styles.container}>
                {data?.map((item) =>
                    <Stack key={item?.id}>
                        <Cards item={item}/>
                        <Stack gap={"20px"} sx={{mt: "50px"}}>
                            <Button onClick={() => toggleModal(item, "edit")} variant="contained">Edit</Button>
                            <Button onClick={() => toggleModal(item, "delete")} color={"error"}
                                    variant="outlined">delete</Button>
                        </Stack>
                    </Stack>
                )}
            </div>
            <AdminModal openModal={openModal}
                        toggleModal={toggleModal}
            >
                {editItem ?
                    <AdminEditItem handleChangeSelectedItem={handleChangeSelectedItem} item={selectedItem}/>
                    :
                    <>
                        <Typography>
                            are you sure?
                        </Typography>
                        <Button color={"error"} variant="outlined">sure,delete</Button>
                    </>
                }
            </AdminModal>
        </>
    );
};

export default AdminTab;
