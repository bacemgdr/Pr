import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./slider.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";
import React, { useRef, useState } from 'react';
import HeroSlider from './HeroSlider'



// const mySlider = [
//   { text: "MEN", link: "src/images/de017-17026267450476-1920.jpg" },
//   { text: "WOMEN", link: "src/images/Kim-Kardashian-North-3.webp"},
// ];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container  >

   
 <Box sx={{ pt: 2, mt: 3, display: "flex", alignItems: "center", gap: 2 }}>




 
  <Box sx={{ display: { xs: "none", md: "block", maxWidth: "29%" } }}>
<Box sx={{ position: "relative" }}>
          <img
            src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilaVp8vVXzd0/v1/-999x-999.gif"
            alt=""
            // height={"300px"}
            width={"100%"}
          ></img>
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 3,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#daa520",
                fontSize: "30px",
              }}
            >
              Cartier
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "black",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              NEW ARRIVALS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>

            <Link
              sx={{
                color: "#708090",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "olive",
                },
              }}
              href="https://codepen.io/inescodes/pen/PoxMyvX"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
          src= "https://media4.giphy.com/media/4abv6zmWOd5bFQXRlL/giphy.gif?cid=6c09b952oksrvcn0onnn3mw8z8gnpchq598ymoxeg7syr8wu&ep=v1_stickers_related&rid=giphy.gif&ct=s"
            alt=""
            height={'300px'}
            width={'300px'}
           
          ></img>

          <Stack
            sx={{
              position: "absolute",
              top: "30%",
              transform: "translateY(-50%)",
              left: 3,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "grey",
                fontSize: "10px",
              }}
            >
              Sneakers Kanye West
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "grey",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              Launches YZY POD &
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "grey",
              }}
            >
              ‘Vultures’ Merch
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "pink",
                },
              }}
              href="https://www.modernnotoriety.com/kanye-west-ye-yeezy-yzy-pod-vultures-merch/"
              underline="none"
            >
              See More
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
  </Box>
     
        </Box>

      <IconSection  />
     
    </Container>
     
  );
}

export default Hero;

