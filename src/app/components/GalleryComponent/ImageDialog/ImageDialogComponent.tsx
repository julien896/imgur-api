import { Dispatch, SetStateAction } from 'react'
import { Post } from '../../../models/Post';

import { Dialog, DialogContent, Slide } from '@mui/material'

import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export const ImageDialogComponent = ({
    open,
    handleClose,
    post,
    getExtension
} : {
    open: boolean;
    handleClose: Dispatch<SetStateAction<boolean>>;
    post: Post | any;
    getExtension(filename: string): string | undefined
}) => {
    console.log(post)
  return (
    <Dialog
      open={open}
      TransitionComponent={Slide}
      keepMounted
      onClose={handleClose}
      sx={{ 
        borderRadius: 10, 
        padding: '0px', 
        overflow: 'hidden'
    }}
    >
    <DialogContent>
      <div>
        {getExtension(post?.images[0] && post?.images[0].link) === 'mp4' ? (
          <video className='file' src={post?.images[0].link} muted /> ) : (
          <img className='file' src={post?.images[0].link} alt='' />
        )}
      </div>  
      <div className='post-details'>
        <span className='title'>{post?.title}</span>
        <div className='icons'>
            <div className='points'>
              <ThumbUpIcon sx={{ marginRight: '2px'}} /><span>{post?.ups}</span>
            </div>
            <div className='points'>
              <ThumbDownIcon sx={{ marginRight: '2px'}} /><span>{post?.downs}</span>
            </div> 
            <div className='points'>
              <WorkspacePremiumIcon sx={{ marginRight: '2px'}} /><span>{post?.score}</span>
            </div> 
        </div>
      </div>
    </DialogContent>
  </Dialog>
  )
}
