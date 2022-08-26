// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
// import { ShoppingCart } from '@material-ui/icons';
// import { Link, useLocation } from 'react-router-dom';

// import logo from '../../assets/commerce.png';
// import useStyles from './styles';
// // const PrimarySearchAppBar = ({ totalItems }) => {


// const Navbar =() =>{

//     // const [mobileMoreAnchorE1, setMobileMoreAnchorE1] = useState(null);
//     const classes = useStyles();
//     const location = useLocation();
//     // const isMobileMenuOpen = Boolean(mobileMoreAnchorE1);
//     // const handleMobileMenuClose = () => setMobileMoreAnchorE1(null);
//     // const mobileMenuId = 'primary-search-account-menu-mobile';

//     // const renderMobileMenu = (
//     //     <Menu anchorE1={mobileMoreAnchorE1}
//     //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//     //         id={mobileMenuId}
//     //         keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//     //         open={isMobileMenuOpen}
//     //         onClose={handleMobileMenuClose}>
//     //         <MenuItem>
//     //             <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
//     //                 <Badge badgeContent={totalItems} color="secondary">
//     //                     <ShoppingCart />
//     //                 </Badge>
//     //             </IconButton>
//     //             <p>Cart</p>
//     //         </MenuItem>
//     //     </Menu>

//     // );
//     return (
//         <>
//             <AppBar position="fixed" className={classes.appBar} color="inherit">
//                 <Toolbar>
//                     <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
//                         <img src={logo} alt="commerce.js" height="25px" className={classes.image} />Commerce.js
//                     </Typography>
//                     {/* <div className={classes.grow} />
//                     {location.pathname === '/' && (
//                         <div className={classes.button}>
//                             <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
//                                 <Badge badgeContent={4} color="secondary">
//                                     <ShoppingCart />
//                                 </Badge>
//                             </IconButton>
//                         </div>
//                     )} */}
//                 </Toolbar>
//             </AppBar>
//             {/* {renderMobileMenu} */}
//         </>
//     );
// };
// export default Navbar;

// // export default PrimarySearchAppBar;

import React from 'react';
import useStyles from './styles';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/commerce.png';
import { Link, useLocation } from 'react-router-dom';
const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    if (location.pathname === '/')
        return (

            <div>

                <AppBar position="fixed" className={classes.appBar} color="inherit">
                    <Toolbar>
                        <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                            My Store
                        </Typography>
                        <div className={classes.grow} />

                        {location.pathname === '/' && (
                            <div className={classes.button}>
                                <Link to="/cart">go to cart</Link>
                                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                    <Badge badgeContent={totalItems} color="secondary">
                                        <ShoppingCart />
                                    </Badge>

                                </IconButton>
                            </div>
                        )}
                    </Toolbar>

                </AppBar>
            </div>
        )
};
export default Navbar;