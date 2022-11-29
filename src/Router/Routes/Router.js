import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import Main from '../../Layout/Main/Main';
import Blog from '../../Pages/Blog/Blog';
import AllBuyer from '../../Pages/Dashboard/AllBuyer/AllBuyer';
import AllSeller from '../../Pages/Dashboard/AllSeller/AllSeller';
import AddProduct from '../../Pages/Dashboard/Dashboard/AddaProduct/AddProduct';
import MyProduct from '../../Pages/Dashboard/Dashboard/MyProduct/MyProduct';
import Payment from '../../Pages/Dashboard/Dashboard/Payment/Payment';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import Category from '../../Pages/Home/Category/Category';
import ProductCard from '../../Pages/Home/Category/productCard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/Signup/SignUp';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/productcard',
                element: <ProductCard></ProductCard>
            },
            // {
            //     path: '/*',
            //     element: <Error
            // },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproduct',
                element: <MyProduct></MyProduct>
            },

            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
])

export default router;