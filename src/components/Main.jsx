import React from "react"
export default function Main() {
    const [meme,setMeme] = React.useState({
        top: "Something",
        bottom:"Different",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(event){
        const {value,name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="top"
                        onChange={handleChange}
                        value={meme.top}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottom"
                        onChange={handleChange}
                        value={meme.bottom}
                        
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.top}</span>
                <span className="bottom">{meme.bottom}</span>
            </div>
        </main>
    )
}