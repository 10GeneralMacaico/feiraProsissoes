import express from 'express'
import cadastroController from './Controller/cadastroController.js';
import loginController from './Controller/loginController.js';
import QRcodeController from './Controller/QRcodeController.js';

export function AddRotas(api){
    api.use(loginController);
    api.use(cadastroController);
    api.use(QRcodeController);

    api.use('/public/storage', express.static('/public/storage'));
}