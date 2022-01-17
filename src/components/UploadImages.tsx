import { IconButton } from '@material-ui/core'
import { Clear, ImageOutlined, RemoveCircle } from '@material-ui/icons'
import React from 'react'
import { useHomeStyles } from '../pages/Home/theme'
import { ImageObj } from './AddTweetForm'
import { ImageList } from './ImageList'

interface UploadImageProps {
    images: ImageObj[];
    onChangeImages: (callback: (images: ImageObj[]) => ImageObj[]) => void
}

export const UploadImages: React.FC<UploadImageProps> = ({ onChangeImages, images }) => {
    const classes = useHomeStyles()
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
                onChangeImages(prev => [...prev, {
                    file,
                    blobUrl: URL.createObjectURL(fileObj)
                }])
            }
            console.log(event)
        }
    }, [])

    const removeImage = (url: string) => {
        onChangeImages(prev => prev.filter(obj => obj.blobUrl !== url))
    }

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
            <ImageList images={images.map(obj => obj.blobUrl)} removeImage={removeImage} />
        </div>
    )
}
