import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Products', path: '/products' },
    { label: 'Events', path: '/events' },
    { label: 'Career', path: '/career' },
  ];

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.label}>
          <Button component={Link} to={item.path}>
            {item.label}
          </Button>
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1, display: 'flex', gap: '15px', display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.label} component={Link} to={item.path} color="inherit">
                {item.label}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { sm: 'none' } }}>
        {drawer}
      </Drawer>
    </div>
  );
}

export default Header;
