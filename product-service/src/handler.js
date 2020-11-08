import getProductById from './postgress-handlers/get-by-id';
import getProductsList from './postgress-handlers/get-all';
import createDB from './postgress-handlers/create-db';
import initDB from './postgress-handlers/init-db';
import dropDB from './postgress-handlers/drop-db';

export {
  getProductById, getProductsList, createDB, initDB, dropDB,
};
