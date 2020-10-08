import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Movie extends React.Component{
    constructor(){
        super()
        this.state={
            movie:[],
            data:'',
        }
    }
    handleSearch=(e)=>{
        const data=e.target.value
        this.setState({data})
        axios.get(`https://www.omdbapi.com/?apikey=72c11475&s=${data}&type=movie`)
        .then(response=>{
            const search=response.data.Search
            this.setState({movie:search})
        })
        .catch(err=>{
            
        })
        this.setState({
            search:e.target.value
        })
    }
    render(){
        return(
            <div>
                <label><b>Search Box</b></label>
                <input type='search' name='data' onChange={this.handleSearch} placeholder='search by name'></input>
                
                {
                    this.state.movie!==undefined?(
                        <div>
                            <ul>
                                {
                                    this.state.movie.map((ele,i)=>{
                                        return (<li key={i}><Link to={`/movie/${ele.imdbID}`}>{ele.Title}</Link></li>)
                                    })
                                }
                            </ul>
                        </div>):('')
                }
                
            </div>
        )
    }
}
export default Movie
