import React from 'react';
import {Stack, TextField} from "@mui/material";

const AdminEditItem = ({item, handleChangeSelectedItem}) => {
    return (
        <Stack>
            <TextField name="name" onChange={handleChangeSelectedItem} value={item.name} placeholder="name"/>
        </Stack>
    );
};

export default AdminEditItem;
