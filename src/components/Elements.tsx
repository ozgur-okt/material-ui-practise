import { Coffee, ControlPoint, CopyAll, Edit, Home, Mail, Menu, Print, Send, ShareLocation } from '@mui/icons-material'
import {
    Alert,
    AlertTitle,
    AppBar, Avatar, AvatarGroup, Badge, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, Drawer, Grid, IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Snackbar,
    SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Tooltip, Typography
} from '@mui/material'
import React, { useState } from 'react'

function Elements() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const [value, setValue] = useState(0)
    const[alert, setAlert]=useState(false)
    const[snack, setSnack]=useState(false)

    const [chips, setChips] = useState(["Tech", "Fashion", "Design"])
    const deleteChip = (chipToDelete: string) => {
        setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
    }

    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={() => setOpenDrawer(true)} color='inherit'> <Menu /></IconButton>
                    <Drawer
                        anchor='left'
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}>
                        <Box width="250px">

                        </Box>
                    </Drawer>

                    <IconButton size='large' color='inherit'><Coffee /></IconButton>
                    <Typography variant='h5' component="div" sx={{ flexGrow: 1 }} >React App</Typography>
                    <Stack direction="row" spacing={2} sx={{ marginRight: 5 }}>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>Profile</Button>
                        <Button color='inherit'>Settings</Button>
                        <Button color='inherit'>Navbar</Button>

                        <Badge max={3} sx={{ position: "absolute", top: 20, right: 20 }} badgeContent={5} color="error"
                        //invisible={unRead.length===0}
                        >
                            <Mail />
                        </Badge>
                        {/* <Badge variant='dot' sx={{position:"absolute", top:50,right:20}} badgeContent={2} color="error"
                //invisible={unRead.length===0}
                >
                    <Mail/>
                </Badge> */}

                        <AvatarGroup max={1} >
                            <Avatar
                                src='https://randomuser.me/api/portraits/women/12.jpg' />
                            <Avatar
                                src='https://randomuser.me/api/portraits/women/12.jpg' />
                            <Avatar
                                src='https://randomuser.me/api/portraits/men/10.jpg' />
                        </AvatarGroup>
                    </Stack>
                </Toolbar>
            </AppBar>
            {/* <Stack>
    <Chip label="Chip Filled" color='warning' variant='filled' />
    </Stack> */}
            <Grid container spacing={-5}>
                <Grid item xs={4}>
                    <Box width="300px" mt={13} ml={3}>
                        <Card >
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://source.unsplash.com/random" />
                            <CardContent>
                                <Typography variant='h4'>
                                    React
                                </Typography>
                                <Typography variant='body1' color="text.secondary">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, omnis?
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={()=>setAlert(true)}> Share </Button>
                                <Tooltip
                                    title="Send"
                                    placement='top'
                                    arrow
                                    enterDelay={500}
                                    leaveDelay={200}>
                                    <IconButton color='warning' onClick={()=>setSnack(true)}>
                                        <Send />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box sx={{ width: 320, bgcolor: "#efefef", marginTop: 15 }}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ListItemAvatar>
                                            <Avatar
                                                src='https://randomuser.me/api/portraits/women/12.jpg' />
                                        </ListItemAvatar>
                                    </ListItemIcon>
                                    <ListItemText primary="Primary text"
                                        secondary="Secondary text" />
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ListItemAvatar>
                                            <Avatar
                                                src='https://randomuser.me/api/portraits/women/17.jpg' />
                                        </ListItemAvatar>
                                    </ListItemIcon>
                                    <ListItemText primary="Primary text"
                                        secondary="Secondary text" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={4} >
                    <TableContainer sx={{marginTop:10,border:1, borderRadius:1, maxHeight:200}} >
                        <Table stickyHeader >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Surname</TableCell>
                                    <TableCell align='center'>Mail</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    tableData.map((row)=>(
                                        <TableRow
                                        key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.first_name}</TableCell>
                                            <TableCell>{row.last_name}</TableCell>
                                            <TableCell align='center'>{row.email}</TableCell>

                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

            {/* {
        chips.map(c=>{
            <Chip
            key={c}
            label={c}
            variant="outlined"
            onDelete={()=>deleteChip(c)}/>
        })
    } */}
            {alert &&
                <Alert variant='standard' severity='success' onClose={()=> setAlert(false)}
                sx={{width:320}}>
                    <AlertTitle>Done!</AlertTitle>
                    You shared content!
                </Alert>
            }
                <Snackbar 
                message="Sent it!"
                autoHideDuration={2000}
                open={snack}
                //onClose={handleClose}
                anchorOrigin={{
                vertical:"bottom",
                horizontal:"left"
                }}
                />


            <SpeedDial
                ariaLabel='abc'
                sx={{ position: "absolute", bottom: 60, right: 20 }}
                icon={<SpeedDialIcon openIcon={<Edit />} />}>
                <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" />
                <SpeedDialAction icon={<ShareLocation />} tooltipTitle="Share" />
                <SpeedDialAction icon={<Print />} tooltipTitle="Print" />

            </SpeedDial>
            <BottomNavigation
                sx={{ width: "100%", position: "absolute", bottom: 0 }}
                value={value}
                onChange={(event, newValue) => setValue(newValue)}
            >
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction label="Home" icon={<Home />} />

            </BottomNavigation>

        </>
    )
}

const tableData=[{
    "id": 1,
    "first_name": "Shepard",
    "last_name": "Shankle",
    "email": "sshankle0@mozilla.org"
  }, {
    "id": 2,
    "first_name": "Mendy",
    "last_name": "Dudny",
    "email": "mdudny1@blinklist.com"
  }, {
    "id": 3,
    "first_name": "Shari",
    "last_name": "Conboy",
    "email": "sconboy2@ibm.com"
  }, {
    "id": 4,
    "first_name": "Fayth",
    "last_name": "Wilkenson",
    "email": "fwilkenson3@hud.gov"
  }, {
    "id": 5,
    "first_name": "Clareta",
    "last_name": "Roux",
    "email": "croux4@seesaa.net"
  }]
  
export default Elements