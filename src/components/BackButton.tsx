import { IconButton } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const BackButton: React.FC = (): React.ReactElement => {
    const navigate = useNavigate();
    const handleClickButton = () => {
        navigate(-1)
    }
    return (
        <IconButton onClick={handleClickButton} style={{ marginRight: 20 }} color="primary" >
            <ArrowBack />
        </IconButton>
    )
}
