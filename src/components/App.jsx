import React, { Component } from 'react';
import Searchbar from './Gallery/Searchbar';
// import { ImageGallery } from './Gallery/ImageGallery';
import { Loader } from './Gallery/Loader';
// import { Button } from './Gallery/Button';
import { fetchPhoto } from 'services/api';

export default class App extends Component {
  state = {
    query: '',
    pictures: 0,
    totalPictures: 0,
    loading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const { pictures, totalPictures } = await fetchPhoto();
      this.setState({ pictures, totalPictures });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate() {}

  handleSetQuery = query => {
    this.setState({ query });
  };

  render() {
    const { items, loading } = this.state;
    return (
      <div>
        <Searchbar handleSetQuery={this.handleSetQuery} />
        {/* <ImageGallery /> */}
        {loading && <Loader />}
        {/* {items.length ? <Button /> : null} */}
      </div>
    );
  }
}
