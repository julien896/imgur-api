import { configureStore } from '@reduxjs/toolkit' 
import galleryReducer from '../slices/gallerySlice'

export const store = configureStore({ 
  reducer: {
    gallery: galleryReducer,
  } 
})
export type GalleryState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

