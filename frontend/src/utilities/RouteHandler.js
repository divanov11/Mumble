import { useHistory } from 'react-router';
import { useLocationBlocker } from '../hooks';

const RouteHandler = ({ children }) => {
  const history = useHistory();
  useLocationBlocker(history);
  return <>{children}</>;
};

export default RouteHandler;
