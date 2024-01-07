import { Box, Container, Stack, Typography, IconButton } from '@mui/material';
import React, { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import { Close } from "@mui/icons-material";
import ProductDetails from './ProductDetails';



const Main = () => {

  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container sx={{ py: 9, }}>
      <Stack 
      direction={"row"} 
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap= 'wrap'
      gap={3}
      >
        <Box>
          <Typography variant='h6'>Selected Products</Typography>
            <Typography fontWeight={300} variant='body1'>
              All our new arrivals in an exclusive brand selection
            </Typography>
          
        </Box>

        <ToggleButtonGroup
        color='error'
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        ".Mui-selected": {
          border: "1px solid rgba (233, 69, 93, 0.5) !important ",
          color: "#e94560",
          backgroundColor: "initial",
        },
      }}
    >
      <ToggleButton  
      sx={{color: theme.palette.text.primary}}
      className='myButton'
       value="left" 
       aria-label="left aligned">
        All Products
      </ToggleButton>
      <ToggleButton  sx={{mx:"16px !important", color: theme.palette.text.primary}} 
      className='myButton' 
      value="center" 
      aria-label="centered">
        MEN category
      </ToggleButton>
      <ToggleButton  sx={{mx: "16px", color: theme.palette.text.primary}} className='myButton' value="right" aria-label="right aligned">
        WOMEN category
      </ToggleButton>
      <ToggleButton className='myButton'  
      value="justify" 
      aria-label="justified"
      sx={{color: theme.palette.text.primary}} >
      CHILDREN category
      </ToggleButton>
    </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>

        {["aaa", "bbb", "ccc"].map((item) => {
          return(
            <Card  key={item} sx={{ maxWidth: 345, mt: 6, ":hover .MuiCardMedia-root ": {rotate: "1deg", scale: "1.1", transition: "0.35s"} }}>
            <CardMedia
              sx={{ height: 350,
              mt:2}}
              image=""
              title="vultures Merch"
            />
            <CardContent>
      
            <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Typography gutterBottom variant="h6" component="div">
                           T-shirt
                          </Typography>
      
                          <Typography variant="subtitle1" component="p">
                            $80
                          </Typography>
      
                        </Stack>
      
                        <Typography variant="body2" color="text.secondary">
                          Lizards are a widespread group of squamate reptiles, with
                          over 6,000 species, ranging across all continents except
                          Antarctica
                        </Typography>
      
                   
          
            </CardContent>
            <CardActions sx={{justifyContent: "space-between"}}>
              <Button sx={{
                textTransform: 'capitalize'
              }}
              onClick={handleClickOpen}
              size="small">
                <AddShoppingCartIcon sx={{mr: 1}} fontSize='large'/>
              Add to cart
              </Button>
              <Rating precision={0.1} name="read-only" value={4.5} readOnly />
            </CardActions>
          </Card>

          )
        })}

   

         
      </Stack>

      <Dialog
      sx={{" .MuiPaper-root":{minWidth: {xs: "100%", md:800 }}}}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >


 <IconButton 
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            
          }}
          onClick={handleClose}
        >
          <Close />
        </IconButton>

        
<ProductDetails/>
        
      </Dialog>



    </Container>
 
  )
}

export default Main;



// import React, { useState, useEffect } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import Spinner from 'react-bootstrap/Spinner';

// const Products = () => {
//     const [data, setData] = useState([])
//     const [filter, setFilter] = useState(data)
//     const [loading, setLoading] = useState(false)
//     useEffect(() => {
//         getProducts()
//     }, [])

//     const getProducts = async () => {
//         setLoading(true)
//         const response = await fetch("https://fakestoreapi.com/products")

//         setData(await response.json())
//         setFilter(data)
//         setLoading(false)
//     }
//     const Loading = () => {
//         return (
//             <>
//              <div className="mt-4 ">
//                     <Spinner animation="grow" />
//                     <Spinner animation="grow" />
//                     <Spinner animation="grow" />
//                     <Spinner animation="grow" />
//                     <Spinner animation="grow" />
//                     <Spinner animation="grow" />
//                     <Spinner animation="grow" />
//                 </div>
//             </>
//         )
//     }
//     const filterProduct = (cat) => {
//         const updatedItems = data.filter((item) => item.category === cat)
//         setFilter(updatedItems)
//     }

//     const ShowProducts = () => {
//         return (
//             <>
//                 <div className="buttons">
//                     <Button onClick={() => setFilter(data)} className='me-2' variant="outline-dark">All Brands</Button>
//                     <Button onClick={() => filterProduct("men's clothing")} className='me-2' variant="outline-dark">Men</Button>
//                     <Button onClick={() => filterProduct("women's clothing")} className='me-2' variant="outline-dark">Women</Button>
//                     <Button onClick={() => filterProduct("jewelery")} className='me-2' variant="outline-dark">Jewelery</Button>
//                     <Button onClick={() => filterProduct("electronics")} className='me-2' variant="outline-dark">Electronics</Button>
//                 </div>
//                 {filter.map((item) => {
//                     return (
//                         <div className="col-3 mt-5">
//                             <Card key={item.id} className="border border-dark">
//                                 <Card.Img variant="top" style={{ height: '300px' }} src={item.image} />
//                                 <Card.Body>
//                                     <Card.Title>{item.title.substring(0, 12)}</Card.Title>
//                                     <Card.Text className='fw-bold'>
//                                         $ {item.price}
//                                     </Card.Text>
//                                     <Link to={`/products/${item.id}`}> <Button variant="dark">Buy Now</Button></Link>
//                                 </Card.Body>
//                             </Card>
//                         </div>
//                     )
//                 })}
//             </>
//         )
//     }
//     return (
//         <div>
//             <div className="container mt-5 pb-5">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <h1 className='display-6 '>All Products</h1>
//                         <hr />
//                         <div className="row justify-content-center">
//                             {loading ? <Loading /> : <ShowProducts />}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Products