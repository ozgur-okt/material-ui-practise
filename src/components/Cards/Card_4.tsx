/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useState } from "react";
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { Box, Card, CardMedia } from '@mui/material';




export default function Card_4() {
    const [favClick, setFavClick] = useState(true);
    return (
        <>
            <Card sx={{ width: 160, height: 160, borderRadius:4, marginRight:0.5 }}>
                <CardMedia
                    component="img"
                    height="160"
                    image={require('../Pictures/5.png')}
                    alt="asdas"
                />
                <Box sx={{
                    position: "relative", bottom: 45,
                    display: "flex", justifyContent: "center"
                }}>
                    <Link
                        component="button"
                        variant="body2"
                        sx={{
                            borderRadius: 5, color: "#ffffff", paddingLeft: 1, paddingRight: 1, paddingTop: 0.2, paddingBottom: 0.2, fontSize: 14,
                            marginRight: 1
                        }}
                    >
                        Dene
                    </Link>
                    <Link
                        component="button"
                        underline="none"
                        variant="body2"
                        sx={{
                            backgroundColor: "#42a5f5", borderRadius: 5, color: "white",
                            paddingLeft: 1, paddingRight: 1, paddingTop: 0.2, paddingBottom: 0.2, fontSize: 14,
                            marginLeft: 1
                        }}
                    >
                        Oyna
                    </Link>
                </Box>
                <Box sx={{
                    position: "relative", display: "flex", justifyContent: "space-between",
                    bottom: 175,marginLeft:1,marginRight:1
                }}>
                    <Chip label="NEW" color="warning" sx={{ height: 26, fontSize: 12 }} />
                    {
                        favClick ?
                            <FavoriteIcon color="primary" onClick={() => setFavClick(false)} sx={{boxSizing:"border-box", border:"white", borderWidth:1,
                        height:18,width:20}} /> :
                            <FavoriteTwoToneIcon color="primary" onClick={() => setFavClick(true)} sx={{height:18,width:20}} />
                    }
                </Box>
                {/* 
                <Chip label="10.000,00 TL" color="success" sx={{ height: 18, fontSize: 12 }} /> */}

            </Card>


        </>
    );
}
