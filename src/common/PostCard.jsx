import goodsSlice from "../modules/goodsSlice";
import styled from "styled-components";
import CartButton from "./CartButton";
const postCard = () => {
  return (
    <Container>
      <ImageContainer>
        <ProductImg
          alt="상품이미지"
          src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/165466863782l0.jpg"
        />{" "}
        <div>
          <CartButton />
        </div>
      </ImageContainer>

      {/* 위 상품이미지 */}
      <TextContainer>
        <ProductName>[하림] 안심 꿔바로우 450g</ProductName>
        <PriceContainer>
          <PriceColumn>
            <div>
              <Discount>10%</Discount>
              <Price>
                8910<span>원</span>
              </Price>
            </div>
            <PriceUndiscounted>
              9,900<span>원</span>
            </PriceUndiscounted>
          </PriceColumn>
        </PriceContainer>
      </TextContainer>
    </Container>
  );
};

export default postCard;

const Container = styled.div`
  color: rgb(51, 51, 51);
  cursor: pointer;
  width: 249px;
`;

const ImageContainer = styled.div`
  height: 320px;
  position: relative;
  background-color: rgb(245, 245, 245);
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
  vertical-align: top;
  max-width: 100%;
`;
const TextContainer = styled.div`
  position: relative;
  padding: 14px 10px 0px 0px;
`;
const ProductName = styled.h3`
  font-size: 16px;
  line-height: 1.45;
  font-weight: 400;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PriceColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const Discount = styled.span`
  margin-right: 7px;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  color: rgb(250, 98, 47);
`;
const Price = styled.span`
  font-size: 16px;
  font-weight: 800;
  line-height: 1.5;
  white-space: nowrap;
  color: rgb(51, 51, 51);
`;
const PriceUndiscounted = styled.span`
  color: rgb(181, 181, 181);
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-decoration: line-through;
  margin-top: 2px;
  white-space: nowrap;
`;
