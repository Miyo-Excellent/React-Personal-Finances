import { useEffect, useState } from 'react';

/**
 *
 * @param props {Object<{
 *   demo: {Boolean}
 *   demoTimeoutInterval: {Number}
 * }>}
 *
 * @returns {Object<{
 *  data {Array<Object<{
 *    id: {String|Number},
 *    name: {String},
 *    value: {Number}
 *  }>>}
 *  hasData {Boolean}
 *  setData {React.Dispatch<React.SetStateAction<({Array<Object<{
 *    id: {String|Number},
 *    name: {String},
 *    value: {Number}
 *  }>>})>}
 * >}
 */
export default ({ demo = false, demoTimeoutInterval = 1500, initialState = [] }) => {
  let dataDemo = [
    { id: 0, name: 'Ingresos', value: 4250000, progress: 0 },
    { id: 1, name: 'Gastos', value: 4200000, progress: 0 },
    { id: 2, name: 'Diferencia', value: 50000, progress: 0 },
  ];

  const [data, setData] = useState(!!demo ? dataDemo : initialState);

  const hasData = !!data;

  const timerFunc = () => {
    dataDemo = dataDemo.map((item) => ({
      ...item,
      progress: item.progress >= 100 ? 10 : item.progress + 10,
    }));

    setData(dataDemo);
  };

  useEffect(() => {
    let timer;

    if (demo) {
      timer = setInterval(timerFunc, demoTimeoutInterval);
    }

    return () => {
      if (demo && !!timer) clearInterval(timer);
    };
  }, []);

  return { data, setData, hasData };
};
