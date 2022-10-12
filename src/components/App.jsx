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
    lastPage: false,
  };
  handlerFormSubmit = query => {
    this.setState({
      query,
      page: 1,
      items: [],
      lastPage: false,
    })
  }
 
  
   componentDidUpdate(_, prevState) {
    
    // const {items} = this.state
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      const API_KEY = '29484059-072d6a524128743cd311d2d11';
      const thisFoto = this.state.query;
      const thisPage = this.state.page;
    
      
      
     this.setState({loading: true})
      fetch(`https://pixabay.com/api/?q=${thisFoto}&page=${thisPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => { return res.json() })
        .then(res => {
          this.setState(({ items }) => ({
            items: [...items, ...res.hits],
          }));
          if (Math.ceil(res.total / 12) === this.state.page) {
            return this.setState({ lastPage: true });
          }
        })
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
    const { showModal, items, loading, lastPage } = this.state;
    return (<>
      
      
      
      
      {showModal && <Modal closeModal ={this.toggleModal} />}
      
     
       {loading && <Loader />}
      <Searchbar onSubmit={this.handlerFormSubmit}  />
      <ImageGallery items={items} />
      {items.length > 0 && !lastPage && <Button onClick={this.loadMore}  />}
     
      
      </>










    )
  }
};
