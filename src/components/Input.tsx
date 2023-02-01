import {
    Typography, Button, Stack, IconButton, ToggleButtonGroup,
    ToggleButton, TextField, InputAdornment, MenuItem, Box, 
    FormControl, FormLabel, RadioGroup, FormControlLabel, 
    Radio, Switch, Rating, Autocomplete
} from "@mui/material"

import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Shop2, ShopTwo,Favorite, FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import { width } from "@mui/system";




export default function Input() {

    // const [value, setValue] = useState("")
    // console.log({ value })

    // const change = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.target.value)
    // }

    const autoComp=["html", "css","javascript"]

    const [valueRating, setValueRating] = useState<number|null>(2)

    return (
        <Stack spacing={5}>
            <Stack spacing={1}>
                <Typography variant="h6">Lorem, ipsum.</Typography>
                <Typography variant="subtitle1">Lorem, ipsum.</Typography>
                <Typography variant="subtitle2">Lorem, ipsum.</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, ut?</Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
                <Button variant="text" color="warning" > Text </Button>
                <Button variant="contained" color="secondary" >Contained</Button>
                <Button variant="outlined" >Outlined</Button>

                <Button disableRipple startIcon={<HomeIcon />} variant="contained" >Home</Button>
                <Button endIcon={<ExitToAppIcon />} variant="contained" >Exit</Button>

                <IconButton>
                    <HomeIcon />
                </IconButton>

                <ToggleButtonGroup>
                    <ToggleButton value="bold">
                        <Shop2 />
                    </ToggleButton>
                    <ToggleButton value="bold">
                        <ShopTwo />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction="row" spacing={2}>
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" helperText="Write your name" variant="standard" />
                <TextField label="Pasword" helperText="Write your pw" variant="standard" type="password" />
                <TextField label="Amount" variant="standard"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>
                    }} />
            </Stack>
            {/* <Stack width="300px">
                <TextField label="Select" 
                select 
                fullWidth
                // SelectProps={{
                //     multiple:true
                // }}
                >
                    <MenuItem value="TR">TR</MenuItem>
                    <MenuItem value="TR">TR</MenuItem>
                    <MenuItem value="TR">TR</MenuItem>

                </TextField>
            </Stack> */}
            <Stack>
                <FormControl>
                    <FormLabel>
                        Your Age
                    </FormLabel>
                    {/* <RadioGroup value={value} onChange={change}>
                        <FormControlLabel control={<Radio />} label="20" value="20" />
                        <FormControlLabel control={<Radio />} label="30" value="30" />
                    </RadioGroup> */}
                </FormControl>
            </Stack>

            <Stack>
                <FormControl>
                    <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                    <FormControlLabel disabled control={<Switch />} label="Disabled" />
                </FormControl>
            </Stack>
            <Stack>
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={valueRating}
                    onChange={(event, newValue) => {
                        setValueRating(newValue);
                    }}
                    precision={0.5}
                />
                <Rating
                    name="simple-controlled"
                    value={valueRating}
                    onChange={(event, newValue) => {
                        setValueRating(newValue);
                    }}
                    icon={<Favorite color="error"/>}
                    emptyIcon={<FavoriteBorder/>}
                    //highlightSelectedOnly
                />
               
                <Rating name="read-only" value={valueRating} readOnly />
                <Rating name="disabled" value={valueRating} disabled />
                <Rating name="no-value" value={null} size="large" />
            </Stack>
            <Autocomplete
            options={autoComp}
            renderInput={(params)=> <TextField {...params} label="Skills"/>}
            sx={{width:"200px"}}
            //freeSolo // if new value is available to be added
            />

        </Stack>
    )
}
