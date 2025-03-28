import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import {ShopLazy} from 'components/Shoplazy'
import {AboutLazy} from 'components/Aboutlazy'
import { Suspense } from 'react'

import {App} from './App'

const root = createRoot(document.getElementById('root'))
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/about",
                element: <Suspense fallback={<p>Loading...</p>}><AboutLazy/></Suspense>
            },
            {
                path: "/shop",
                element: <Suspense fallback={<p>Loading...</p>}><ShopLazy/></Suspense>
            }
        ]
    }
])
root.render(
    <RouterProvider router={router}/>
)