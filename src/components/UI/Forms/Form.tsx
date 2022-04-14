import styled from '@emotion/styled'
import React, { FC } from 'react'

interface FormProps {
    method: string;
    onSubmit: (e: React.MouseEvent<HTMLFormElement>) => void ;
}

const FormWrapper = styled('form')({
    display: 'flex',
    flexDirection: 'column'
})

const Form: FC<FormProps> = ({method, onSubmit, children}) => {
    return (
        <FormWrapper method={method} onSubmit={onSubmit}>{children}</FormWrapper>
    )
}

export default Form