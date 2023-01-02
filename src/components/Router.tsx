import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Brands from '../pages/Brands'
import Cars from '../pages/Cars'
import Products from '../pages/Products';
import Invoces from '../pages/Invoces';
import Accounting from '../pages/Accounting';
import Settings from '../pages/Settings';
import Inventories from '../pages/Inventories';

const Countries = React.lazy(() => import('../pages/Countries'));
function Router() {
    const routes = [
        {
            id: 0,
            name: Home,
            path: '/'
        },
        {
            id: 1,
            name: Brands,
            path: '/brands'
        },
        {
            id: 2,
            name: Cars,
            path: '/cars'
        },
        {
            id: 3,
            name: Countries,
            path: '/countries'
        },
        {
            id: 4,
            name: Products,
            path: '/products'
        },
        {
            id: 5,
            name: Invoces,
            path: '/invoces'
        },
        {
            id: 6,
            name: Accounting,
            path: '/accounting'
        },
        {
            id: 7,
            name: Settings,
            path: '/settings'
        },
        {
            id: 8,
            name: Inventories,
            path: '/inventories'
        },
        {
            id: 9,
            name: Login,
            path: '/login'
        },

    ]

    return (
        <Routes>
            {routes.map(Ele => (
                <Route key={Ele.id} element={
                    Ele.id == 9 ?
                        <Login />
                        :
                        <Layout>
                            <Suspense fallback={'Loading Some Thing'}>
                                <main className='tw-block'>
                                    <Ele.name />

                                </main>
                            </Suspense>
                        </Layout>
                } path={Ele.path} >
                </Route>
            ))}
        </Routes>
    )
}

export default Router