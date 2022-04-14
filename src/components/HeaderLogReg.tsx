import styled from '@emotion/styled'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const LinksWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 40
})

const HeaderLogReg: FC = () => {
    return (
        <LinksWrapper>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </LinksWrapper>
    )
}

export default HeaderLogReg