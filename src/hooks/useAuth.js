import { useEffect, useState } from 'react';
import { TOKEN } from 'config';

/**
 *
 * @returns {Object<{
 *  data {String}
 *  hasData {Boolean}
 *  setData {Function<({String})>}
 * >}
 */
export default () => {
  const [data, setData] = useState(TOKEN);

  const hasData = !!data;

  useEffect(() => {}, []);

  return { data, setData, hasData };
};
