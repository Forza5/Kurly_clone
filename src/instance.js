import axios from "axios";

const token = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: `https://www.cheolsu.shop/`,
});
// const user = useSelector((state) => state.members.members.id);
// console.log("user", user);

export const membersApi = {
  loginMember: (paylaod) => instance.post(`/members/login`, paylaod), //각각의 get,post,delete,patch입니다!
  creatMember: (members) => instance.post(`/members/signup`, members),
  deleteMember: () =>
    instance.delete(`/members/login`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  updateMember: (edit) =>
    instance.patch(`/members/login`, edit, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  //   getMember: () =>
  //     instance.get(`/members/login/:id`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }),
};

export const commentsApi = {
  getOnePost: (payload) => instance.get(`/posts/${payload}`),
  addComment: (postIdComment) =>
    instance.post(`/comments/${postIdComment.postId}`, postIdComment, {
      headers: { Authorization: `Bearer ${token}` },
    }), //각각의 get,post,delete,patch입니다!
  deleteComment: (params) => instance.delete(`/comments/${params}`),
  updateComment: (payload) =>
    instance.put(`/comments/${payload.comment}`, payload.body, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const goodsApi = {
  //각각의 get,post,delete,patch입니다!
  getGoods: () => {
    return instance.get(`/goods`);
  },

  getOneGood: (goodsId) => {
    return instance.get(`/goods/${goodsId}`);
  },
};

export const cartApi = {
  //각각의 get,post,delete,patch입니다!
  getCart: () => {
    return instance.get(`/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  postCart: (inputs) => {
    return instance.post(`/cart`, inputs, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  putcart: (payload) =>
    instance.put(`/cart/${payload.postId}`, payload.post, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  deleteCart: (params) =>
    instance.delete(`/cart/${params}`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
  deleteAllCart: (params) =>
    instance.delete(`/cart/all`, {
      headers: { Authorization: `Bearer ${token}` },
    }),
};
