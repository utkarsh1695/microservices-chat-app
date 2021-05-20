import { useState } from 'react';
import style from './index.module.scss';
import { useParams } from 'react-router';
import Textarea from '../../components/Textarea';

const ChatWindow = () => {
  const [msg, setMsg] = useState('');

  return (
    <div className={style.container}>
      <div className={style.readingPane}>Hello</div>
      <div className={style.writingPane}>
        <Textarea onInputChange={setMsg} placeholder={"Enter Message"} value={msg} />
      </div>
    </div>
  )
}

export default ChatWindow;
