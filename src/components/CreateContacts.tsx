import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React, { FC } from 'react'
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { openCreateModal } from '../store/reducers/modalReducer';

const CreateContacts: FC = () => {
    const dispatch = useTypedDispatch()

    return (
        <>
            <Button variant="outlined" onClick={() => dispatch(openCreateModal())}> 
                <AddIcon />
                <span>contact</span>
            </Button>
        </>
    )
}

export default CreateContacts