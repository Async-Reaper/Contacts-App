import { Button, TextField } from '@mui/material'
import React, { FC } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { IContacts } from '../../models/IContact'
import { requests } from '../../services/PostService'
import { contactError } from '../../store/reducers/contactsReducer'
import { inputChange } from '../../store/reducers/inputReducer'
import { closeWindow } from '../../store/reducers/modalReducer'
import Error from '../UI/ErrorText/Error'

const FormEditContact: FC = () => {
    const dispatch = useTypedDispatch()
    const [editContact, {}] = requests.useEditContactMutation()

    const handleEdit = async (newData: IContacts) => {
        if (newData.name !== '' && newData.number !== '') {
            await editContact(newData)
            dispatch(closeWindow())
        } else {
            dispatch(contactError('Inputs must be filled!'))
        }
    }

    const editNewContact: IContacts = {
        userId: JSON.parse(localStorage.getItem('userId') || ''),
        id: JSON.parse(localStorage.getItem('contactId') || ''),
        name: '',
        number: ''
    }

    return (
        <div>
            <TextField 
                id="name-contact" 
                label="Name contact" 
                margin="normal"
                variant="filled" 
                onChange={(e) => {
                    dispatch(inputChange(e.target.value));
                    editNewContact.name = e.target.value
                }}
            />
            <TextField 
                id="number-contact" 
                label="Number contact" 
                margin="normal"
                variant="filled" 
                onChange={(e) => {
                    dispatch(inputChange(e.target.value));
                    editNewContact.number = e.target.value
                }}
            />
            <Button variant="contained" onClick={() => handleEdit(editNewContact)}>Edit contact</Button>
            <Error />
        </div>
    )
}

export default FormEditContact