import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../css/reset.css";
import "../css/font.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AcyncDecreaseCart,
  AcyncDeleteCart,
  AcyncGetCart,
  AcyncIncreaseCart,
} from "../../modules/cartSlice";
import jwtDecode from "jwt-decode";
import updateList from "../../modules/cartSlice";
import Layout from "../../common/Layout";

const Cart = () => {
  const token = localStorage.getItem("token");
  const realToken = jwtDecode(token);
  const dispatch = useDispatch();
  const [carts, setCarts] = useState(false);

  const onDecrease = (payload) => {
    dispatch(AcyncDecreaseCart(payload));
  };
  const onIncrease = (payload) => {
    dispatch(AcyncIncreaseCart(payload));
  };

  const productData = useSelector((state) => state.cart.data);

  useEffect(() => {
    dispatch(AcyncGetCart(realToken.userId));
  }, []);

  const onDeleteHandler = (cartId) => {
    dispatch(AcyncDeleteCart(cartId));
  };
  //상품금액
  const newProductData = productData?.map((item) => {
    return item.price * item.quantity;
  });

  const totalPrice = newProductData?.reduce((acc, cur, i) => {
    return acc + cur;
  }, 0);
  let result = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Layout>
      <div
        style={{
          width: "1050px",
          margin: " 0px auto",
          fontFamily: " 'Noto Sans KR', sans-serif",
        }}
      >
        <h2
          style={{
            padding: "50px 0px",
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "500",
            lineHeight: "35px",
          }}
        >
          장바구니
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* 전체 */}
          <div style={{ width: "742px" }}>
            {/* 좌 */}
            <div style={{}}>
              {/* 좌상 목록 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 10px 16px 2px",
                  fontSize: "14px",
                  lineHeight: "26px",
                  fontWeight: "500",
                }}
              >
                <div style={{}}>
                  <label
                    style={{
                      display: "inline-flex",
                      fontSize: "14px",
                      lineHeight: "26px",
                      padding: "0px",
                      color: "rgb(51,51,51)",
                      position: "relative",
                      alignItems: "center",
                      verticalAlign: "top",
                    }}
                  >
                    <input
                      type="checkbox"
                      style={{
                        overflow: "hidden",
                        position: "absolute",
                        clip: "rect(0px,0px,0px,0px)",
                        clipPath: "inset(50%)",
                        width: "1px",
                        height: "1px",
                      }}
                    />
                    <img
                      style={{
                        display: "inline-block",
                        width: "24px",
                        height: "24px",
                        marginRight: "12px",
                        verticalAlign: "top",
                        maxWidth: "100%",
                      }}
                      alt="전체선택"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    />
                    <span>전체선택</span>
                  </label>
                  <span
                    style={{
                      display: "inline-block",
                      width: "1px",
                      height: "14px",
                      background: "rgb(221,221,221)",
                      margin: "6px 21px 0px 22px",
                      verticalAlign: "top",
                    }}
                  ></span>
                  <button
                    style={{
                      fontFamily: " 'Noto Sans KR', sans-serif",
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "rgb(51,51,51)",
                    }}
                  >
                    선택삭제
                  </button>
                </div>
              </div>
              <div
                style={{
                  borderBottom: "1px solid rgb(244,244,244)",
                }}
              >
                {productData.length > 0 ? (
                  productData.map((item) => {
                    let sum = item.price * item.quantity;
                    let price = sum
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    return (
                      <ul key={item.cartId}>
                        <GoodsList>
                          <GoodsLabel />
                          <GoodsInput
                            type="checkbox"
                            checked={item.ischecked}
                            onChange={() =>
                              dispatch(updateList(item.productId))
                            }
                          />
                          <GoodsImg src={item.productImage} />
                          <span></span>

                          <GoodsName>
                            <ATitle>
                              <PTitle>{item.productName}</PTitle>
                            </ATitle>
                          </GoodsName>
                          <Counter>
                            <CounterDown
                              onClick={() =>
                                onDecrease({
                                  userId: item.userId,
                                  quantity: item.quantity - 1,
                                  cartId: item.cartId,
                                })
                              }
                            ></CounterDown>
                            <Num>{item.quantity}</Num>
                            <CounterUp
                              onClick={() =>
                                onIncrease({
                                  userId: item.userId,
                                  quantity: item.quantity + 1,
                                  cartId: item.cartId,
                                })
                              }
                            ></CounterUp>
                          </Counter>
                          <Price>
                            <PriceSpan>{price}원</PriceSpan>
                          </Price>
                          <DeleteButton
                            onClick={() => onDeleteHandler(item.cartId)}
                          >
                            <DeleteSpan></DeleteSpan>
                          </DeleteButton>
                        </GoodsList>
                      </ul>
                    );
                  })
                ) : (
                  <p
                    style={{
                      padding: "115px 0px",
                      borderTop: "1px solid rgb(51,51,51)",
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "rgb(181,181,181)",
                    }}
                  >
                    장바구니에 담긴 상품이 없습니다
                  </p>
                )}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 10px 16px 2px",
                fontSize: "14px",
                lineHeight: "26px",
                fontWeight: "500",
              }}
            >
              {/* 좌하 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 10px 16px 2px",
                  fontSize: "14px",
                  lineHeight: "26px",
                  fontWeight: "500",
                }}
              >
                <label
                  style={{
                    display: "inline-block",
                    fontSize: "14px",
                    lineHeight: "26px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  <input
                    type="radio"
                    style={{
                      overflow: "hidden",
                      position: "absolute",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      clipPath: "inset(50%)",
                      width: "1px",
                      height: "1px",
                    }}
                  />
                  <img
                    style={{
                      display: "inline-block",
                      width: "24px",
                      height: "24px",
                      marginRight: "12px",
                      verticalAlign: "top",
                    }}
                    alt="전체선택"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExNjIgLTEwOTApIHRyYW5zbGF0ZSgxMDAgOTM2KSB0cmFuc2xhdGUoMTA0NiAxNDIpIHRyYW5zbGF0ZSgxNiAxMikiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS41IiBmaWxsPSIjRjJGMkYyIiBzdHJva2U9IiNFMkUyRTIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNNyAxMi42NjdMMTAuMzg1IDE2IDE4IDguNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                  />
                  <span>전체선택(0/0)</span>
                </label>
                <span
                  style={{
                    display: "inline-block",
                    width: "1px",
                    height: "14px",
                    background: "rgb(221,221,221)",
                    margin: "6px 21px 0px 22px",
                    verticalAlign: "top",
                  }}
                ></span>
                <button
                  style={{
                    fontFamily: " 'Noto Sans KR', sans-serif",
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  선택삭제
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ position: "relative", width: "284px", minHeight: "942px" }}
          >
            <div
              style={{
                width: "284px",
                paddingTop: "60px",
              }}
            >
              {" "}
              {/* 우 */}
              <div
                style={{
                  padding: "23px 19px 20px",
                  borderWidth: "1px 1px 0px",
                  borderTopStyle: "solid",
                  borderRightStyle: "solid",
                  borderLeftStyle: "solid",
                  borderTopColor: "rgb(242,242,242)",
                  borderRightColor: "rgb(242,242,242)",
                  borderLeftColor: "rgb(242,242,242)",
                  borderImage: "initial",
                  borderBottomStyle: "initial",
                  borderBottomColor: "initial",
                }}
              >
                <h3
                  style={{
                    paddingLeft: "24px",
                    fontSize: "24px",
                    fontWeight: "500",
                    lineHeight: "20px",
                    background:
                      "url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg) 0px 50% / 20px 20px no-repeat",
                  }}
                >
                  배송지
                </h3>

                <div
                  style={{
                    paddingTop: "12px",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "rgb(51,51,51)",
                  }}
                >
                  <p style={{ paddingBottom: "16px", fontWeight: "500" }}>
                    <em style={{ fontStyle: "normal", color: "rgb(95,0,128)" }}>
                      배송지를 등록
                    </em>
                    하고
                    <br />
                    <span style={{ whiteSpace: "nowrap" }}>
                      구매 가능한 상품을 확인하세요!
                    </span>
                  </p>
                  <button
                    style={{
                      display: "block",
                      padding: "0px 10px",
                      textAlign: "center",
                      overflow: "hidden",
                      width: "100%",
                      height: "36px",
                      borderRadius: "3px",
                      color: "rgb(95,0,128)",
                      backgroundColor: "rgb(255,255,255)",
                      border: "1px solid rgb(95, 0, 128)",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "20px",
                        textIndent: "-14px",
                        display: "inline-block",
                      }}
                    >
                      <img
                        style={{
                          verticalAlign: "top",
                          display: "inline-block",
                          width: "20px",
                          height: "20px",
                        }}
                        src="https://res.kurly.com/pc/service/cart/2007/ico_search.svg"
                        alt="주소검색"
                      />
                      주소검색
                    </span>
                  </button>
                </div>
              </div>
              <ul
                style={{
                  padding: "19px 18px 18px 20px",
                  border: " 1px solid rgb(242,242,242)",
                  backgroundColor: "rgb(250,250,250)",
                }}
              >
                {/* 금액 */}
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      width: "100px",
                      fontsize: "16px",
                      lineHeight: "24px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    상품금액
                  </span>
                  <span
                    style={{
                      fontsize: "18px",
                      lineHeight: "24px",
                      textAlign: "right",
                    }}
                  >
                    {result}
                    <span
                      style={{
                        paddingLeft: "2px",
                        fontsize: "16px",
                        fontWeight: "normal",
                        verticalAlign: "bottom",
                      }}
                    >
                      원
                    </span>
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "100px",
                      fontsize: "16px",
                      lineHeight: "24px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    상품할인금액
                  </span>
                  <span
                    style={{
                      fontsize: "18px",
                      lineHeight: "24px",
                      textAlign: "right",
                    }}
                  >
                    0
                    <span
                      style={{
                        paddingLeft: "2px",
                        fontsize: "16px",
                        fontWeight: "normal",
                        verticalAlign: "bottom",
                      }}
                    >
                      원
                    </span>
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: "12px",
                  }}
                >
                  <span
                    style={{
                      width: "100px",
                      fontsize: "16px",
                      lineHeight: "24px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    배송비
                  </span>
                  <span
                    style={{
                      fontsize: "18px",
                      lineHeight: "24px",
                      textAlign: "right",
                    }}
                  >
                    0
                    <span
                      style={{
                        paddingLeft: "2px",
                        fontsize: "16px",
                        fontWeight: "normal",
                        verticalAlign: "bottom",
                      }}
                    >
                      원
                    </span>
                  </span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "16px",
                    paddingTop: "18px",
                    borderTop: "1px solid rgb(244,244,244)",
                  }}
                >
                  <span
                    style={{
                      width: "100px",
                      fontsize: "16px",
                      lineHeight: "24px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    결제예정금액
                  </span>
                  <span
                    style={{
                      width: "162px",
                      fontsize: "18px",
                      lineHeight: "24px",
                      textAlign: "right",
                    }}
                  >
                    <strong
                      style={{
                        fontsize: "20px",
                        fontWeight: "700",
                        lineHeight: "28px",
                      }}
                    >
                      {result}
                    </strong>
                    <span
                      style={{
                        paddingLeft: "4px",
                        fontsize: "16px",
                        fontWeight: "normal",
                        verticalAlign: "1px",
                      }}
                    >
                      원
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ paddingTop: "20px" }}>
                <button
                  style={{
                    backgroundColor: "rgb(221,221,221)",
                    cursor: "default",
                    display: "block",
                    padding: " 0px 10px",
                    textAlign: "center",
                    overflow: "hidden",
                    width: "100%",
                    height: "56px",
                    borderRadius: "3px",
                    color: "rgb(255,255,255)",
                    border: "0px none",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    상품을 담아주세요
                  </span>
                </button>
                <ul style={{ padding: " 16px 0px" }}>
                  <li
                    style={{
                      paddingTop: "4px",
                      color: "rgb(102,102,102)",
                      position: "relative",
                      fontSize: "12px",
                      lineHeight: "16px",
                      paddingLeft: "7px",
                    }}
                  >
                    "[주문완료] 상태일 경우에만 주문 취소 가능합니다."
                  </li>
                  <li
                    style={{
                      paddingTop: "4px",
                      color: "rgb(102,102,102)",
                      position: "relative",
                      fontSize: "12px",
                      lineHeight: "16px",
                      paddingLeft: "7px",
                    }}
                  >
                    "[마이컬리 〉 주문내역 상세페이지] 에서 직접 취소하실 수
                    있습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

const GoodsList = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  padding: 20px 0px;
`;
const GoodsLabel = styled.label`
  margin-left: 2px;
`;

const GoodsInput = styled.input`
  /* overflow: hidden;
  position: absolute;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(50%); */
  width: 25px;
  height: 25px;
`;

const GoodsImg = styled.img`
  display: inline-block;
  width: 60px;
  height: 78px;
  margin-right: 12px;
`;

const GoodsName = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  margin-right: 20px;
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
`;

const ATitle = styled.a`
  cursor: pointer;
`;

const PTitle = styled.p`
  max-height: 54px;
  padding-top: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  display: -webkit-box;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Counter = styled.div`
  display: inline-flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid rgb(221, 223, 225);
  width: 88px;
  border-radius: 3px;
`;

const CounterDown = styled.button`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
  vertical-align: top;
`;
const Num = styled.div`
  font-weight: 400;
  color: rgb(51, 51, 51);
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 14px;
  text-align: center;
  width: 31px;
  height: 28px;
  line-height: 28px;
`;

const CounterUp = styled.button`
  display: inline-flex;
  width: 28px;
  height: 28px;
  border: none;
  font-size: 1px;
  color: transparent;
  background-size: cover;
  background-color: transparent;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
  vertical-align: top;
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  width: 127px;
  text-align: right;
  word-break: break-all;
`;
const PriceSpan = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: rgb(51, 51, 51);
`;

const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 9px;
`;

const DeleteSpan = styled.span`
  width: 30px;
  height: 30px;
  display: inline-block;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMSA5Ljc2MiAyMC4yMzggOSAxNSAxNC4yMzggOS43NjIgOSA5IDkuNzYyIDE0LjIzOCAxNSA5IDIwLjIzOGwuNzYyLjc2MkwxNSAxNS43NjIgMjAuMjM4IDIxbC43NjItLjc2MkwxNS43NjIgMTV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==);
  background-size: cover;
  background-position: center center;
`;
