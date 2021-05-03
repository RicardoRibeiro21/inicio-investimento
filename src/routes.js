import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Cadastrar from './pages/Cadastro';
import ListaDespesas from './pages/ListaDespesas';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Cadastrar} path="/" exact />     
            <Route component={ListaDespesas} path="/lista-despesas" exact />            
        </BrowserRouter>
    )
}

export default Routes;