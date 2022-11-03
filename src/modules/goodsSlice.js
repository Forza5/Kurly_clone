import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { goodsApi } from "../instance";

const initialState = {
  data: [],
  error: {},
};

//모든 상품 정보 가져오기
export const AcyncGetGoods = createAsyncThunk(
  "goods/getGoods",
  async (payload, thunkAPI) => {
    try {
      const data = await goodsApi.getGoods();
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//상품 정보 1개 가져오기
export const AcyncGetOneGood = createAsyncThunk(
  "goods/getGoods",
  async (payload, thunkAPI) => {
    try {
      const data = await goodsApi.getOneGood(payload);
      console.log("모달용 정보?", data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: {
    //모든 상품 정보 가져오기

    [AcyncGetGoods.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [AcyncGetGoods.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log(state.error.response.data);
    },
    //상품 정보 1개 가져오기

    [AcyncGetOneGood.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    },
    [AcyncGetOneGood.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log(state.error.response.data);
    },
  },
});
export default goodsSlice.reducer;
