import { CircularProgress } from '@mui/material'
import React, { FC } from 'react'
import styled from '@emotion/styled'


const LoaderWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})
const Loader: FC = () => {
    return (
        <LoaderWrapper>
            <CircularProgress />
        </LoaderWrapper>
    )
}

export default Loader