import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Movie from './component/Movie'
import showMovie from './component/ShowMovie'

function App(props)
{
    return(
        <BrowserRouter>
            <div>
                <h2>WELCOME TO MOVIE WEB APP CHALLENGES...</h2>
                <Link to='/'></Link>

                <Route path='/' component={Movie} exact={true}/>
                <Route path='/movie/:imdbID' component={showMovie}/>
            </div>
        </BrowserRouter>
    )
}

export default App