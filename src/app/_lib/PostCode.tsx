'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import sty from '../(beforeLogin)/_components/signUp.module.css';

export interface IAddress {
  user_address?: string | any;
  setUserAddress: Dispatch<SetStateAction<string>>;
  onClickEvent(): void;
}

export default function PostCode({ user_address, setUserAddress, onClickEvent }: IAddress) {
  const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: any) => {
    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

    // 각 주소의 노출 규칙에 따라 주소를 조합한다.
    // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
    let addr = ''; // 주소 변수
    let extraAddr = ''; //참고 항목 주소
    const zcode = data.zonecode; // 우편번호

    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    if (data.userSelectedType === 'R') {
      // 사용자가 도로명 주소를 선택했을 경우
      addr = data.roadAddress;
    } else {
      // 사용자가 지번 주소를 선택했을 경우(J)
      addr = data.jibunAddress;
    }

    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
    if (data.userSelectedType === 'R') {
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
      }
      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraAddr !== '') {
        extraAddr = ' (' + extraAddr + ')';
      }
    }

    setUserAddress((p) => `[${zcode}] ${addr} ${extraAddr}`); // setAddress를 호출하여 부모 컴포넌트의 상태를 업데이트
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
    onClickEvent();
  };

  return (
    <button type='button' onClick={handleClick} className={sty.valid_check_btn}>
      주소검색
    </button>
  );
}
