import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { goodsApi } from "../instance";

const initialState = {
  data: [
    {
      goodsId: 1,
      category: "과일",
      goodsImage:
        "https://product-image.kurly.com/cdn-cgi/image/width=676,format=auto/product/image/5541028a-2e9d-4487-87dc-caa9fbc06d7f.jpg",
      goodsName: "무농약 제주 청레몬 450g (3~5입)",
      goodsPrice: 8500,
      goodsSale: null,
      delivery: "샛별배송",
      seller: "컬리",
      deliveryType: "냉장",
      salesUnit: "1팩",
      volume: "450g내외",
      origin: "국산",
      allergy: null,
      shelfLife:
        "해당상품은 신선식품으로 별도의 유통기한이 없으니 가급적 빨리 먹어 ",
      notification: "식품 특성상 중량은 3% 내외의 차이가 발생할 수 있습니다.",
      exImage: null,
      exName: null,
      exContent: null,
      ingredients: null,
      process: null,
      recommendation: null,
      brand: null,
      createdAt: "2022-10-28T09:06:19.000Z",
      updatedAt: "2022-10-28T09:06:19.000Z",
    },
    {
      goodsId: 2,
      category: "정육",
      goodsImage:
        "https://img-cf.kurly.com/cdn-cgi/image/width=676,format=auto/shop/data/goods/1592550466656l0.jpg",
      goodsName: "[이치류]드라이에이징 양갈비 구이",
      goodsPrice: 20315,
      goodsSale: 15,
      delivery: "샛별배송",
      seller: "컬리",
      deliveryType: "냉장",
      salesUnit: "1팩",
      volume: null,
      origin: "상세페이지 별도표",
      allergy: null,
      shelfLife: null,
      notification:
        "해당상품은 건조숙성을 한 상품으로 일반 냉장육 대비 어두운 색이 나타날 수 있습니다.",
      exImage: null,
      exName: null,
      exContent: null,
      ingredients: null,
      process: null,
      recommendation: null,
      brand: null,
      createdAt: "2022-10-28T09:27:57.000Z",
      updatedAt: "2022-10-28T09:27:57.000Z",
    },
  ],
  error: {},
};

//모든 상품 정보 가져오기
export const AcyncGetGoods = createAsyncThunk(
  "goods/getGoods",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await goodsApi.getGoods(payload);
      return thunkAPI.fulfillWithValue(data.data);
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
      console.log(data);
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
