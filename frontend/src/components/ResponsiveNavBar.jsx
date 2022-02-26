import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Face from '@mui/icons-material/Face';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { auth, db, logout } from "../../../helpers/AuthManager";
import { grey } from '@mui/material/colors';

const pages = ['About', 'Journal', 'Assessment', 'Feedback'];
const settings = ['Profile', 'Account', 'Dashboard'];
const defaultColor = grey[800]
const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const pagesOnClick = (page) => {
        setAnchorElNav(null);
        navigate('../'+page.toLowerCase())
    }

    const settingOnClick = (setting) => {
      setAnchorElUser(null);
      console.log(setting.toLowerCase());
  }

    return (<AppBar position="static" color = "inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h4" noWrap component="div" sx={{ mr: 2, fontWeight: 'bold', display: { xs: 'none', md: 'flex' } }}>
            FRIDAY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{
            display: { xs: 'block', md: 'none' },
        }}>
              {pages.map((page) => (<MenuItem key={page} onClick={() => pagesOnClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>))}
            </Menu>
          </Box>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold', display: { xs: 'flex', md: 'none' } }}>
            FRIDAY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (<Button key={page} onClick={() => pagesOnClick(page)} sx={{ my: 2, display: 'block', color: defaultColor}}>
                {page}
              </Button>))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton aria-label="Avatar" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Face sx={{ fontSize: 35,color: defaultColor }}/>
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
              {settings.map((setting) => (<MenuItem key={setting} onClick={() => settingOnClick}>
                  <Typography textAlign="center" sx={{ color: defaultColor }} >{setting}</Typography>

                </MenuItem>))}
                <MenuItem key="Logout" onClick={logout}>
                  <Typography textAlign="center" sx={{ color: defaultColor }} >Logout</Typography>

                </MenuItem>
            </Menu>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>);
};
export default ResponsiveAppBar;

