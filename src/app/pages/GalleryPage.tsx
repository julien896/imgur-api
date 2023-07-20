import { useEffect, useState } from 'react'
import { Post } from '../models/Post';
import { GalleryComponent } from '../components/GalleryComponent/GalleryComponent'
import { Masonry } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../lib/slices/gallerySlice'
import { AppDispatch, RootState } from '../lib/store/store';
import { BaseFilters } from '../models/Filters';
import { Spinner } from '../components/base/Spinner/Spinner';
import { Paginator } from '../components/base/Paginator/Paginator';


export const GalleryPage = () => {

  const [params, setParams] = useState<BaseFilters>({
    page: 1,
    section: 'top',
    sort: 'time',
    window: 'all',
    showViral: false
  })

  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.gallery.posts);
  const status = useSelector((state: RootState) => state.gallery.status);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const [imageDialogOpen, setImageDialogOpen] = useState(false)

  const isLoading = status === 'loading'

  const dispatchGallery = async() => await dispatch(fetchPosts(params))

  useEffect(() => {
    dispatchGallery()
  }, [params]);

  const handleFilterChange = (filterName: keyof BaseFilters, value: any ) => {
    setParams((prevFilterValues) => ({
      ...prevFilterValues,
      [filterName]: value,
    }));
  };

  function getExtension(filename: string) {
    return filename?.split(".").pop();
  }
  

  return (
    <GalleryComponent>
      <GalleryComponent.Filters disabled={isLoading} handleChange={handleFilterChange} />
      <Paginator 
        handlePrev={() => handleFilterChange('page',  params.page - 1)} 
        handleNext={() => handleFilterChange('page',  params.page + 1)} 
        disabled={isLoading}
        current={params.page}
      />
      {!isLoading ?
      <Masonry sx={{ margin: 0, padding: '0 40px', alignContent: 'center'}} columns={4} spacing={2}>
        {posts.length > 0 && posts.map((post: Post) => (
          <GalleryComponent.Card 
            getImage={() => { 
              setSelectedPost(post)
              setImageDialogOpen(true)
            }}
            key={post.id} 
            image={post.images && post.images.length ? post.images[0].link : ''} 
            description={post.images && post.images.length ? post.images[0].description! : ''}
            getExtension={getExtension}
          />
        ))} 
      </Masonry>  :
      <Spinner />
    }
    <GalleryComponent.ImageDialog 
      open={imageDialogOpen}
      handleClose={() => setImageDialogOpen(false)}
      post={selectedPost && selectedPost}
      getExtension={getExtension}
    />
    </GalleryComponent>
  )
}
