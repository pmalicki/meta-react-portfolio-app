import {createContext, useContext, useState, useCallback, useEffect} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success',
    // Message to be displayed, can be any string
    message: '',
  });

  const onOpen = useCallback((type, message) => {
    setState({ isOpen: true, type, message });
  }, []);

  const onClose = useCallback(() => {
    setState({ isOpen: false, type: '', message: '' });
  }, []);

  // Auto-close alert after 3 seconds when opened
  useEffect(() => {
    if (!state.isOpen) return;
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [state.isOpen, onClose]);

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen,
        onClose,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
