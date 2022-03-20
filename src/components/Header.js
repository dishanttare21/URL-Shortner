import React, { useContext, useState } from 'react'

import { AuthContext } from '../context/AuthContext';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Popper, Typography } from '@mui/material';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { logoutCall } from '../apiCalls';

const Header = ({ open, handleOpenLogin, handleOpenRegister, handleClose }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const { user, dispatch } = useContext(AuthContext);
    const openPopper = Boolean(anchorEl);
    const id = openPopper ? 'simple-popper' : undefined;

    const logout = () => {
        logoutCall(dispatch);
        setAnchorEl(null);
        window.location.reload();
        // navigate('/');
    }
    return (
        <>
            <header>
                <nav>
                    <h1 className="title">SHORTME</h1>
                    <ul>
                        {user
                            ? (
                                <li className='user-profile-icon' >
                                    <PersonOutlineIcon
                                        sx={{ fontSize: 35 }}
                                        aria-describedby={id}
                                        type="button"
                                        onClick={handleClick} />
                                </li>
                            )
                            : (
                                <>
                                    <li><span className='nav-link login' onClick={handleOpenLogin}>Login</span></li>
                                    <li><span href="" className="nav-link btn btn-blue signup" onClick={handleOpenRegister}>SignUp</span></li>
                                </>
                            )}
                    </ul>
                </nav>

            </header>
            <Popper id={id} open={openPopper} anchorEl={anchorEl} >
                <Box sx={{ boxShadow: 2, border: 0.5, borderColor: 'grey.500', borderRadius: 1, p: 1, bgcolor: 'background.paper', marginTop: 2 }} className='popper'>
                    {user && (
                        <>
                            {/* <Box sx={{p: 2, border: 1, width: 40, height: 40, margin: 'auto', borderRadius: 50}}>
                                D
                            </Box> */}
                            <p>{user.name}</p>
                            <span>{user.email}</span>
                        </>
                    )}
                    <button className='btn btn-grey' onClick={logout}>Sign Out</button>
                </Box>
            </Popper>
        </>
    )
}

export default Header
