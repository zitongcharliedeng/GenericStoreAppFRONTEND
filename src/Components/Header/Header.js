import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchBar from './SearchBar';
import ShoppingCart from './ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const sectionObjectItemsForSale = {name: 'Items for sale', ariaLabel: 'itemsForSale'}
const sectionObjectYourPurchaseHistory = {name: 'Your purchase history', ariaLabel: 'yourPurchaseHistory'}
const sectionObjectCreateAnAccount = {name: 'Create An Account', ariaLabel: 'createAnAccount'}
const sectionObjects = [sectionObjectItemsForSale, sectionObjectYourPurchaseHistory, sectionObjectCreateAnAccount];
const settings = ['Logout'];

function Header(props) {
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

  const handleHomeClick = () => {
    props.setView('productsAll')
  }
  
  const handleSectionClick = (event) => {

    //handleCloseNavMenu()
    //.innerText and CAPS used since the component converts the section (name) like that
    //innerText replaced by textContent because https://stackoverflow.com/questions/47902335/innertext-is-undefined-in-jest-test
    
    switch(event.target.textContent){
      case sectionObjectItemsForSale.name:
        props.setView('productsAll')
        return
      case sectionObjectYourPurchaseHistory.name:
        props.setView('dashboard')
        return
      case sectionObjectCreateAnAccount.name:
        props.setView('signUp')
        return
      default:
        return console.log("unknown handleSectionClick section name")
    }
  }

  const handleSignInClick = () => {
    props.setView('signIn')
  }

  const handleSignOut = (event) => {
    handleCloseUserMenu(event)
    props.setSessionToken('')
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleHomeClick}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer",
            }}
          >
            TheEverythingStore
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {sectionObjects.map((sectionObject) => (
                <MenuItem key={sectionObject.ariaLabel} aria-label={sectionObject.ariaLabel+"Mobile"} onClick={handleSectionClick}>
                  <Typography textAlign="center">{sectionObject.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SearchBar searchBarValue={props.searchBarValue} setSearchBarValue={props.setSearchBarValue}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={handleHomeClick}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: "pointer",
            }}
          >
            TheEverythingStore
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sectionObjects.map((sectionObject) => (
              <Button
                key={sectionObject.ariaLabel}
                aria-label={sectionObject.ariaLabel}
                onClick={handleSectionClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {sectionObject.name}
              </Button>
            ))}
          </Box>
          
          <ShoppingCart setView={props.setView}/>

          <Box sx={{ flexGrow: 0 }}>
            { props.sessionToken === '' ?
                  <Button variant="contained" color="success" onClick={handleSignInClick}>Sign In</Button>
              :
                
                <><Tooltip title="Open account settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar><AccountCircleIcon/></Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key='signOut' onClick={handleSignOut}>
                    <Typography textAlign="center">Log Out</Typography>
                  </MenuItem>
                </Menu></>
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
