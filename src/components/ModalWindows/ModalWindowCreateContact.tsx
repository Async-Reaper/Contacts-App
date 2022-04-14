import { Box, Modal } from '@mui/material';
import React from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { closeWindow } from '../../store/reducers/modalReducer';
import FormCreateContact from '../Forms/FormCreateContact'

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

const ModalWindowCreateContact = () => {
    const { createWindowStatus } = useTypedSelector(state => state.modal);
    const dispatch = useTypedDispatch();
    return (
        <div>
            <Modal
                open={createWindowStatus}
                onClose={() => dispatch(closeWindow())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormCreateContact />
                </Box>
            </Modal>
        </div>
    )

}

export default ModalWindowCreateContact