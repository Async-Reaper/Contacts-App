import { Button } from '@mui/material'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypedDispatch } from '../hooks/useTypedDispatch'
import { logoutFetch, logoutSuccess } from '../store/reducers/loginReducer'

const Logout: FC = () => {  
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logoutFetch())
        dispatch(logoutSuccess())
        navigate('/login')
    }

    return (
        <Button variant="contained" onClick={() => handleLogout()}>Logout</Button>
    )
}

export default Logout