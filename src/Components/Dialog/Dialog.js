import { useState } from 'react';

import styles from './Dialog.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

const Dialog = ({
  variant,
  title,
  description,
  onClose,
  onConfirm,
  children,
  show,
}) => {
  const [isOpen, setIsOpen] = useState(show ? show : false);

  const toggleShow = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    onClose && onClose();
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm && onConfirm();
    setIsOpen(false);
  };

  if (!isOpen) {
    return <div onClick={toggleShow}>{children}</div>;
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <span className={styles.close} onClick={handleClose}>
          <Icon variant="close" w={44} h={44} />
        </span>
        <div className={styles.body}>
          <Icon variant={variant} />
          <span className={styles.title}>{title}</span>
          <p className={styles.description}>{description}</p>

          {variant === 'warning' && (
            <>
              <div className={styles.buttons}>
                <Button
                  variant="solid"
                  text="Confirm"
                  onClick={handleConfirm}
                />
                <Button variant="outline" text="Cancel" onClick={handleClose} />
              </div>
            </>
          )}
          {variant === 'success' && (
            <>
              <div className={styles.buttons}>
                <Button
                  variant="solid"
                  text="Confirm"
                  onClick={handleConfirm}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
