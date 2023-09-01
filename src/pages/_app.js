
import { store, wrapper } from '@/redux/store';
import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App (
  {  Component,pageProps }
  ) {

    const getLayout = Component.getLayout || ((page) => page);

  return(
  <SessionProvider session={pageProps.session}>
   <Provider store={store}>
   {getLayout(<Component {...pageProps} />)}
   </Provider>
   <ToastContainer/>
   </SessionProvider>
   )
}

wrapper.withRedux(App)