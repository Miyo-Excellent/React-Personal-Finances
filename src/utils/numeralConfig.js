import { locale, register } from 'numeral';
import { LOCALE } from '../config';

export default () => {
  register('locale', LOCALE, {
    delimiters: {
      thousands: ' ',
      decimal: ',',
    },
    abbreviations: {
      thousand: 'K',
      million: 'M',
      billion: 'B',
      trillion: 'T',
    },
    ordinal: (number) => (number === 1 ? 'er' : 'ème'),
    currency: {
      symbol: '$',
    },
  });

  locale(LOCALE);
};
