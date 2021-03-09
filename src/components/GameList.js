import './GameList.css';
import React, { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';


const GameList = () => {
    const [games, setGames] = useState([])
    
    useEffect(() => {
        const getGames = async () => {
            const gamesFromServer = await fetchGames();
            setGames(gamesFromServer);
        }

        getGames();
    }, [])

    const fetchGames = async () => {
        const res = await fetch('http://localhost:3001/games')
        const data = await res.json();
        
        return data;
    }

    return (
        <div className="list-wrapper">
            {games.map(game => (
            <div class="list-item">
                <div className="img">
                    <img src={game.imgPath} alt="Image not provided" />
                </div>
                <div className="info">
                    <div className="title">{game.title}</div>
                    <div className="description">{game.description}</div>
                    <div className="footer">
                        <NumberFormat 
                            value={game.price}
                            displayType={'text'}
                            prefix={'$'}
                            decimalScale={2}
                            fixedDecimalScale={true}
                        />
                    </div>
                </div>
            </div> 
            ))}
        </div>
    )
}

export default GameList
