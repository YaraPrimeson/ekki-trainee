import React, { useContext,useState } from 'react'
import { Context } from '../Context/Context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from '../styles/Admin.module.scss'
import admin from '../admin.json'


const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const {toggleIsAdmin} = useContext(Context)
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
    
      const handleCheckButtonClick = () => {
        if (username === admin.username && password === admin.password) {
          toggleIsAdmin(true);
          window.localStorage.setItem("admin","true")
        } else {
  
          setUsernameError(username !== admin.username);
          setPasswordError(password !== admin.password);
          console.log('данные не верны')
        }
      };
  return (
    <div>
         <div className={styles.container}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className={styles.fields}>
            <TextField
              error={usernameError}
              id="outlined-error"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              
            />
            <TextField
              error={passwordError}
              id="outlined-error-helper-text"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button className={styles.button} onClick={handleCheckButtonClick}> 
              Check
            </button>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default AdminLogin;