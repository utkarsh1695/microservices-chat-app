import { useState } from 'react';
import style from './index.module.scss';
import { useParams } from 'react-router';
import Textarea from '../../components/Textarea';

interface IRouteSlug {
  userId: string;
}

const ChatWindow = () => {
  const { userId } = useParams() as IRouteSlug;

  const [msg, setMsg] = useState('');

  return (
    <div className={style.container}>
      <div className={style.readingPane}>Hello {userId}</div>
      <div className={style.writingPane}>
        <Textarea onInputChange={setMsg} placeholder={"Enter Message"} value={msg} />
      </div>
    </div>
  )
}

export default ChatWindow;
