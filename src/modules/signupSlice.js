import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  detailAddress: "",
};

const signupSlice = createSlice({
  name: "addressResult",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      console.log(action.payload);
      state.address += action.payload;
    },

    // AddDetailAddress: (state, action) => {
    //   state.address += action.payload;
    // },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addAddress, AddDetailAddress } = signupSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default signupSlice.reducer;
