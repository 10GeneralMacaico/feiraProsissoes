import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './home/App.jsx';
import For from './pages/formularios/for.jsx';
import Curs from './pages/cursos/cursos.jsx';
import ForS from './pages/cadastro/forS.jsx';
import Log from './pages/login/Login.jsx';
import QrCode from './pages/qrcodePage/qrcodePG.jsx';

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/for" element={<For />} />
        <Route path="/cadastro" element={<ForS />}/>
        <Route path="/cursos" element={<Curs />}/>
        <Route path="/login" element={<Log />}/>
        <Route path="/QR" element={<QrCode />}/>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>
)
