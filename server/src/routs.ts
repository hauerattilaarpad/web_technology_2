import express from "express";
import { ComputerController } from "./controller/computer.controller";
import { CustomerController } from "./controller/customer.controller";
import { PurchaseController } from "./controller/purchase.controller";
import { UserController } from "./controller/user.controller";
import { checkUser } from "./protect-routes";

export function getRouter() {
    const router = express.Router();
    const purchaseController = new PurchaseController();
    const computercontroller = new ComputerController();
    const customercontroller = new CustomerController();
    const userController = new UserController();

    router.get('/user',checkUser, userController.getAll);
    router.get('/user/:id',checkUser, userController.getOne);
    router.post('/user', userController.create);
    router.post('/user/login', userController.login);
    router.put('/user', checkUser, userController.update);
    router.delete('/user/:id', checkUser, userController.delete);

    router.get('/purchase', checkUser, purchaseController.getAll);
    router.get('/purchase/:id', checkUser, purchaseController.getOne);
    router.post('/purchase', purchaseController.create);
    router.put('/purchase', checkUser, purchaseController.update);
    router.delete('/purchase/:id', checkUser, purchaseController.delete);

    router.get('/computer', computercontroller.getAll);
    router.get('/computer/:id', computercontroller.getOne);
    router.post('/computer', checkUser, computercontroller.create);
    router.put('/computer', checkUser, computercontroller.update);
    router.delete('/computer/:id', checkUser, computercontroller.delete);

    router.get('/customer', checkUser, customercontroller.getAll);
    router.get('/customer/:id', checkUser, customercontroller.getOne);
    router.post('/customer', customercontroller.create);
    router.put('/customer', checkUser, customercontroller.update);
    router.delete('/customer/:id', checkUser, customercontroller.delete);

    return router;
}