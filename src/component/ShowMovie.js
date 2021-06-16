import React from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'

class ShowMovie extends React.Component{
    constructor(){
        super()
        this.state={
            details:{}
        }//
    }
    componentDidMount(){
        const id=this.props.match.params.imdbID
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=72c11475`)
        .then(response=>{
            const details=response.data
            console.log('movie details',details)
            this.setState({details})
        })
    }
    render(){
        return(
            <div>
                <Card style={{ width: '22 rem' }}>
                    <Card.Img variant="top" src={this.state.details.Poster} width='220 rem'/> 
                    <Card.Body>
                        <Card.Title>
                            <b>
                                Title: {this.state.details.Title}
                                Year: {this.state.details.Year} <br/>
                                Rated: {this.state.details.Rated} <br/>
                                Released: {this.state.details.Released}<br/>
                                RunTime: {this.state.details.Runtime}<br/>
                                Genre: {this.state.details.Genre}<br/>
                                Director: {this.state.details.Director}<br/>
                                writer: {this.state.details.Writer}<br/>
                                Actors:{this.state.details.Actors}<br/>
                                Plot:{this.state.details.Plot}<br/>
                                Language: {this.state.details.Language}<br/>
                                Country: {this.state.details.Country}<br/>
                                Awards: {this.state.details.Awards}<br/>
                                Poster: {this.state.details.Poster}<br/>
                                Rating:-{this.state.details.Rated}<br/>
                                </b>
                        </Card.Title>
                             <Card.Link href="/">backward</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default ShowMovie
