import { Snackbar } from '@material-ui/core'
import { Alert, Color } from '@material-ui/lab'
import React from 'react'

interface NotificationProps {
    children: (callback: (text: string, type: Color) => void) => React.ReactElement
}

export const Notification: React.FC<NotificationProps> = ({ children }): React.ReactElement => {
    const [open, setOpen] = React.useState<boolean>(false)
    const [text, setText] = React.useState<{ text: string; type: Color }>()

    const openNotification = (text: string, type: Color) => {
        setText({ text, type })
        setOpen(true)
    }

    return (
        <>
            {children(openNotification)}
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={text?.type}>
                    {text?.text}
                </Alert>
            </Snackbar>
        </>
    )
}