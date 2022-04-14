import { Box, Modal } from '@mui/material';
import React, { FC } from 'react';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { closeWindow } from '../../store/reducers/modalReducer';
import FormEditContact from '../Forms/FormEditContact';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};    

const ModalWindowEdit: FC = () => {
    const {editWindowStatus} = useTypedSelector(state => state.modal);
    const dispatch = useTypedDispatch();

    return (
            <Modal
                open={editWindowStatus}
                onClose={() => dispatch(closeWindow())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormEditContact />
                </Box>
            </Modal>
    )
}

export default ModalWindowEdit
