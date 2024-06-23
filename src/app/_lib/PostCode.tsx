import React, { Dispatch, SetStateAction } from 'react';
import DaumPostcodeEmbed from 'react-daum-postcode';

export interface IAddress {
  user_address?: string;
  setUserAddress: Dispatch<SetStateAction<string>>;
  setSearchAddress: Dispatch<SetStateAction<boolean>>;
}

export default function Postcode({ user_address, setUserAddress, setSearchAddress }: IAddress) {
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setUserAddress(fullAddress);
    setSearchAddress((prev) => !prev);
  };

  return <DaumPostcodeEmbed onComplete={handleComplete} {...{ height: '100%', width: '100%' }} />;
}