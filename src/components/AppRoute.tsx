import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useTypedDispatch } from '../hooks/useTypedDispatch'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Contacts from '../pages/privatePages/Contacts'
import Login from '../pages/publicPages/Login'
import { privateRoute, publicRoutes } from '../routes/route'
import { setLoginStatus } from '../store/reducers/loginReducer'

const AppRoute: FC = () => {
    const {loginStatus} = useTypedSelector(state => state.login)
    const dispatch = useTypedDispatch()
    localStorage.getItem('userId') || '' !== '' ? dispatch(setLoginStatus(true)) : dispatch(setLoginStatus(false))
    
    return (
        <Routes>
            {loginStatus ? 
                <>
                    <Route path={privateRoute.path} element={privateRoute.element} />
                    <Route path='*' element={<Contacts />} />
                </> :
                <>
                    {publicRoutes.map(route => 
                        <Route key={Date.now()} path={route.path} element={route.element} />)
                    }
                    <Route path='*' element={ <Login />} />
                </>
            }
        </Routes>
    )
}

export default AppRoute