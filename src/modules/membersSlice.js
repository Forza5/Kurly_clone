import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { membersApi } from "../instance";

const initialState = {
  members: {},
  error: {},
};

//로그인하기
export const AcyncLoginMember = createAsyncThunk(
  "members/loginMember",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await membersApi.loginMember(payload);
      console.log("login data", data);
      localStorage.setItem("token", data.data.data.token);
      // sessionStorage.setItem("token", data.data.data.token);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//계정 생성
export const AcyncCreateMember = createAsyncThunk(
  "members/createMember",
  async (payload, thunkAPI) => {
    try {
      console.log("create", payload);
      const data = await membersApi.creatMember(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//계정삭제
export const AcyncDeleteMember = createAsyncThunk(
  "members/deleteMember",
  async (payload, thunkAPI) => {
    try {
      await membersApi.deleteMember(payload);
      localStorage.removeItem("token");
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//계정 정보 수정
export const AcyncUpdateMember = createAsyncThunk(
  "members/updateMember",
  async (payload, thunkAPI) => {
    try {
      console.log("update", payload);
      const data = await membersApi.updateMember(payload);
      console.log("수정하기", data, payload);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//members
const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    readMember: (state, action) => {
      return {
        ...state,
        members: [action.payload, ...state.members],
      };
    },
    deleteReview: (state, action) => {
      return state.reviews.filter((item) => item.id !== action.payload);
    },

    selectReview: (state, action) => {
      return {
        ...state,
        review: state.reviews.find((item) => {
          if (item.id == Number(action.payload)) {
            return item;
          }
        }),
      };
    },
  },
  extraReducers: {
    //로그인
    [AcyncLoginMember.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.members = payload;
      alert("로그인 되었습니다.");
    },
    [AcyncLoginMember.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      alert("로그인에 실패하였습니다.");
    },
    //회원가입
    [AcyncCreateMember.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      alert("회원가입을 축하드립니다");
    },
    [AcyncCreateMember.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log(state.err.response.data);
      alert("다시 입력해주세요");
    },
    //회원삭제
    [AcyncDeleteMember.fulfilled]: (state) => {
      state.isLoading = false;
      alert("그동안 이용해주셔서 감사합니다.");
    },
    [AcyncDeleteMember.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.err = payload;
    },
    //회원정보 수정
    [AcyncUpdateMember.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [AcyncUpdateMember.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.err = payload;
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReview, deleteReview, selectReview } = membersSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default membersSlice.reducer;