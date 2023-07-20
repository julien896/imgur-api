import { createSlice, createAsyncThunk, PayloadAction, createAction } from '@reduxjs/toolkit';
import { GalleryRepository } from '../../services/GalleryService/galleryService';
import { Params } from '../../models/Params';

const galleryRepository = new GalleryRepository();

export const fetchPosts = createAsyncThunk('gallery/fetchPosts', async (filters: Params) => {
  const posts = await galleryRepository.getPosts(filters);
  return posts;
});

export const updateFilters = createAction<Partial<Params>>('gallery/updateParams');

const initialParams: Params = {
  page: 1,
  section: 'top',
  sort: 'time',
  window: 'all',
  showViral: false,
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    posts: [],
    status: 'idle',
    params: initialParams,
    error: null as string | null,
  },
  reducers: {
    updateParams: (state, action: PayloadAction<Partial<Params>>) => {
      return { ...state, params: { ...state.params, ...action.payload }};
    },
  },
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

export const { updateParams } = gallerySlice.actions;
export default gallerySlice.reducer;