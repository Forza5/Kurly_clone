import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartApi } from "../instance";

const initialState = {
  data: [],
  error: {},
};

//카트 확인하기
export const AcyncGetCart = createAsyncThunk(
  "cart/getCart",
  async (payload, thunkAPI) => {
    try {
      const data = await cartApi.getCart(payload);
      console.log(data.data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
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
//카드 증량하기
export const AcyncIncreaseCart = createAsyncThunk(
  "cart/increaseCart",
  async (payload, thunkAPI) => {
    try {
      const data = await cartApi.increaseCart(payload);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//카드 감량하기
export const AcyncDecreaseCart = createAsyncThunk(
  "cart/decreaseCart",
  async (payload, thunkAPI) => {
    try {
      const data = await cartApi.decreaseCart(payload);
      return payload;
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
      console.log(data);
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
  reducers: {
    updateList: (state, action) => {
      state.data = state.data.map((item) =>
        item.productId === action.payload
          ? { ...item, isChecked: !item.isChecked }
          : item
      );
    },
  },
  extraReducers: {
    //카트 확인하기
    [AcyncGetCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
      const checkData = payload.map((item) => {
        return { ...item, isChecked: false };
      });
      state.data = checkData;
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
    //카드 증량하기
    [AcyncIncreaseCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("증량하기", action.payload);
      const newIncreaseCart = state.data.map((item) => {
        if (item.cartId !== action.payload.cartId) {
          return item;
        } else
          return {
            ...item,
            quantity: item.quantity + 1,
          };
      });
      state.data = newIncreaseCart;
    },
    [AcyncIncreaseCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //카드 감량하기
    [AcyncDecreaseCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("감량하기", action.payload);
      const newDecreaseCart = state.data.map((item) => {
        if (item.cartId !== action.payload.cartId) {
          return item;
        } else
          return {
            ...item,
            quantity: item.quantity - 1,
          };
      });
      state.data = newDecreaseCart;
    },
    [AcyncDecreaseCart.rejected]: (state, { payload }) => {
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
