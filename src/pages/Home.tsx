import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Container, Grid, GridItem, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { listPokemons } from "../apiUrls";
import PokemonCard from "../Components/PokemonCard";
import { ListPokemonAPIResponse, Pokemon } from "../Types/pokemon";
import { supabase } from "../apiUrls";

type likedPokemon = {
    [x: string]: any;
}[] | null

export default function Home(){

    const [pokemonData, setPokemonData] = useState<ListPokemonAPIResponse>();
    const [likedPokemons , setLikedPokemons] = useState<likedPokemon>([]);

    const getData = async () => {
        const { data, error } = await supabase
        .from('Pokemon')
        .select()
        
        setLikedPokemons(data);
    }   
    React.useEffect(() => {
        window.scrollTo(0, 0)
    },[pokemonData])    

    React.useEffect(() => {
        getData()
        if(!pokemonData){
            fetch(listPokemons)
            .then(res => res.json())
            .then((obj) => setPokemonData(obj))
        }
    },[])

    
    const fetchPrevious = () => {
            if(pokemonData?.previous){
                fetch(pokemonData?.previous)
                .then(res => res.json())
                .then((obj) => setPokemonData(obj))
        }
    }

    const fetchNext = () => {
        if(pokemonData?.next){
            fetch(pokemonData?.next)
            .then(res => res.json())
            .then((obj) => setPokemonData(obj))
        }   
    }

    return(
        <Box>
            <Grid mt={20} alignContent='center' templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    pokemonData?.results.map((pokemon) => (
                        <Container key={pokemon.name} centerContent>
                            <PokemonCard 
                                pokemon={pokemon} 
                                // isLiked={} 
                             />
                        </Container>
                    ))
                }
            </Grid>
            <Box my={4} display='flex' justifyContent='space-around'>
                <ArrowLeftIcon  onClick={fetchPrevious} w={12} h={12}/>
                <ArrowRightIcon onClick={fetchNext} h={12} w={12} />
            </Box>
        </Box>
    )
}