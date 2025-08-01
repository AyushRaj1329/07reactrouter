import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    // const data =useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/AyushRaj1329')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })

    }, [])

    return (
        <div className='text-center m-4 bg-yellow-500 text-green p-3 text-2xl'>Github followers : {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={200} />
        </div>
    )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/AyushRaj1329')

//     return response.jason()
// }