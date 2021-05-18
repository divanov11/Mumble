import { useEffect } from 'react';
/**
 * React Router v5 will keep pushing history when you try to click a link that navigates
 * the user to the same page they are currently on.  This will cause the user to have to
 * press the browser back button multiple times to leave the page.  This hook checks
 * if the user is navigating to the same page, and if so, do nothing.
 *
 * See https://github.com/divanov11/Mumble/issues/315 for more issue
 */
const useLocationBlocker = (history) => {
  const getLocationId = ({ pathname, search, hash }) => {
    return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
  };

  useEffect(
    () =>
      history.block(
        (location, action) =>
          action !== 'PUSH' || getLocationId(location) !== getLocationId(history.location),
      ),
    [history],
  );
};

export default useLocationBlocker;
