import React, { useEffect, useState } from 'react'
import { SEARCH_QUERY,} from '../utils/constants';
import OneMovie from './OneMovie';
import { useDispatch, useSelector } from 'react-redux';
import { removeMovies } from '../utils/resultSlice';

const SearchResult = () => {
    const [movies,setMovie]=useState([]);
    const keyword=useSelector(store=>store.result)
    useEffect(()=>{
        loadMovies()

    },[keyword])

    
    const disaptch=useDispatch()


    const loadMovies=async()=>{
        if(keyword.length>0){
        const data=await fetch(SEARCH_QUERY+keyword[0]);
        const res=await data.json();
        setMovie(res.items)
        disaptch(removeMovies())
        }
    }
    if(!movies) return;
  return (
    <div>
        
        {
            movies.map((movie,idx)=>{
                return (
                    <OneMovie key={idx} movie={movie} />
                )
            })
        }
     
    </div>
  )
}

export default SearchResult
