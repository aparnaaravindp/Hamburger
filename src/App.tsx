import { ToastContainer } from 'react-toastify';

import { UserProvider } from './providers/UserContext/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <GlobalStyles />

    <UserProvider>
      <Router />
    </UserProvider>
    <ToastContainer
      position='top-center'
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
  </>
);

export default App;
