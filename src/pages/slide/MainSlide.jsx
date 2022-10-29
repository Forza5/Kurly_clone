import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import next from "../img/next_arrow.svg";
import prev from "../img/prev-arrow.png";
import { Link } from "react-router-dom";

const main1 = require("../img/main1.png");
const main2 = require("../img/main2.png");
const main3 = require("../img/main3.png");
const main4 = require("../img/main4.png");
const main5 = require("../img/main5.png");
const main6 = require("../img/main6.png");
const main7 = require("../img/main7.png");
const main8 = require("../img/main8.png");
const main9 = require("../img/main9.png");
const main10 = require("../img/main10.png");
const main11 = require("../img/main11.png");
const main12 = require("../img/main12.png");
const main13 = require("../img/main13.png");
const main14 = require("../img/main14.png");

const mainItem = [
  { id: 0, url: main1 },
  { id: 1, url: main2 },
  { id: 2, url: main3 },
  { id: 3, url: main4 },
  { id: 4, url: main5 },
  { id: 5, url: main6 },
  { id: 6, url: main7 },
  { id: 7, url: main8 },
  { id: 8, url: main9 },
  { id: 9, url: main10 },
  { id: 10, url: main11 },
  { id: 11, url: main12 },
  { id: 12, url: main13 },
  { id: 13, url: main14 },
];

export default class MainSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
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
      <StyleSlider {...settings}>
        {mainItem.map((item) => {
          return (
            <Link to="/" key={item.id}>
              <div>
                <Images src={item.url} alt="슬라이드 이미지" />
              </div>
            </Link>
          );
        })}
      </StyleSlider>
    );
  }
}

const StyleSlider = styled(Slider)`
  position: relative;
  transition: all 0.3s;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  &:hover {
    .slick-arrow {
      opacity: 1;
    }
  }
`;

const Images = styled.img`
  width: 100%;
  height: 370px;
`;

const PreBtn = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20%;
  z-index: 7;
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
  z-index: 7;
  cursor: pointer;
  height: 52px;
  opacity: 0;
  transition: all 0.3s;
`;
