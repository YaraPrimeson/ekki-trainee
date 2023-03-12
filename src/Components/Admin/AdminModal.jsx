import React from 'react';
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";

const AdminModal = ({openModal, toggleModal, children}) => {
    return (
        <Modal
            open={openModal}
            onClose={toggleModal}
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                {children}
            </Box>
        </Modal>
    );
};

export default AdminModal;
