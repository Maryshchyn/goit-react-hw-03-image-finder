import { Component } from "react"
import Searchbar from './Searchbar/Searchbar'
// import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
import { ImageGallery } from './ImageGallery/ImageGallery'
// import {Button} from './Button/Button'


export class App extends Component  {
  state = {
    foto: null,
    page: 1,
    query: '',
    items: [],
    loading: false,
    
  }
  
  componentDidUpdate(_, prevState) {
    
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      const API_KEY = '29484059-072d6a524128743cd311d2d11';
      const thisFoto = this.state.query;
      const thisPage = this.state.page;
      this.setState({loading: true})
      fetch(`https://pixabay.com/api/?q=${thisFoto}&page=${thisPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => { return res.json() })
        .then(({ hits }) => this.setState({ items: [...hits] }))
        .then(console.log)
        .finally(()=>this.setState({loading: false}))
    }
    
  }
  

  handlerFormSubmit = query => {
    this.setState({query})
  }
 
  hendlerButton = e => {
   e.preventDefault()
    this.setState({
      page: 1,
    query: e.target.elements.query.value,
    items: [],
    })
    
    e.target.reset()
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }
    




  render() {
    return (<>
     
      {/* <Button onClick={this.loadMore} loadMore={this.state.page} /> */}
      <Searchbar onSubmit={this.handlerFormSubmit} />
      <ImageGallery items={this.state.items} />
      <button onClick={this.loadMore}>Load more</button>
      
      </>


//       <header >
//         {this.loading && <h1>Загружаєм</h1>}

//         {this.state.foto && <div>{this.state.foto.hits[1].largeImageURL}</div>}
//         {this.state.loading && <h1>загружаєм</h1>}







//   <form onSubmit={this.hendlerButton}>
//     <button type="submit" >
//       <span >Search</span>
//     </button>

//     <input
//       name="query"
//       type="text"
//       // autocomplete="off"
//       // autofocus
//       placeholder="Search images and photos"
//     />
//         </form>
        
        
// </header>
    )
  }
};
