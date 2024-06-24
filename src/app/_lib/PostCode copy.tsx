import React, { Dispatch, SetStateAction } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import sty from '../(beforeLogin)/_components/signUp.module.css'

export interface IAddress {
  user_address?: string | any;
  setUserAddress: Dispatch<SetStateAction<string>>;
  onClickEvent(): void;
}

export default function PostCode({ user_address, setUserAddress, onClickEvent }: IAddress) {
  const postcodeScriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';
    let localAddress = data.sido + ' ' + data.sigungu;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress = fullAddress.replace(localAddress, '');
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
    setUserAddress(fullAddress); // setAddress를 호출하여 부모 컴포넌트의 상태를 업데이트
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
