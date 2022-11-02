import styles from "../pages/css/ModalBasic.css";
import { useEffect } from "react";
import { useRef } from "react";
import "../pages/css/ModalBasic.css";
import { useDispatch, useSelector } from "react-redux";
import { AcyncPostCart } from "../modules/cartSlice";
import jwt_decode from "jwt-decode";
import { AcyncGetOneGood } from "../modules/goodsSlice";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ModalBasic({ setModalOpen, paramId }) {
  //장바구니에 넣을 userId 토큰에서 가져오기
  const [token, setToken] = useState("");
  const storedToken = localStorage.getItem("token");
  useEffect(() => {
    if (storedToken) {
      let decodedData = jwt_decode(storedToken);
      setToken(decodedData);
      let expirationDate = decodedData.exp;
      var current_time = Date.now() / 1000;
      if (expirationDate < current_time) {
        localStorage.removeItem("token");
      }
    }
  }, []);

  const dispatch = useDispatch();
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  //렌더링
  const [productData] = useSelector((state) => state.goods?.data);
  console.log(productData);
  useEffect(() => {
    dispatch(AcyncGetOneGood(paramId));
    console.log(paramId);
  }, []);
  //수량 증감
  const [number, setNumber] = useState(1);
  const onDecrease = () => {
    setNumber((prevNumber) => (prevNumber <= 1 ? 1 : prevNumber - 1));
  };
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  //장바구니에 넣을 데이터

  const myPick = {
    userId: token.userId,
    productId: productData?.goodsId,
    quantity: number,
    price: productData?.goodsPrice,
    productName: productData?.goodsName,
  };
  const onPostCart = () => {
    dispatch(AcyncPostCart(myPick));
  };
  console.log(myPick);
  return (
    <div className="presentaion">
      <div className="innerpresentation">
        <div className="dialogContainer">
          <div className="dialogPaper">
            <div>
              <div className="informations">
                <div className="productName">
                  <span className="name">{productData?.goodsName}</span>
                </div>
                <div className="priceInformations">
                  <div>
                    <span className="price">{productData?.goodsPrice}</span>
                  </div>
                  <div className="controlQuantity">
                    <button
                      type="button"
                      className="quantityDown"
                      aria-label="수량내리기"
                      onClick={onDecrease}
                    ></button>
                    <div className="quantity">{number}</div>
                    <button
                      type="button"
                      className="quantityUp"
                      aria-label="수량올리기"
                      onClick={onIncrease}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="totalPrice">
              <div className="totalColumn">
                <div className="sum">
                  <p className="sumP">합계</p>

                  <div>
                    <span className="sumSpan">
                      {productData?.goodsPrice * number}
                    </span>
                    <span className="sumSpan2">원</span>
                  </div>
                </div>
                <div className="accumulate">
                  <span className="accumulateSpan">적립</span>
                  <span className="accumulateSpan2">
                    로그인 후, 회원할인가와 적립혜택 제공
                  </span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="cancelButton">
                <span className="candelSpan" onClick={closeModal}>
                  취소
                </span>
              </button>
              <button className="addCartButton">
                <span onClick={onPostCart} className="addCartSpan">
                  장바구니 담기
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalBasic;
