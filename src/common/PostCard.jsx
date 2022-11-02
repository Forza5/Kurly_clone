import React from "react";
import { AcyncGetGoods } from "../modules/goodsSlice";
import styled from "styled-components";
import CartButton from "./CartButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import next from "../pages/img/next_arrow.svg";
import prev from "../pages/img/prev-arrow.png";
import { useNavigate } from "react-router-dom";

const PostCard = ({ number }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DetailData = useSelector((state) => state.goods.data);
  // const slide1 = DetailData.splice(0, 8);
  // console.log(slide1);
  useEffect(() => {
    dispatch(AcyncGetGoods());
  }, []);
  let a = { number }.number;

  const settings = {
    dots: false, // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    slidesToShow: 4, //4장씩 보이게 해주세요
    slidesToScroll: 4, //4장씩 넘어가세요
    nextArrow: (
      <NextBtn className="nexts">
        <img src={next} alt="다음" />
      </NextBtn>
    ),
    prevArrow: (
      <PreBtn className="prevs">
        <img src={prev} alt="이전" />
      </PreBtn>
    ),
  };

  return (
    <PostSlider {...settings}>
      {DetailData.map((item, index) => {
        return (
          8 * (a - 1) <= index &&
          index < 8 * a - 1 && (
            <Container key={item.goodsId}>
              <ImageContainer>
                <ProductImg
                  onClick={() => navigate(`/detail/${item.goodsId}`)}
                  alt="상품이미지"
                  src={item.goodsImage}
                />{" "}
                <div>
                  <CartButton paramId={item.goodsId} />
                </div>
              </ImageContainer>

              {/* 위 상품이미지 */}
              <TextContainer
                onClick={() => navigate(`/detail/${item.goodsId}`)}
              >
                <ProductName>{item.goodsName}</ProductName>
                <PriceContainer>
                  <PriceColumn>
                    <div>
                      <Discount>{item.goodsSale}%</Discount>
                      <Price>
                        {(item.goodsPrice * item.goodsSale) / 100}
                        <span>원</span>
                      </Price>
                    </div>
                    <PriceUndiscounted>
                      {item.Price}
                      <span>원</span>
                    </PriceUndiscounted>
                  </PriceColumn>
                </PriceContainer>
              </TextContainer>
            </Container>
          )
        );
      })}
    </PostSlider>
  );
};

export default PostCard;
const PostSlider = styled(Slider)`
  position: relative;
  transition: all 0.3s;
`;

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
const PreBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20%;
  z-index: 999;
  cursor: pointer;
  height: 52px;
  opacity: 0;
  transition: all 0.3s;
`;

const NextBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20%;
  z-index: 999;
  cursor: pointer;
  height: 52px;
  opacity: 0;
  transition: all 0.3s;
`;
