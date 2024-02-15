import React from 'react'
import { Link } from 'react-router-dom';

const OneMovie = ({movie}) => {
    const videoid=movie?.id?.videoId
    const snippet=movie?.snippet
    const title=snippet?.title
    const channelName=snippet?.channelTitle
    const description=snippet?.description
    const thumbnail=snippet?.thumbnails?.medium?.url
  return (
    <Link to={"/watch?v=" + videoid}>
    <div className='flex m-4 shadow-xl'>
        <div>
         <img src={thumbnail} alt="" />
        </div>
        <div className='ml-2'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='py-2'>{channelName}</p>
            <p>{description}</p>
        </div>
    </div>
    </Link>
  )
}

export default OneMovie
