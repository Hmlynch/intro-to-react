import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'

export default function Pokemon() {
    const [pokemon, setPokemon] = useState({})
    const [loadState, setLoadState] = useState("LOADING")

    const { fetchPokemon } = useContext(DataContext)

    useEffect(() => {
        async function getFirstPokemon() {
            const data = await fetchPokemon(1)
            setPokemon(data)
            setLoadState("LOADED")
        }
        getFirstPokemon()
    }, [])

    async function searchPokemon(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(formData.get('pokemonName'))

        const data = await fetchPokemon(formData.get('pokemonName'))
        setPokemon(data)
        setLoadState("LOADED")
        event.target.reset()
    }

    return (
        <div className='pokemon'>
            <h1>Pokemon</h1>
            <p>Showing pokemon ID: { pokemon.id }</p>
            <form onSubmit={searchPokemon}>
                <input type="text" name="pokemonName" />
                <button>Search</button>
            </form>
            {
                (loadState === 'LOADED') ?
                <>
                    <img src={ pokemon.sprites.front_default } alt="" />
                    <h2>{ pokemon.name }</h2>
                    <p>Height: { pokemon.height }</p>
                    <p>Weight: { pokemon.weight }</p>    
                </> :
                <p>Loading...</p>
            }
            {
                (pokemon.id > 1) ?
                <button onClick={async () => {
                    pokemon.id--
                    const data = await fetchPokemon(pokemon.id)
                    setPokemon(data)
                    setLoadState("LOADED")                   
                }}>Previous Pokemon</button>
                : <></>
            }
            <button onClick={async () => {
                    pokemon.id++
                    const data = await fetchPokemon(pokemon.id)
                    setPokemon(data)
                    setLoadState("LOADED")     
            }}>Next Pokemon</button>
        </div>
    )
}