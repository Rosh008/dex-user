import { Box, Card, CardBody, Heading, Icon, Image, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Pokemon } from "../Types/pokemon";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface PokemonCardProps{
    pokemon: Pokemon
}

export default function PokemonCard({pokemon}: PokemonCardProps){

    const [data, setData] = useState();
    const [liked, setLiked] = useState(false);

    React.useEffect(() => {
        fetch(pokemon.url)
        .then((res) => res.json())
        .then((obj) => setData(obj.sprites?.other?.home?.front_default))
    },[])

    return (
        <Card w={300}>
            <CardBody>
                <Stack align='center'>
                    <Image boxSize='200px' src={data} />
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Heading>{pokemon.name}</Heading>
                        {
                            liked ?
                            <Icon 
                                cursor='pointer' 
                                onClick={() => setLiked(!liked)} 
                                color='red.500' mt={1} mx={2} w={8} h={8} 
                                as={AiFillHeart} 
                            />:
                            <Icon 
                                cursor='pointer' 
                                onClick={() => setLiked(!liked)} mt={1} mx={2} w={8} h={8} 
                                as={AiOutlineHeart} 
                            />
                        }
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}