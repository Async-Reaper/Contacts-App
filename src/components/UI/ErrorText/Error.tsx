import styled from '@emotion/styled'
import React, { FC } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const TextError = styled('div')({
    color: '#cc0000'
})

const Error: FC = () => {
    const {errorAnswer} = useTypedSelector(state => state.contacts)
    return (
        <div>
            <TextError>{errorAnswer}</TextError>
        </div>
    )
}

export default Error