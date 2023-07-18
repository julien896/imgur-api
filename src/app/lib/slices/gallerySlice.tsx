import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GalleryRepository } from '../../services/GalleryService/galleryService';
import { BaseFilters } from '../../models/Filters';

const galleryRepository = new GalleryRepository();

export const fetchPosts = createAsyncThunk('gallery/fetchPosts', async (filters: BaseFilters) => {
  const posts = await galleryRepository.getPosts(filters);
  return posts;
});

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    posts: [],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null
      });
  },
});

export default gallerySlice.reducer;