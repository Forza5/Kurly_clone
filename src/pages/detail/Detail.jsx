import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AcyncGetOneGood } from "../../modules/goodsSlice";
import { useSelector } from "react-redux";
import "../css/reset.css";
import jwt_decode from "jwt-decode";
import { AcyncPostCart } from "../../modules/cartSlice";
import Review from "./Review";

const Detail = () => {
  const dispatch = useDispatch();

  //장바구니에 넣을 userId 토큰에서 불러오기
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

  //렌더링
  const { id } = useParams();
  useEffect(() => {
    dispatch(AcyncGetOneGood(id));
  }, []);
  //state에서 값 불러오기
  const [productData] = useSelector((state) => state.goods?.data);
  //수량 증감
  const [number, setNumber] = useState(1);
  const onDecrease = () => {
    setNumber((prevNumber) => (prevNumber <= 1 ? 1 : prevNumber - 1));
  };
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  //장바구니에 넣기
  const myPick = {
    userId: token?.userId,
    productId: productData?.goodsId,
    quantity: number,
    price: productData?.goodsPrice,
    productName: productData?.goodsName,
  };
  const onPostCart = () => {
    dispatch(AcyncPostCart(myPick));
    console.log("myPick", myPick);
  };

  //천단위 반점 찍어주기
  let price = productData?.goodsPrice;
  let priceString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let sum = price * number;
  let totalPrice = sum?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  console.log(productData?.goodsImage);
  return (
    <Page>
      <Articles>
        <DetailImg src={productData?.goodsImage} />
        <Inform>
          <div>
            <Delivery>샛별배송</Delivery>
            <FlexColumn>
              <BigName>
                <NameH2>{productData?.goodsName}</NameH2>
                <ShareButton></ShareButton>
              </BigName>

              {/* <NameP>맛이 차오른 제철 가리비</NameP> */}
            </FlexColumn>
          </div>
          <Price>
            <PriceSpan1>{priceString}</PriceSpan1>
            <PriceSpan2>원</PriceSpan2>
          </Price>
          <Accumulate>로그인 후, 적립 헤택이 제공됩니다.</Accumulate>
          <Desc>
            <DescDl>
              <DescDt>배송</DescDt>
              <DescDd>
                <DescP>{productData?.delivery}</DescP>
                <DescP2>
                  23시 전 주문 시 내일 아침 7시 전 도착 (대구·부산·울산 샛별배송
                  운영시간 별도 확인)
                </DescP2>
              </DescDd>
            </DescDl>
            <DescDl>
              <DescDt>판매자</DescDt>
              <DescDd>
                <DescP>{productData?.seller}</DescP>
              </DescDd>
            </DescDl>
            <DescDl>
              <DescDt>포장타입</DescDt>
              <DescDd>
                <DescP>{productData?.deliveryType}</DescP>
              </DescDd>
            </DescDl>
            <DescDl>
              <DescDt>판매단위</DescDt>
              <DescDd>
                <DescP>{productData?.salesUnit}</DescP>
              </DescDd>
            </DescDl>
            <DescDl>
              <DescDt>중량/용량</DescDt>
              <DescDd>
                <DescP>{productData?.volume}</DescP>
              </DescDd>
            </DescDl>
            <DescDl>
              <DescDt>원산지</DescDt>
              <DescDd>
                <DescP>{productData?.origin}</DescP>
              </DescDd>
            </DescDl>
            <DescDl>
              <DescDt>알레르기정보</DescDt>
              <DescDd>
                <DescP>{productData?.allergy}</DescP>
              </DescDd>
            </DescDl>
            <DescDl>
              <DescDt>유통기한(또는 소비기한)정보</DescDt>
              <DescDd>
                <DescP>{productData?.shelfLife}</DescP>
              </DescDd>
            </DescDl>
          </Desc>
          <ProductSelect>
            <ProductBox>
              <ProductDl>
                <ProductDt>상품선택</ProductDt>
                <ProductDiv>
                  <ProductName>
                    <ProductSpan>{productData?.goodsName}</ProductSpan>
                  </ProductName>
                  <CounterBox>
                    <Counter>
                      <CounterDown onClick={onDecrease}></CounterDown>
                      <Num>{number}</Num>
                      <CounterUp onClick={onIncrease}></CounterUp>
                    </Counter>
                    <div>
                      <PriceSpan>
                        {price}
                        <span>원</span>
                      </PriceSpan>
                    </div>
                  </CounterBox>
                </ProductDiv>
              </ProductDl>
            </ProductBox>
            <TotalPriceBox>
              <Box>
                <InnerBox>
                  <PriceSpans>총 상품금액</PriceSpans>
                  <TotalPrice> {totalPrice}</TotalPrice>
                  <WonSpan>원</WonSpan>
                </InnerBox>
                <DivFlex>
                  <YellowSpan>적립</YellowSpan>
                  <Loginspan>로그인후,적립 혜택 제공</Loginspan>
                </DivFlex>{" "}
              </Box>
            </TotalPriceBox>
            <ButtonBox>
              <HeartButton>
                <HeartSpan>
                  <HeartImg src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K" />
                </HeartSpan>
              </HeartButton>
              <BellButton>
                <BellSpan>
                  <BellImg src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
                </BellSpan>
              </BellButton>
              <AddDiv>
                <AddButton>
                  <AddSpan onClick={onPostCart}>장바구니 담기</AddSpan>
                </AddButton>
              </AddDiv>
            </ButtonBox>
          </ProductSelect>
        </Inform>
      </Articles>
      <Review />
    </Page>
  );
};

