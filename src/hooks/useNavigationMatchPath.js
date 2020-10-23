import { useEffect, useState } from 'react';

/**
 *
 * @param match {Object}
 * @returns {Object<{
 *  path: string,
 *  hasPath: boolean,
 *  setPath: React.Dispatch<React.SetStateAction<string>>
 * }>}
 */
export default (match = {}) => {
  const [path, setPath] = useState('');

  const hasPath = !!path;

  useEffect(() => {
    const { path: rootPath = '' } = match;

    setPath(rootPath);
  }, [match]);

  return { path, setPath, hasPath };
};
