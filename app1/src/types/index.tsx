export interface IPokemons {
  results: IResult[]
}

export interface IResult {
  name: string
  url: string
}

export interface IPokemonProps {
  pokemons: IPokemons
}
