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
    try {
      const data = await membersApi.loginMember(payload);
      console.log("login data", data);
      localStorage.setItem("token", data.data.accessToken);
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
      console.log(data.data.message);
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

//이메일체크
export const AcyncEmailCheck = createAsyncThunk(
  "members/emailCheck",
  async (payload, thunkAPI) => {
    try {
      const data = await membersApi.emailCheck(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//인증번호 확인
export const AcyncCodeCheck = createAsyncThunk(
  "members/codeCheck",
  async (payload, thunkAPI) => {
    try {
      const data = await membersApi.codeCheck(payload);
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
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
      alert(payload.message);
    },
    [AcyncCreateMember.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log(state.error.response.data);
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
    //이메일 체크
    [AcyncEmailCheck.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
    },
    [AcyncEmailCheck.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.err = payload;
    },
    //인증번호 확인
    [AcyncCodeCheck.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      alert("인증이 완료되었습니다.");
    },
    [AcyncCodeCheck.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.err = payload;
      alert("인증번호를 다시 확인해주세요");
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addReview, deleteReview, selectReview } = membersSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default membersSlice.reducer;
