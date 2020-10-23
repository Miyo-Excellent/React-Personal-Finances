import { useEffect, useState } from 'react';
import { random } from 'lodash';

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
 *    value: {Number},
 *  }>>}
 *  hasData {Boolean}
 *  setData {React.Dispatch<React.SetStateAction<({Array<Object<{
 *    id: {String|Number},
 *    name: {String},
 *    value: {Number},
 *  }>>})>}
 * >}
 */
export default ({ demo = false, demoTimeoutInterval = 7000 }) => {
  const demoOne = [
    {
      id: 0,
      name: 'Total de ingresos mensuales',
      value: 4700000,
      date: new Date(2020, random(0, 11)),
    },
    { id: 1, name: 'Alquiler', value: -300000, date: new Date(2020, random(0, 11)) },
    { id: 2, name: 'Claro', value: -100000, date: new Date(2020, random(0, 11)) },
    { id: 3, name: 'EPM', value: -200000, date: new Date(2020, random(0, 11)) },
    { id: 4, name: 'Mis Babies', value: -500000, date: new Date(2020, random(0, 11)) },
    {
      id: 11,
      name: 'Gastos de autobús y taxi',
      value: -50000,
      date: new Date(2020, random(0, 11)),
    },
    { id: 12, name: 'Comestibles', value: -500000, date: new Date(2020, random(0, 11)) },
    { id: 13, name: 'Médico', value: -200000, date: new Date(2020, random(0, 11)) },
    { id: 14, name: 'Deuda -> Total', value: -700000, date: new Date(2020, random(0, 11)) },
    { id: 15, name: 'Deuda -> Gerald', value: -300000, date: new Date(2020, random(0, 11)) },
    {
      id: 16,
      name: 'Deuda -> Gerald Servicios',
      value: -100000,
      date: new Date(2020, random(0, 11)),
    },
    { id: 17, name: 'Deuda -> Mami Alquiler', value: -300000, date: new Date(2020, random(0, 11)) },
    { id: 18, name: 'Préstamos -> Total', value: 200000, date: new Date(2020, random(0, 11)) },
    { id: 19, name: 'Préstamos -> Manita', value: 200000, date: new Date(2020, random(0, 11)) },
    { id: 20, name: 'extras -> Total', value: 200000, date: new Date(2020, random(0, 11)) },
    { id: 21, name: 'extras -> Cornerstones', value: 500000, date: new Date(2020, random(0, 11)) },
    {
      id: 22,
      name: 'extras -> Sobrante Del Mes Anterior',
      value: 0,
      date: new Date(2020, random(0, 11)),
    },
  ];

  const demoTwo = [
    {
      id: 0,
      name: 'Total de ingresos mensuales',
      value: 4050000,
      date: new Date(2020, random(0, 11)),
    },
    { id: 1, name: 'Alquiler', value: -300000, date: new Date(2020, random(0, 11)) },
    { id: 2, name: 'Claro', value: -100000, date: new Date(2020, random(0, 11)) },
    { id: 3, name: 'EPM', value: -200000, date: new Date(2020, random(0, 11)) },
    { id: 4, name: 'Mis Babies', value: -500000, date: new Date(2020, random(0, 11)) },
    { id: 5, name: 'Gastos de autobús y taxi', value: -50000, date: new Date(2020, random(0, 11)) },
    { id: 6, name: 'Comestibles', value: -500000, date: new Date(2020, random(0, 11)) },
    { id: 7, name: 'Ropa', value: -800000, date: new Date(2020, random(0, 11)) },
    {
      id: 8,
      name: 'Regalos y donaciones -> Mariangel (Telefono [Full Camara])',
      value: -100000,
      date: new Date(2020, random(0, 11)),
    },
    {
      id: 9,
      name: 'Regalos y donaciones -> Robert (Playstation 4)',
      value: -100000,
      date: new Date(2020, random(0, 11)),
    },
    {
      id: 10,
      name: 'Regalos y donaciones -> Churu (Monitor LG ips 24 [Gamers Colombia])',
      value: -100000,
      date: new Date(2020, random(0, 11)),
    },
    { id: 11, name: 'Deuda -> Total', value: -700000, date: new Date(2020, random(0, 11)) },
    { id: 12, name: 'Deuda -> Gerald', value: -300000, date: new Date(2020, random(0, 11)) },
    { id: 13, name: 'Préstamos -> Total', value: 200000, date: new Date(2020, random(0, 11)) },
    { id: 14, name: 'Préstamos -> Manita', value: 200000, date: new Date(2020, random(0, 11)) },
    { id: 15, name: 'extras -> Total', value: 250000, date: new Date(2020, random(0, 11)) },
    {
      id: 16,
      name: 'extras -> Sobrante Del Mes Anterior',
      value: 250000,
      date: new Date(2020, random(0, 11)),
    },
  ];

  const [data, setData] = useState(demoOne);

  const hasData = !!data;

  let demoAlter = false;

  function timerFunc() {
    setData(demoAlter ? demoTwo : demoOne);

    demoAlter = !demoAlter;
  }

  useEffect(() => {
    let timer;

    if (demo) timer = setInterval(timerFunc, demoTimeoutInterval);

    return () => {
      if (demo && !!timer) clearInterval(timer);
    };
  }, []);

  return { data, setData, hasData };
};
