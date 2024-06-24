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
    const zcode = data.zonecode; // 우편번호


    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    if (data.userSelectedType === 'R') {
      // 사용자가 도로명 주소를 선택했을 경우
      addr = data.roadAddress;
    } else {
      // 사용자가 지번 주소를 선택했을 경우(J)
      addr = data.jibunAddress;
    }

    setUserAddress(`[${zcode}] ${addr}`); // setAddress를 호출하여 부모 컴포넌트의 상태를 업데이트
  };

  const handleClick = () => {
    onClickEvent();
    open({ onComplete: handleComplete });
  };

  return (
    <button type='button' onClick={handleClick} className={sty.valid_check_btn}>
      주소검색
    </button>
  );
}
