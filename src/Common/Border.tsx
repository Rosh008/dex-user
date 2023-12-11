import React from 'react';
import { Box } from "@chakra-ui/react";



export default function Border({children} : {children: React.ReactNode}){

    return (
        <Box mx={4}>
            {children}
        </Box>
    )
}