import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Card_3 from "./Cards/Card_3";
import Card_2 from "./Cards/Card_2";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import Card_1 from "./Cards/Card_1";
import Card_4 from "./Cards/Card_4";
import Card_5 from "./Cards/Card_5";
import Card_6 from "./Cards/Card_6";
import Card_7 from "./Cards/Card_7";
import Card_8 from "./Cards/Card_8";



export default function GameSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowForwardIosIcon color="primary" sx={{
            position:"relative",bottom:365,left:870,
            "&:hover": {               
                color: "#1976d2"              
              },
        }} />,
        prevArrow: <ArrowBackIosIcon color="primary" sx={{
            position:"relative",top:5,left:850,
            "&:hover": {               
                color: "#1976d2"              
              },
        }}  />,
        variableWidth: true,
        //centerMode: true,
        //autoplay: true,
        //autoplaySpeed: 1000,
    };
    return (
        <Box>
            <Typography color="primary" sx={{fontSize:32}} >
                Title
            </Typography>
            <Slider {...settings}  >
                <Stack>
                    <Card_1 />
                    <Card_2 />
                </Stack>
                <Card_3/>
                <Box>
                    <Box>
                        <Card_6 />
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <Card_4 />
                        <Card_5 />
                    </Box>
                    
                </Box>
                <Stack sx={{marginRight:1}}>
                    <Card_7 />
                    <Card_8 />
                </Stack>
                <Stack>
                    <Card_1 />
                    <Card_2 />
                </Stack>
                <Card_3/>
                <Box>
                    <Box>
                        <Card_6 />
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <Card_4 />
                        <Card_5 />
                    </Box>
                    
                </Box>
                <Stack>
                    <Card_7 />
                    <Card_8 />
                </Stack>
                
            
            </Slider>
        </Box>
    )
}
