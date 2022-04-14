import React, { FC } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import { openDeleteModal, openEditWindow } from '../store/reducers/modalReducer';
import { Button, ButtonGroup } from '@mui/material';
import { IContacts } from '../models/IContact';
import { requests } from '../services/PostService';

interface ButtonContactProps {
    contact: IContacts
}

const ButtonsContact: FC<ButtonContactProps> = ({ contact }) => {
    const dispatch = useTypedDispatch()
    const [deleteContact, {}] = requests.useDeleteContactMutation()

    const handleDelete = () => {
        localStorage.setItem('contactId', `${contact.id}`)
        const id: number = JSON.parse(localStorage.getItem('contactId') || '')
        deleteContact(id)
    }

    return (
        <div>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
            >
                <Button key="one" variant="contained" onClick={() => {
                    dispatch(openEditWindow())
                    localStorage.setItem('contactId', `${contact.id}`)
                }}>
                    <EditIcon />
                    <span>Edit</span> 
                </Button>
                <Button key="two" variant="contained" onClick={handleDelete}>
                    <DeleteIcon />
                    <span>Delete</span>
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default ButtonsContact