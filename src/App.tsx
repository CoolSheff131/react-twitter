import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { User } from './pages/User/index';
import { SignIn } from './pages/SignIn';
import { fetchUserData } from './store/ducks/user/contracts/actionCreator';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingState } from './store/types';


function App() {
  const isAuth = useSelector(selectIsAuth)
  const loadingStatus = useSelector(selectUserStatus)
  const isReady = loadingStatus !== LoadingState.NEVER && loadingStatus !== LoadingState.LOADING
  const navigate = useNavigate()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchUserData())
  }, [])

  React.useEffect(() => {
    console.log('typeof isAuth');
    console.log(typeof isAuth);
    if (!isAuth && isReady) {
      navigate('/signin')
    }

  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} ></Route>
        <Route path="/user" element={<User />}  ></Route>
        <Route path="*" element={<Home />}  ></Route>
      </Routes>

    </div>
  );
}

export default App;
