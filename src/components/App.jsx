import React, { Component } from 'react';
import Searchbar from './Gallery/Searchbar';
import { ImageGallery } from './Gallery/ImageGallery';
import { Loader } from './Gallery/Loader';
import { Button } from './Gallery/Button';
import { fetchPictures } from 'services/api';
import s from './styles.module.css';

export default class App extends Component {
  state = {
    query: '',
    pictures: [],
    totalPictures: 0,
    page: 1,
    loading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const { hits, totalHits } = await await fetchPictures(
          this.state.query,
          this.state.page
        );
        this.setState(prev => ({
          pictures: [...prev.pictures, ...hits],
          totalPictures: totalHits,
        }));
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSetQuery = query => {
    this.setState({ query, pictures: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { pictures, loading, totalPictures } = this.state;
    return (
      <div className={s.App}>
        <Searchbar handleSetQuery={this.handleSetQuery} />
        <ImageGallery pictures={pictures} />
        {loading && !pictures.length && <Loader />}
        {pictures.length && pictures.length < totalPictures ? (
          <Button handleLoadMore={this.handleLoadMore} />
        ) : null}
      </div>
    );
  }
}
