import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://gtoioidyisxfspkcumsn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0b2lvaWR5aXN4ZnNwa2N1bXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3MzkzMzIsImV4cCI6MTk5NTMxNTMzMn0.n6KupNUd_CVF1unqNr4tjGEYVyWv7L7_Xmwn2obK35g"
)

export const listPokemons = 'https://pokeapi.co/api/v2/pokemon'



