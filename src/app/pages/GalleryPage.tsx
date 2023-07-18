import { useEffect, useState } from 'react'
import { Post } from '../models/Post';
import { GalleryComponent } from '../components/GalleryComponent/GalleryComponent'
import { Masonry } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../lib/slices/gallerySlice'
import { AppDispatch, GalleryState } from '../lib/store/store';
import { BaseFilters } from '../models/Filters';
import { BaseFiltersComponent } from '../components/GalleryComponent/BaseFilters/BaseFiltersComponent';

export const GalleryPage = () => {

  const [filters, setFilters] = useState<BaseFilters>({
    page: '1',
    section: 'top',
    sort: 'time',
    window: 'all',
    showViral: false
  })

  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: GalleryState) => state.gallery.posts);
  const status = useSelector((state: GalleryState) => state.gallery.status);

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

  return (
    <GalleryComponent>
      <GalleryComponent.Filters handleChange={handleFilterChange} />
      <Masonry columns={4} spacing={2}>
        {posts.length > 0 && posts.map((r: Post) => (
          <GalleryComponent.Card 
            key={r.id} 
            image={r.images && r.images.length > 0 ? r.images[0].link : ''} 
          />
        ))}
      </Masonry>
    </GalleryComponent>
  )
}
