import { useEffect } from 'react'
import api from './app/services/api'

function App() {  
  const getImages = async() => {
    await api.get('/3/gallery')
    .then((response) => console.log(response.data))
  }

  useEffect(() => {
    getImages()
  }, [])
  

  return (
    <>
      app
    </>
  )
}

export default App
