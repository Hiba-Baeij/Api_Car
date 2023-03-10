import React, { Suspense, useContext, useEffect } from 'react';
import { fetchBrands } from '@/store/brands';
import Router from './components/Router';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom'
import { customTheme } from './theme';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer  } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient()
const stylisPlugins = [prefixer];
const htmlDir = document.querySelector('html');
if (htmlDir?.dir === 'rtl') {
  stylisPlugins.push(rtlPlugin)
}




const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins,

});
function RTL(props: any) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}
function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchBrands());
    // dispatch(fetchCountries());
  }, [])

  return (
    <div className="app tw-w-full">
      <ThemeProvider theme={customTheme}>
        <QueryClientProvider client={queryClient}>

          <RTL>

            <CssBaseline />
            <BrowserRouter>



              <Suspense fallback={'Loading Some Thing'}>

                <main className='tw-block'>
                  <Router />

                </main>
              </Suspense>
            </BrowserRouter>
          </RTL>
          <ReactQueryDevtools />
          <ToastContainer />

        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
