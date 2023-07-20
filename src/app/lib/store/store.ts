import { configureStore } from '@reduxjs/toolkit' 
import galleryReducer from '../slices/gallerySlice'
import imageReducer from '../slices/imageSlice'

export const store = configureStore({ 
  reducer: {
    gallery: galleryReducer,
    image: imageReducer
  } 
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

