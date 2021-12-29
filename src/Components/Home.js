import React from 'react'

function Home({dark}) {
    console.log(dark)
    return (
        <div>
            {
                (dark===false)?<h1>Home</h1>:<h1>Home@</h1>
            }
            
           
        </div>
    )
}

export default Home
