import { IconButton } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import React from 'react'
import { useHomeStyles } from '../pages/Home/theme'
import { ImageObj } from './AddTweetForm'

interface ImageListProps {
    images: ImageObj[];
    removeImage: (url: string) => void;
}

export const ImageList: React.FC<ImageListProps> = ({ images, removeImage }) => {
    const classes = useHomeStyles()
    return (
        <div className={classes.imagesList}>
            {
                images.map(obj =>
                    <div key={obj.blobUrl} className={classes.imagesListItem} style={{ backgroundImage: `url(${obj.blobUrl})` }}>
                        <IconButton className={classes.imagesListRemove} onClick={(): void => removeImage(obj.blobUrl)} color="primary">
                            <Clear style={{ fontSize: 26 }} />
                        </IconButton>
                    </div>
                )
            }
        </div>
    )
}
