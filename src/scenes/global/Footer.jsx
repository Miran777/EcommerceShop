import React from 'react'
import { useTheme } from "@mui/material"
import { Box, Typography } from "@mui/material"
import { shades } from "../../theme"

const Footer = () => {
    const { palette: { neutral }} = useTheme()


  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
        <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px"
        >
            <Box width="clamp(20%, 30%, 40%)">
                <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>ECOMMER</Typography>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, libero consequuntur voluptatibus hic ea nemo, facere quidem, architecto neque fuga minus? Rerum dolorum doloribus sequi similique ipsum nobis maiores consequatur!
                    Nobis libero quisquam consectetur voluptas aspernatur possimus cum ut voluptate dicta recusandae delectus totam eaque eius, eligendi maxime suscipit eveniet perspiciatis saepe. Ipsam debitis possimus quod nobis, exercitationem ducimus iste!
                    Mollitia praesentium, ratione dolorem molestiae harum minus ipsum! Ullam vitae quia, incidunt maxime sunt explicabo expedita. Quis praesentium ea modi, quas culpa odio. Nobis voluptatem dolor non tempore mollitia quas.
                </div>
            </Box>
            <Box>
                <Typography variant='h4' fontWeight="bold" mb="30px">
                    About Us
                </Typography>
                <Typography mb="30px">
                    Careers
                </Typography>
                <Typography mb="30px">
                    Our Stores
                </Typography>
                <Typography mb="30px">
                    Terms & Conditions
                </Typography>
                <Typography mb="30px">
                    Privacy Policy
                </Typography>
            </Box>

            <Box>
                <Typography variant='h4' fontWeight="bold" mb="30px">
                    Customer Care
                </Typography>
                <Typography mb="30px">
                    Help Center
                </Typography>
                <Typography mb="30px">
                    Track Your Order
                </Typography>
                <Typography mb="30px">
                    Corporate & Bulk Purchasing
                </Typography>
                <Typography mb="30px">
                    Returns & Refunds
                </Typography>
            </Box>

            <Box width="clamp(20%, 25%, 30%)">
                <Typography variant='h4' fontWeight="bold" mb="30px">
                    Contact Us
                </Typography>
                <Typography mb="30px">
                    Russia, Krasnodar Krasnaya 60, 350001
                </Typography>
                <Typography mb="30px">
                    Email: mirmirzahanov@mail.ru
                </Typography>
                <Typography mb="30px">
                    +7-(800)-555-35-35
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer