import React from "react";
import DaumPostcode from "react-daum-postcode";
import { useDispatch } from "react-redux";
import addAddress from "../../modules/signupSlice";

const PopupPostCode = ({ closePostCode, parentFunction }) => {
  const dispatch = useDispatch();
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용

  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";
    const zonecode = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    const paylaod = { fullAddress, zonecode };
    console.log(data);
    dispatch(addAddress(fullAddress));
    console.log(data.zonecode);
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "20%",
    width: "600px",
    height: "600px",
    padding: "7px",
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
      {/* 닫기버튼 */}
      <button
        type="button"
        onClick={() => {
          closePostCode();
        }}
        className="postCode_btn"
      >
        닫기
      </button>
    </div>
  );
};

export default PopupPostCode;
