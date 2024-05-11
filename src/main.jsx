import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './provider/authProvider/AuthProvider'
import { ChakraProvider } from '@chakra-ui/react'
import ThemeControll from './component/themeController/ThemeControll'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<ThemeControll>

<RouterProvider router={router} ></RouterProvider>

</ThemeControll>
   

</AuthProvider>
  </React.StrictMode>,
)


