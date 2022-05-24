import warning from '../../icons/warning.svg';
import success from '../../icons/success.svg';
import error from '../../icons/error.svg';
import close from '../../icons/close.svg';

const Icon = ({ variant, w, h }) => {
  const getIcon = () => {
    switch (variant) {
      case 'warning':
        return warning;
      case 'success':
        return success;
      case 'error':
        return error;
      case 'close':
        return close;
      default:
        return null;
    }
  };
  return (
    <img width={w ? w : 96} height={h ? h : 96} src={getIcon()} alt="icon" />
  );
};

export default Icon;
