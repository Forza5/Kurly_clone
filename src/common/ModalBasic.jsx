import styles from "../pages/css/ModalBasic.css";
import { useEffect } from "react";
import { useRef } from "react";
import "../pages/css/ModalBasic.css";
import { useDispatch, useSelector } from "react-redux";
import { AcyncPostCart } from "../modules/cartSlice";
import jwt_decode from "jwt-decode";
import { AcyncGetOneGood } from "../modules/goodsSlice";

function ModalBasic({ setModalOpen }) {
  const token = localStorage.getItem("token");
  const realToken = jwt_decode(token);
  console.log(realToken);

  const dispatch = useDispatch();
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    dispatch(AcyncGetOneGood());
  });

  const [productData] = useSelector((state) => state.goods.data);
  console.log(productData);

  const myPick = {
    userId: realToken.id,
    productId: productData.goodsId,
    quantity: 1,
    price: productData.goodsPrice,
    productName: productData.goodsName,
  };

  const onPostCart = () => {
    dispatch(AcyncPostCart(myPick));
  };

  return (
    <div className="presentaion">
      <div className="innerpresentation">
        <div className="dialogContainer">
          <div className="dialogPaper">
            <div>
              <div className="informations">
                <div className="productName">
                  <span className="name">{productData.goodsName}</span>
                </div>
                <div className="priceInformations">
                  <div>
                    <span className="price">{productData.goodsPrice}</span>
                  </div>
                  <div className="controlQuantity">
                    <button
                      type="button"
                      className="quantityDown"
                      aria-label="수량내리기"
                    ></button>
                    <div className="quantity">1</div>
                    <button
                      type="button"
                      className="quantityUp"
                      aria-label="수량올리기"
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
                      {productData.goodsPrice * 1}
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
                <span className="candelSpan">취소</span>
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
