import { useEffect, useState } from 'react';
import * as icons from '@material-ui/icons';

/**
 *
 * @returns {Object<{
 *  data {Array<Object<{
 *    id: {String|Number},
 *    icon: {JSX.Element},
 *  }>>}
 *  hasData {Boolean}
 *  setData {React.Dispatch<React.SetStateAction<({Array<Object<{
 *    id: {String|Number},
 *    icon: {JSX.Element},
 *  }>>})>}
 * >}
 */
export default () => {
  const [data, setData] = useState([
    { id: 0, icon: icons.NotificationsNoneTwoTone },
    { id: 1, icon: icons.PersonOutlineTwoTone },
    { id: 2, icon: icons.EmailTwoTone },
  ]);

  const hasData = !!data;

  useEffect(() => {}, []);

  return { data, setData, hasData };
};
