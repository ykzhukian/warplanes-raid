import StartPage from './Start';
import GamePage from './Game';
import { PAGE } from '../config/pages';

const pageMap = {
  [PAGE.start]: StartPage,
  [PAGE.game]: GamePage,
};

export const getPageComponent = (pageName: string) => pageMap[pageName];
