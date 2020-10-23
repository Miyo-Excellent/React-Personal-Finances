import { useEffect, useState } from 'react';

/**
 *
 * @param match {Object}
 * @returns {Object<{
 *  data: string,
 *  setData: boolean,
 *  hasData: React.Dispatch<React.SetStateAction<string>>
 * }>}
 */
export default (location = {}) => {
  const [data, setData] = useState('');

  const hasData = !!data;

  useEffect(() => {
    const { pathname = '' } = location;

    setData(pathname);
  }, [location]);

  return { data, setData, hasData };
};
