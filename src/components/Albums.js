import React, { Component } from 'react'

class Albums extends Component {
constructor(props){
  super(props);
  this.state = {
    albums : []
  }
}

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => this.setState({albums : data}));
  }
  
  render() {
    const albumItems = this.state.albums.map(album =>(
      <div key={album.id}>
      <h1>{album.id} || {album.title}</h1>
      </div>
    ));
    return (
      <div>
        <h1>Albums</h1>
        {albumItems}
        {this.props.data}
      </div>
    )
  }
}

export default Albums;