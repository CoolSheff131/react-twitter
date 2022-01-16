import { IconButton } from '@material-ui/core'
import { ImageOutlined } from '@material-ui/icons'
import React from 'react'
import { useHomeStyles } from '../pages/Home/theme'

export const UploadImages = () => {
    const classes = useHomeStyles()
    const [images, setImages] = React.useState<string[]>([])
    const inputRef = React.useRef<HTMLInputElement>(null)
    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }
    const handleChangeFileInput = React.useCallback((event: Event) => {
        if (event.target) {
            const target = event.target as HTMLInputElement
            const file = target.files?.[0]
            if (file) {
                const fileObj = new Blob([file])
                setImages((prev) => [...prev, URL.createObjectURL(fileObj)])
            }
            console.log(event)
        }
    }, [])

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeFileInput)
        }
        return () => {
            if (inputRef.current) {
                inputRef.current?.removeEventListener('change', handleChangeFileInput)
            }
        }
    }, [])

    return (
        <div>

            <IconButton onClick={handleClick} color="primary">
                <ImageOutlined style={{ fontSize: 26 }} />
            </IconButton>
            <input ref={inputRef} type="file" hidden id="upload-input" />
            <div className={classes.imagesList}>
                {
                    images.map(url =>
                        <div className={classes.imagesListItem} style={{ backgroundImage: `url(${url})` }}>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
