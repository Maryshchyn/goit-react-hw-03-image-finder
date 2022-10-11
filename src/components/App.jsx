import { Component } from "react";
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component  {
  state = {
    page: 1,
    query: '',
    items: [],
    loading: false,
    showModal: false,
    largeImageURL: null,
  };
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
   componentDidUpdate(_, prevState) {
    
    const {items} = this.state
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      const API_KEY = '29484059-072d6a524128743cd311d2d11';
      const thisFoto = this.state.query;
      const thisPage = this.state.page;
    
      this.setState(({ items: prevItems }) => ({
        items: [...prevItems, ...items]
      }))
      
     this.setState({loading: true})
      fetch(`https://pixabay.com/api/?q=${thisFoto}&page=${thisPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => { return res.json() })
        .then(({ hits }) => this.setState({ items: [...hits] }))
        .then(console.log)
        .finally(()=>this.setState({loading: false}))
    }
    
  }
 
    

  

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))

    
  }
  

 toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  render() {
    const { showModal, items, loading } = this.state;
    return (<>
      
      {/* <button type="button" onClick={this.toggleModal}>Load more</button> */}
      {showModal && <Modal closeModal ={this.toggleModal} />}
      
     
       {loading && <Loader />}
      <Searchbar onSubmit={this.handlerFormSubmit} />
      <ImageGallery items={items} />
     {items.length > 0 && <Button onClick={this.loadMore}  />}
      
      </>










    )
  }
};
