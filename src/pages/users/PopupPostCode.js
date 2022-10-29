import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from "react-redux";
import addAddress from "../../modules/signupSlice";

const PopupPostCode = ({ onClose, setAddress }) => {
  // const address = props.address
  // const setAddress = props.setAddress

  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용

  //   const handlePostCode = (data) => {
  //     let fullAddress = data.address;
  //     let extraAddress = "";
  //     const zonecode = data.zonecode;

  //     if (data.addressType === "R") {
  //       if (data.bname !== "") {
  //         extraAddress += data.bname;
  //       }
  //       if (data.buildingName !== "") {
  //         extraAddress +=
  //           extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
  //       }
  //       fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
  //     }

  //     // console.log(data);
  //     setAddress(fullAddress);
  //     // props();
  //   };

  const postCodeStyle = {
    display: "block",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "700px",
    padding: "7px",
  };

  return (
    <div style={postCodeStyle} className="addressclose">
      <button
        type="button"
        onClick={() => {
          onClose();
        }}
        className="postCode_btn"
      >
        닫기
      </button>
      <DaumPostcode
        style={{ height: "100%" }}
        onComplete={(data) => setAddress(data.address)}
        autoClose={true}
      />
      {/* 닫기버튼 */}
    </div>
  );
};

export default PopupPostCode;
