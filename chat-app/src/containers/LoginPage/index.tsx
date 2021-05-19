import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { validations } from '../../validations';
import style from './index.module.scss';

const LoginPage = () => {
  const [mobile, setMobile] = useState('');

  const onProceed = () => console.log("Proceed");
  return (
    <div className={style.container}>
      <div className={style.userImage}>
        {/* img tag here */}
      </div>
      <div className={style.mobileInput}>
        <Input
          value={mobile}
          placeholder={'Mobile Number'}
          onChange={setMobile}
          validations={[validations.mobile]}
        />
      </div>
      <Button onClick={onProceed} roundBorders>{'Proceed'}</Button>
    </div>
  )
}

export default LoginPage;
