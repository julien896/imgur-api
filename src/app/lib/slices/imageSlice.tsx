import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GalleryRepository } from '../../services/GalleryService/galleryService';

const galleryRepository = new GalleryRepository();

export const fetchImage = createAsyncThunk('gallery/fetchImage', async (id: string) => {
  const image = await galleryRepository.getImageById(id);
  return image;
});

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    data: {},
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchImage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchImage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null
      });
  },
});

export default imageSlice.reducer;