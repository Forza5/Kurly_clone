import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { goodsApi, reviewsApi } from "../instance";

const initialState = {
  data: [],
  error: {},
};

//모든 리뷰  가져오기
export const AcyncGetReviews = createAsyncThunk(
  "reviews/getReviews",
  async (payload, thunkAPI) => {
    try {
      const data = await reviewsApi.getReviews(payload);
      console.log(data.data.data);

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: {
    //모든 리뷰 가져오기
    [AcyncGetReviews.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [AcyncGetReviews.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log(state.error.response.data);
    },
  },
});
export default reviewsSlice.reducer;
