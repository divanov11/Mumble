import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RestoreScroll = () => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default RestoreScroll;
