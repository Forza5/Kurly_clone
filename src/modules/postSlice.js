import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsApi } from "../instance";

const initialState = {
  posts: [
    {
      productName: "",
      price: "",
      discount: "",
      productImg: "",
    },
  ],
  error: {},
};

//포스트 가져오기
export const AcyncGetPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await postsApi.getPosts(payload);
      console.log("login data", data);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    //로그인
    [AcyncGetPosts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.posts = payload;
    },
  },
});
export default postsSlice.reducer;
