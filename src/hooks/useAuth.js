import { useEffect, useState } from 'react';

/**
 *
 * @returns {Object<{
 *  data {String}
 *  hasData {Boolean}
 *  setData {Function<({String})>}
 * >}
 */
export default () => {
  const [data, setData] = useState('Token Test');

  const hasData = !!data;

  useEffect(() => {}, []);

  return { data, setData, hasData };
};
