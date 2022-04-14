import React, { FC } from 'react'
import FormsLogin from '../../components/Forms/FormLogin'
import Popup from '../../components/UI/Popup/Popup'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Loader from '../../components/UI/Loader/Loader'

const Login: FC = () => {
    const {isLoading} = useTypedSelector(state => state.contacts)
    return (
        <div>
            <Popup>We registrtion.</Popup>
            {isLoading ? <Loader /> : <FormsLogin />}
        </div>
    )
}

export default Login