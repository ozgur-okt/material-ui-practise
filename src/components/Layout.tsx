import { Box, Divider, Grid, Stack } from '@mui/material'
import { width } from '@mui/system'


export default function Layout() {
    return (
        <>
        <Stack m={2} sx={{border:"2px solid", width:"300px"}} spacing={3}
       divider={<Divider/>}>
            <Box sx={{
                height:"100px",
                width:'100px',
                backgroundColor:"red"
            }}>

            </Box>
            <Box sx={{
                height:"100px",
                width:"100px",
                backgroundColor:"blue"
            }}>

            </Box>
        </Stack>
        <Grid container m={2} rowSpacing={2} columnSpacing={3}>
            <Grid item xs={1} sm={3}>
                <Box bgcolor="primary.light">
                    BOX 1
                </Box>
            </Grid>
            <Grid item xs={1} sm={3}>
                <Box bgcolor="primary.dark" >
                   BOX 2
                </Box>
            </Grid>

        </Grid>
        </>
    )
}
