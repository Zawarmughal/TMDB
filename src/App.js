import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Appbar from './components/header-footer/Appbar';
import AllRoutes from './components/Routes';
import Footer from './components/header-footer/Footer';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/component/Theme';
import axios from 'axios';

function App() {
  // axios.interceptors.request.use(function (config) {
  //   config.params = {
  //     api_key: "ef8d01a3e04de710ea19db897e30782e",
  //     language: 'en - US',
  //   }
  //   return config;
  // }, function (error) {
  //   return Promise.reject(error);
  // });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Appbar />
          <AllRoutes />
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
