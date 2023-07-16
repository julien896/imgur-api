import { useEffect, useState } from 'react'
import api from '../services/api'
import { Gallery } from '../models/Gallery'
import { GalleryComponent } from '../components/GalleryComponent/GalleryComponent'
import { Masonry } from '@mui/lab'

export const GalleryPage = () => {
  const [results, setResults] = useState<Gallery[]>([])

  const getImages = async() => {
    await api.get('/3/gallery/hot/viral/day/1?showViral=true')
    .then((response) => { 
      setResults(response.data.data) 
    })
  }
  
  useEffect(() => {
    getImages()
  }, [])

  return (
   <GalleryComponent>
    <Masonry columns={3} spacing={2}>
      {results.length > 0 && results.map((r: Gallery) => (
        <GalleryComponent.Card key={r.id} image={r.images && r.images.length > 0 ? r.images[0].link : ''} />
      ))}
    </Masonry>
   </GalleryComponent>
  )
}
