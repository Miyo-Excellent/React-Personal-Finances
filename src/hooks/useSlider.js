import { useEffect, useState } from 'react';

/**
 *
 * @returns {Object<{
 *  hasData {Boolean}
 *  defaultData {String|Number}
 *  min {String|Number}
 *  step {String|Number}
 *  max {String|Number}
 *  data {String|Number}
 *  setDefaultData {Function<({Number})>}
 *  setMin {Function<({Number})>}
 *  setStep {Function<({Number})>}
 *  setMax {Function<({Number})>}
 *  setData {Function<({Number})>}
 * >}
 */
export default () => {
  const [defaultData, setDefaultData] = useState(1);
  const [min, setMin] = useState(1);
  const [step, setStep] = useState(1);
  const [max, setMax] = useState(12);
  const [data, setData] = useState(defaultData);

  const hasData = !!data;

  useEffect(() => {}, [data]);

  return {
    data,
    setData,
    defaultData,
    setDefaultData,
    hasData,
    min,
    setMin,
    step,
    setStep,
    max,
    setMax,
  };
};
