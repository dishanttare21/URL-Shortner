import './App.css';
import { useContext, useState } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import Login from './components/Login';
import { AuthContext } from './context/AuthContext';
import LoginSuccess from './components/LoginSuccess';
import Register from './components/Register';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #555',
  boxShadow: 24,
  borderRadius: 2,
  p: 2,
};

function App() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleOpenLogin = () => {
    setIsLogin(true);
    setOpen(true)
  };
  const handleOpenRegister = () => {
    setIsLogin(false);
    setOpen(true)
  };
  const handleClose = () => setOpen(false);


  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Header open={open} handleOpenLogin={handleOpenLogin} handleOpenRegister={handleOpenRegister} handleClose={handleClose} />
      <Home open={open} handleOpenLogin={handleOpenLogin} handleOpenRegister={handleOpenRegister} handleClose={handleClose} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {user ? <LoginSuccess handleClose={handleClose} /> : isLogin
            ? (<Login
              handleClose={handleClose}
              isLogin={isLogin} />
            )
            : (<Register
              handleClose={handleClose}
              isLogin={isLogin}
              setIsLogin={setIsLogin} />
            )
          }
        </Box>
      </Modal>

    </div>
  );
}

export default App;