export default Detail;

const Page = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
  padding-top: 30px;
`;
const Articles = styled.article`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  font-family: "Noto Sans";
`;
const DetailImg = styled.img`
  width: 430px;
  height: 552px;
`;
const Inform = styled.div`
  width: 560px;
`;
const Delivery = styled.div`
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: -0.5px;
  color: rgb(153, 153, 153);
  margin-bottom: 6px;
  width: 500px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const BigName = styled.div`
  display: flex;
  flex: 1 1 0%;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const NameH2 = styled.h2`
  width: 500px;
  font-weight: 500;
  font-size: 24px;
  color: rgb(51, 51, 51);
  line-height: 34px;
  letter-spacing: -0.5px;
  word-break: keep-all;
  margin-right: 20px;
`;
const ShareButton = styled.button`
  width: 40px;
  height: 40px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)
    50% 50% no-repeat;
`;
const NameP = styled.div`
  padding-top: 5px;
  font-size: 14px;
  color: rgb(181, 181, 181);
  line-height: 19px;
  letter-spacing: -0.5px;
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-top: 19px;
  font-weight: bold;
  line-height: 30px;
  letter-spacing: -0.5px;
`;
const PriceSpan1 = styled.div`
  padding-right: 4px;
  font-size: 28px;
  color: rgb(51, 51, 51);
`;
const PriceSpan2 = styled.div`
  display: inline-block;
  position: relative;
  top: 3px;
  font-size: 18px;
  color: rgb(51, 51, 51);
  vertical-align: top;
`;
const Accumulate = styled.div`
  font-size: 14px;
  color: rgb(95, 0, 128);
  line-height: 19px;
  height: 19px;
  letter-spacing: -0.5px;
  margin-top: 14px;
`;
const Desc = styled.div`
  margin-top: 20px;
`;
const DescDl = styled.dl`
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  padding: 17px 0px 18px;
  border-top: 1px solid rgb(244, 244, 244);
  font-size: 14px;
  letter-spacing: -0.5px;
`;
const DescDt = styled.dt`
  position: relative;
  top: 1px;
  width: 128px;
  height: 100%;
  color: rgb(102, 102, 102);
  line-height: 19px;
`;
const DescDd = styled.dd`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;
const DescP = styled.p`
  color: rgb(51, 51, 51);
  line-height: 19px;
  white-space: pre-line;
  word-break: break-all;
  overflow: hidden;
`;
const DescP2 = styled.p`
  display: block;
  font-size: 12px;
  color: rgb(102, 102, 102);
  padding-top: 4px;
  line-height: 16px;
  white-space: pre-line;
`;
const ProductSelect = styled.div`
  padding-bottom: 40px;
`;
const ProductBox = styled.div`
  border-bottom: 1px solid #f4f4f4;
`;
const ProductDl = styled.dl`
  display: flex;
  flex: 1 1 0%;
  flex-direction: row;
  align-items: flex-start;
  overflow: hidden;
  width: 100%;
  padding: 17px 0px 18px;
  border-top: 1px solid rgb(244, 244, 244);
  font-size: 14px;
  letter-spacing: -0.5px;
`;
const ProductDt = styled.dt`
  position: relative;
  top: 1px;
  width: 128px;
  height: 100%;
  color: rgb(102, 102, 102);
  line-height: 19px;
`;

const ProductDiv = styled.div`
  border-bottom: 1px solid rgb(244, 244, 244);

  width: 100%;
`;
const ProductName = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
`;
const ProductSpan = styled.div`
  line-height: 16px;
  width: 320px;
  color: rgb(51, 51, 51);
`;
const CounterBox = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 12px;
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
const PriceSpan = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: rgb(51, 51, 51);
  padding-right: 5px;
`;
const TotalPriceBox = styled.div`
  padding-top: 30px;
`;
const Box = styled.div`
  letter-spacing: -0.5px;
`;
const InnerBox = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  align-items: flex-end;
`;
const PriceSpans = styled.span`
  padding-right: 12px;
  font-size: 13px;
  font-weight: 500;
  color: rgb(51, 51, 51);
  line-height: 20px;
`;
const TotalPrice = styled.span`
  font-weight: bold;
  font-size: 32px;
  color: rgb(51, 51, 51);
  line-height: 36px;
`;
const WonSpan = styled.span`
  padding-left: 5px;
  font-size: 20px;
  font-weight: 600;
  color: rgb(51, 51, 51);
  line-height: 30px;
`;
const DivFlex = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding-top: 10px;
  align-items: center;
`;
const YellowSpan = styled.span`
  background-color: rgb(255, 191, 0);
  margin: 1px 6px 0px 0px;
  padding: 0px 7px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  line-height: 20px;
`;
const Loginspan = styled.span`
  color: rgb(102, 102, 102);
  font-size: 13px;
`;
const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;
const HeartButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 56px;
  height: 56px;
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
`;
const HeartSpan = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
`;
const HeartImg = styled.img`
  border: 0;
  vertical-align: top;
`;

const BellButton = styled.button`
  border-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  display: block;
  cursor: default;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 56px;
  height: 56px;
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
`;
const BellSpan = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
`;
const BellImg = styled.img`
  border: 0;
  vertical-align: top;
`;

const AddDiv = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
`;
const AddButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 52px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: rgb(95, 0, 128);
  border: 0px none;
  font-weight: 500;
`;
const AddSpan = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
`;
