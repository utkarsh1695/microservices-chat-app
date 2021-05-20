import style from './index.module.scss';

interface IProps {
  fullScreen: boolean;
}

const PulseLoader = ({ fullScreen }: IProps) => {
  return (
    <div className={`${style.container} ${fullScreen ? style.fullScreen : ""}`}>
      Loading...
    </div>
  )
}

export default PulseLoader
