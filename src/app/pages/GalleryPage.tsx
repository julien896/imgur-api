import { useEffect, useState } from 'react'
import { Post } from '../models/Post';
import { GalleryComponent } from '../components/GalleryComponent/GalleryComponent'
import { Masonry } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../lib/slices/gallerySlice'
import { AppDispatch } from '../lib/store/store';

export const GalleryPage = () => {
  const [results, setResults] = useState<Post[]>([])

  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: any) => state.gallery.posts);
  const status = useSelector((state: any) => state.gallery.status);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log("posts", posts)
  console.log('status', status)

  return (
   <GalleryComponent>
    <Masonry columns={3} spacing={2}>
      {results.length > 0 && results.map((r: Post) => (
        <GalleryComponent.Card key={r.id} image={r.images && r.images.length > 0 ? r.images[0].link : ''} />
      ))}
    </Masonry>
   </GalleryComponent>
  )
}
