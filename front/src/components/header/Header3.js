import {
    Box,
    Container,
    Drawer,
    IconButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import { useState } from "react";
  import Button from "@mui/material/Button";
  import Menu from "@mui/material/Menu";
  import MenuItem from "@mui/material/MenuItem";
  import MenuIcon from "@mui/icons-material/Menu";
  import WindowIcon from "@mui/icons-material/Window";
  import { Close, KeyboardArrowRightOutlined } from "@mui/icons-material";
  import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
  import DoNotStepOutlinedIcon from "@mui/icons-material/DoNotStepOutlined";
  import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
  import Accordion from "@mui/material/Accordion";
  import AccordionSummary from "@mui/material/AccordionSummary";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import List from "@mui/material/List";
  import ListItem from "@mui/material/ListItem";
  import ListItemButton from "@mui/material/ListItemButton";
  import Links from "./Links";

const Header3 = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const theme = useTheme();

   
    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };


  return (

    <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>  
        <Box>
    <Button
      id="basic-button"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      onClick={handleClick}
      sx={{
        width: 222,
        bgcolor: theme.palette.myColor.main,
        color: theme.palette.text.secondary,
      }}
    >
      <WindowIcon />

      <Typography
        sx={{
          padding: "0",
          textTransform: "capitalize",
          mx: 1,
        }}
      >
        Categories
      </Typography>
      <Box flexGrow={1} />

      <KeyboardArrowRightOutlined />
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      sx={{
        ".MuiPaper-root": {
          width: 220,
          bgcolor: theme.palette.myColor.main,
        },
      }}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <CheckroomOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Clothes</ListItemText>
      </MenuItem>

      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <DoNotStepOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Shoes</ListItemText>
      </MenuItem>

      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <DiamondOutlinedIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Accessories</ListItemText>
      </MenuItem>
    </Menu>
  </Box>


  {useMediaQuery("(min-width:1200px)") &&  (
    <Stack gap={4}  direction={"row"} alignItems={"center"} mr={"3%"}>
  <Links title={"Home"}/>
  <Links title={"Mega Menu"} />
  <Links title={"Full Screen Menu"} />
  <Links title={"pages"} /> 
  <Links title={"User Account"} />
  <Links title={"Vendor Account"} />
</Stack>
)} 



     {useMediaQuery("(max-width:1000px)") && (
      <IconButton onClick={toggleDrawer('top', true)}> 
        
        <MenuIcon
          sx={{
            color: theme.palette.text.secondary,
          }}
        />
      </IconButton>
      
     )}

    <Drawer
      anchor={"top"}
      open={state["top"]}
      onClose={toggleDrawer("top", false)}
      sx={{
        ".Muipaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
          height: '100%',
        },
      }}
    >
      <Box 
        sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
      > 
         <IconButton 
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            
          }}
          onClick={toggleDrawer("top", false)}
        >
          <Close />
        </IconButton>

        {[
          { mainLink: "Home", subLink: ["Link1", "link2", "link3"] },
          { mainLink: "Mega menu", subLink: ["Link1", "link2", "link3"] },
          {
            mainLink: "Full screen menu",
            subLink: ["Link1", "link2", "link3"],
          },
          { mainLink: "pages", subLink: ["Link1", "link2", "link3"] },
          { mainLink: "user account", subLink: ["Link1", "link2", "link3"] },
          {
            mainLink: "vendor account",
            subLink: ["Link1", "link2", "link3"],
          },
        ].map((item) => {
          return (
            <Accordion
              key={item.mainLink}
              elevation={0}
              sx={{ bgcolor: "initial" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.mainLink}</Typography>
              </AccordionSummary>

              <List sx={{ py: 0, my: 0 }}>
                {item.subLink.map((link) => {
                  return (
                    
           
                     <ListItem key={link} sx={{ py: 0, my: 0 }}>
                       <ListItemButton>
                         <ListItemText primary={link} />
                       </ListItemButton>
                     </ListItem> 
            
               
          
                   );
                })} 
               </List>
            </Accordion>
           );
        })} 
      </Box> 
    </Drawer>



  </Container>

);
      }



export default Header3


// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
// import { REMOVE } from '../../redux/actions/action';

// const NavBarComp = () => {
//     const getData = useSelector((state) => state.cartReducer.carts)
//     console.log(getData)
//     const dispatch=useDispatch()
//     // removes an item with a specified ID
//     const remove=(id)=>{
//         dispatch(REMOVE(id))
//     }
//     // popup for cart Items
//     const popover = (
//         <Popover id="popover-basic">
//             <table>
//                 <thead>
//                     <tr>
//                         <th className='me-5 text-center'>Image</th>
//                         <th className='me-5 text-center'>Item</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         getData.map((item, index) => {
//                             return <>
                               
//                                 <tr className='ms-2'>
//                                     <td >
//                                         <img src={item.image} style={{ width: "5rem", height: "5rem" ,margin:"15px 15px"}} alt="" />
//                                     </td>
//                                     <td>
//                                         <div className='text-center mt-3 me-3'>
//                                             <p className='text-center mb-0 fw-bolder'>{item.category}</p>
//                                             <p className='mb-0'>Price: $ {item.price}</p>
//                                             <p className='mb-0'>Rating: {item.rating.rate}&#x2605;</p>
//                                             <p className='mb-0'>{item.title.substring(0, 45)}</p>
//                                             <p className='mt-1' onClick={()=>remove(item.id)}> <i class="fa fa-trash fs-4 delete-icon" aria-hidden="true"></i></p>
//                                         </div>
//                                     </td>
//                                  </tr>
                                 
//                             </>
//                         })
//                     }
//                 </tbody>
//             </table>
//         </Popover>
//     );
//     return (
//         <div>
//             <Navbar bg="light" variant="light" className='shadow-sm bg-white py-4 '>
//                 <Container>
//                     <Link style={{ textDecoration: 'none' }} to='/'> <Navbar.Brand className='fw-bold fs-2'>ShopSee</Navbar.Brand></Link>
//                     <Nav className="me-auto">
//                         <Nav.Link className='nav-link nav-link-ltr'><Link style={{ textDecoration: 'none' }} to="/">Home</Link></Nav.Link>
//                         <Nav.Link className='nav-link nav-link-ltr'><Link style={{ textDecoration: 'none' }} to='/products'>Products</Link></Nav.Link>

//                     </Nav>
//                     <div className="buttons">
//                         <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
//                             <Button variant="outline-dark" className='me-2'><i className='fa fa-shopping-cart me-2'></i>{getData.length}</Button>
//                         </OverlayTrigger>
//                         <Button variant="outline-dark" className='me-2'><i className='fa fa-user-plus me-2'></i>Login</Button>

//                         <Button variant="outline-dark" className='me-2'><i className='fa fa-sign-in me-2'></i>Register</Button>

//                     </div>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

// export default NavBarComp;