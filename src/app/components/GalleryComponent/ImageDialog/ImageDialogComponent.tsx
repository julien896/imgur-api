import { Dialog, DialogContent, Slide } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { Image } from '../../../models/Image';

export const ImageDialogComponent = ({
    open,
    handleClose,
    image,
    getExtension
} : {
    open: boolean;
    handleClose: Dispatch<SetStateAction<boolean>>;
    image: Image | any;
    getExtension(filename: string): string | undefined
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Slide}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ borderRadius: 10, padding: '0px', overflow: 'hidden' }}
    >
    <DialogContent>
      <div>
        {getExtension(image && image.link) === 'mp4' ? (
          <video className='file' src={image.link} muted /> ) : (
          <img className='file' src={image.link} alt='' />
        )}
      </div>  
    </DialogContent>
  </Dialog>
  )
}
