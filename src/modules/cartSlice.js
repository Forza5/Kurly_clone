import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartApi } from "../instance";

const initialState = {
  cart: {},
  error: {},
};

//카트 확인하기
export const AcyncGetCart = createAsyncThunk(
  "cart/getCart",
  async (thunkAPI) => {
    try {
      const data = await cartApi.getCart();
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//카트에 담기
export const AcyncPostCart = createAsyncThunk(
  "cart/postCart",
  async (payload, thunkAPI) => {
    try {
      const data = await cartApi.postCart(payload);
      console.log("cartSlice", data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//카드 수량 수정하기
export const AcyncPutCart = createAsyncThunk(
  "cart/putCart",
  async (payload, thunkAPI) => {
    try {
      const data = await cartApi.putCart(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//카트 물건 1개 삭제
export const AcyncDeleteCart = createAsyncThunk(
  "cart/deleteCart",
  async (payload, thunkAPI) => {
    try {
      const data = await cartApi.deleteCart(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//카드 물건 전체 삭제
export const AcyncDeleteAllCart = createAsyncThunk(
  "cart/deleteAllCart",
  async (payload, thunkAPI) => {
    try {
      const data = await cartApi.deleteAllCart(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    //카트 확인하기
    [AcyncGetCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cart = payload;
    },
    [AcyncGetCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //카트에 담기
    [AcyncPostCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [AcyncPostCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log(state.error.response.data);
    },
    //카드 수량 수정하기
    [AcyncPutCart.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [AcyncPutCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //카트 물건 1개 삭제
    [AcyncDeleteCart.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [AcyncDeleteCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //카드 물건 전체 삭제

    [AcyncDeleteAllCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [AcyncDeleteAllCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default cartSlice.reducer;
