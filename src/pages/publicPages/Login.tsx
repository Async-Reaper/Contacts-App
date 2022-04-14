import React, { FC } from 'react'
import FormsLogin from '../../components/Forms/FormLogin'
import Popup from '../../components/UI/Popup/Popup'

const Login: FC = () => {
    return (
        <div>
            <Popup>We registrtion.</Popup>
            <FormsLogin />
        </div>
    )
}

export default Login