import styled from "styled-components";

const Review = () => {
  return (
    <ReviewDiv>
      <ReviewSection>
        <ReviewHeader>
          <ReviewH2>상품 후기</ReviewH2>
        </ReviewHeader>
        <ReviewUl>
          <ReviewLi>사진후기 100원, 글후기 50원 적립금 혜택이 있어요.</ReviewLi>
          <ReviewLi>
            퍼플, 더퍼플은 2배 적립 (사진 200원, 글 100원) / 주간 베스트 후기로
            선정 시 5,000원을 추가 적립
          </ReviewLi>
          <ReviewLi>
            후기 작성은 배송완료일로부터 30일 이내 가능합니다.
          </ReviewLi>
        </ReviewUl>
        <PhotoReivewDiv>
          <PhotoReviewButton></PhotoReviewButton>
          <PhotoReviewA>
            <PhotoReviewSpan>+더보기</PhotoReviewSpan>
          </PhotoReviewA>
        </PhotoReivewDiv>
        <TextReviewDiv>
          <TextReviewDivDiv></TextReviewDivDiv>
          <TotalAmount>
            <TotalSpan>총 5,519 개</TotalSpan>
            <TotalDiv>
              <TotalButton>추천순</TotalButton>
              <TotalButtonGray>최근등록순</TotalButtonGray>
            </TotalDiv>
          </TotalAmount>
          <NoticeDiv>
            <NoticeSpan>공지</NoticeSpan>
            <NoticeButton>상품 후기 적립금 정책 안내</NoticeButton>
          </NoticeDiv>
          <NoticeDiv>
            <NoticeSpan>공지</NoticeSpan>
            <NoticeButton>금주의 Best 후기 안내</NoticeButton>
          </NoticeDiv>
          <ReplyDiv>
            <ReplyDivFlex>
              <ReplyDivCenter>
                <ReplySpanPurple>베스트 </ReplySpanPurple>
                <ReplySpan>퍼플 </ReplySpan>
                <ReplySpan>유저이름 </ReplySpan>
              </ReplyDivCenter>
            </ReplyDivFlex>
          </ReplyDiv>
        </TextReviewDiv>
      </ReviewSection>
    </ReviewDiv>
  );
};

export default Review;

const ReviewDiv = styled.div`
  position: relative;
  width: 1010px;
  padding-bottom: 100px;
`;
const ReviewSection = styled.section`
  padding: 72px 0px;
  display: block;
`;
const ReviewHeader = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  min-height: 44px;
`;
const ReviewH2 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  color: rgb(51, 51, 51);
`;

const ReviewUl = styled.ul`
  padding: 7px 0px 40px 3px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: rgb(102, 102, 102);
`;

const PhotoReivewDiv = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 3px;
  width: 100%;
  border-radius: 6px;
  padding-bottom: 30px;
  overflow: hidden;
`;
const PhotoReviewButton = styled.button`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 124px;
  height: 124px;
  background: url(https://img-cf.kurly.com/shop/data/review/20221101/40902c30-b8b7-41ca-8023-b2afc07706b4.jpeg)
    0% 0% / cover no-repeat;
`;

const ReviewLi = styled.li`
  padding-left: 0px;
  font-weight: 500;
  color: rgb(102, 102, 102);
`;
const PhotoReviewDiv = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: 3px;
  width: 100%;
  border-radius: 6px;
  padding-bottom: 30px;
  overflow: hidden;
`;
const PhotoReivewButton = styled.button`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 124px;
  height: 124px;
  background: url(https://img-cf.kurly.com/shop/data/review/20221101/e45675db-7ef7-4689-b6a4-99c21894bf31.jpeg)
    0% 0% / cover no-repeat;
`;
const PhotoReviewA = styled.a`
  position: absolute;
  right: 0px;
  top: 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 124px;
  height: 124px;
  margin-bottom: 32px;
  border-radius: 0px 6px 6px 0px;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const PhotoReviewSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: rgb(255, 255, 255);
`;

const TextReviewDiv = styled.div`
  position: relative;
  width: 100%;
  margin-top: 34px;
  border-top: 1px solid rgb(51, 51, 51);
`;
const TextReviewDivDiv = styled.div`
  position: absolute;
  top: -170px;
  height: 0px;
`;
const TotalAmount = styled.div`
  position: absolute;
  top: -36px;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
`;
const TotalSpan = styled.span`
  position: absolute;
  left: 0px;
  font-weight: 500;
`;

const TotalDiv = styled.div`
  display: flex;
  gap: 17px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  font-weight: 400;
`;
const TotalButton = styled.button`
  position: relative;
  font-weight: 500;
  font-size: 12px;
  color: rgb(51, 51, 51);
`;
const TotalButtonGray = styled.button`
  position: relative;
  font-weight: 400;
  font-size: 12px;
  color: rgb(153, 153, 153);
`;
const NoticeDiv = styled.div`
  padding: 21px 20px 20px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;
const NoticeSpan = styled.span`
  display: inline-block;
  height: 22px;
  width: 42px;
  border-radius: 4px;
  background-color: rgb(244, 244, 244);
  font-size: 12px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  color: rgb(102, 102, 102);
  vertical-align: 2px;
`;
const NoticeButton = styled.button`
  margin-left: 9px;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: rgb(51, 51, 51);
`;

const ReplyDiv = styled.div`
  display: flex;
  padding: 30px 0px 19px 20px;
  border-bottom: 1px solid rgb(244, 244, 244);
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`;
const ReplyDivFlex = styled.div`
  flex: 0 0 225px;
`;
const ReplyDivCenter = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: -1px 0px 7px;
`;
const ReplySpanPurple = styled.span`
  display: inline-block;
  height: 18px;
  border: 1px solid rgb(95, 0, 128);
  border-radius: 3px;
  padding: 3px 4px 3px 5px;
  margin-right: 4px;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  word-break: keep-all;
  background-color: rgb(255, 255, 255);
  color: rgb(95, 0, 128);
  display: inline-block;
  height: 18px;
  border: 1px solid rgb(95, 0, 128);
  border-radius: 3px;
  padding: 3px 4px 3px 5px;
  margin-right: 4px;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  text-align: center;
  word-break: keep-all;
  background-color: rgb(255, 255, 255);
  color: rgb(95, 0, 128);
`;
const ReplySpan = styled.span`
  font-weight: 500;
`;
