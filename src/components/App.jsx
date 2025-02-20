import React, { Component } from 'react';
import { Searchbar } from './Gallery/Searchbar';
import { ImageGallery } from './Gallery/ImageGallery';
import { Button } from './Gallery/Button';
import { fetchPosts } from 'services/api';

export default class App extends Component {
  async componentDidMount() {
    const data = await fetchPosts();
  }
  render() {
    return (
      <div>
        {/* <Searchbar onSubmit="onSubmit" />
        <ImageGallery />
        <Button /> */}
      </div>
    );
  }
}
