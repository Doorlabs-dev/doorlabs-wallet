import { useCallback, useState } from 'react';

export type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
};

const useModal = () => {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => {
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  const toggle = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return {
    visible,
    open,
    close,
    toggle,
  };
};

export default useModal;
