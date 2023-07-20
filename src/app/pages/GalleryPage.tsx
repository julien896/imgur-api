import { useEffect, useState } from 'react'
import { Post } from '../models/Post';
import { GalleryComponent } from '../components/GalleryComponent/GalleryComponent'
import { Masonry } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../lib/slices/gallerySlice'
import { AppDispatch, RootState } from '../lib/store/store';
import { BaseFilters } from '../models/Filters';
import { Spinner } from '../components/base/Spinner/Spinner';
import { fetchImage } from '../lib/slices/imageSlice';

export const GalleryPage = () => {

  const [filters, setFilters] = useState<BaseFilters>({
    page: '1',
    section: 'top',
    sort: 'time',
    window: 'all',
    showViral: false
  })

  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.gallery.posts);
  const status = useSelector((state: RootState) => state.gallery.status);

  const selectedImage = useSelector((state: RootState) => state.image.data);

  const [imageDialogOpen, setImageDialogOpen] = useState(false)

  const isLoading = status === 'loading'

  const dispatchGallery = async() => await dispatch(fetchPosts(filters))

  useEffect(() => {
    dispatchGallery()
  }, [filters]);

  const handleFilterChange = (filterName: keyof BaseFilters, value: string ) => {
    setFilters((prevFilterValues) => ({
      ...prevFilterValues,
      [filterName]: value,
    }));
  };

  function getExtension(filename: string) {
    return filename?.split(".").pop();
  }
  

  return (
    <GalleryComponent>
      <GalleryComponent.Filters handleChange={handleFilterChange} />
      {!isLoading ?
      <Masonry columns={4} spacing={2}>
        {posts.length > 0 && posts.map((r: Post) => (
          <GalleryComponent.Card 
            getImage={() => { 
              dispatch(fetchImage(r.images[0].id)) 
              setImageDialogOpen(true)
            }}
            key={r.id} 
            image={r.images && r.images.length > 0 ? r.images[0].link : ''} 
            getExtension={getExtension}
          />
        ))} 
      </Masonry>  :
      <Spinner />
    }
    <GalleryComponent.ImageDialog 
      open={imageDialogOpen}
      handleClose={() => setImageDialogOpen(false)}
      image={selectedImage}
      getExtension={getExtension}
    />
    </GalleryComponent>
  )
}
