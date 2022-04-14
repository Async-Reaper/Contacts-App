import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import AppRoute from './AppRoute'
import HeaderLogReg from './HeaderLogReg'

const RouteWrapper: FC = () => {
    const {loginStatus} = useTypedSelector(state => state.login)

    return (
        <div>
            {loginStatus ? null : <HeaderLogReg />}
            <AppRoute />
        </div>
    )
}

export default RouteWrapper