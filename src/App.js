import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import CommonRoutes from './routes/common';
import UserRoutes from './routes/user';
import AdminRoutes from './routes/admin';

function App() {
  return <>
      <BrowserRouter>
          <Routes>
              <Route path='/*' element={<CommonRoutes/>}></Route>
              <Route path='/user/*' element={<UserRoutes/>}></Route>
              <Route path='/admin/*' element={<AdminRoutes/>}></Route>
          </Routes>
      </BrowserRouter>
  </>
}

export default App;
