import TextField from '@mui/material/TextField';
import React, { FC } from 'react';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { setSearch } from '../../../store/reducers/contactsReducer';

const Search: FC = () => {
    const {search} = useTypedSelector(state => state.contacts)
    const dispatch = useTypedDispatch();


    return (
            <TextField
                label="Search contacts"
                InputProps={{
                type: 'search',
                }}
                value={search}
                onChange={e => dispatch(setSearch(e.target.value))}
            />
    )
}

export default Search