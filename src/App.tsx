import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { SignIn } from './pages/SignIn';
import { selectIsAuth } from './store/ducks/user/selectors';


function App() {
  const isAuth = useSelector(selectIsAuth)
  const navigate = useNavigate()
  React.useEffect(() => {
    console.log('typeof isAuth');
    console.log(typeof isAuth);
    if (isAuth) {
      navigate('/home')
    }

  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} ></Route>
        <Route path="*" element={<Home />}  ></Route>
      </Routes>

    </div>
  );
}

export default App;
