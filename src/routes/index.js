import dashboard from './dashboard';
import root from './root';

const all = [...root, ...dashboard].map((el = {}, index = 0) => ({ ...el, id: index }));

export { all, dashboard, root };
