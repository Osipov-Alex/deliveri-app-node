/* eslint-disable import/extensions */
import { Router } from 'express';
import ProductsController from '../controllers/ProductsController.js';
import UserController from '../controllers/UserController.js';
import ShopController from '../controllers/ShopController.js';
import OrderHistoryController from '../controllers/OrderHistoryController.js';

const router = new Router();

router.post('/products', ProductsController.create);
router.get('/products', ProductsController.getAll);
router.get('/products/:id', ProductsController.getOne);
router.put('/products', ProductsController.update);
router.delete('/products/:id', ProductsController.delete);

router.post('/users', UserController.create);
router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getOne);
router.put('/users', UserController.update);
router.delete('/users/:id', UserController.delete);

router.post('/shops', ShopController.create);
router.get('/shops', ShopController.getAll);
router.get('/shops/:id', ShopController.getOne);
router.put('/shops', ShopController.update);
router.delete('/shops/:id', ShopController.delete);

router.post('/order', OrderHistoryController.create);
router.get('/orders', OrderHistoryController.getAll);
router.get('/order/:id', OrderHistoryController.getOne);
router.put('/order', OrderHistoryController.update);
router.delete('/order/:id', OrderHistoryController.delete);

export default router;
