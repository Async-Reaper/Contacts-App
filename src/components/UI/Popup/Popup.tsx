import { Alert, Collapse, IconButton } from '@mui/material';
import React, { FC } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { setStatusPopup } from '../../../store/reducers/popunReducer';

const Popup: FC = ({children}) => {

    const {statusPopup} = useTypedSelector(state => state.popup)
    const dispatch = useTypedDispatch()

    return (
        <Collapse in={statusPopup}>
        <Alert
            action={
                <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        dispatch(setStatusPopup(false));
                    }}
                >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
                sx={{ mb: 2 }}
            >
            {children}
        </Alert>
        </Collapse>
    )
}

export default Popup