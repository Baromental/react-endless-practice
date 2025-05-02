import { Route, Routes } from 'react-router';
import { Layout } from 'components/Layout';
import { Home, Login, NotFound, Register } from 'pages';

// import { Home } from 'pages/Home/Home';
// import { Register } from 'pages/Register/Register';
// import { Login } from 'pages/Login/Login';
// import { NotFound } from 'pages/NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
