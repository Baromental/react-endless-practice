import React, { useEffect, useState } from 'react';
import Searchbar from './Gallery/Searchbar';
import { ImageGallery } from './Gallery/ImageGallery';
import { Loader } from './Gallery/Loader';
import { Button } from './Gallery/Button';
import Modal from './Gallery/Modal';
import { fetchPictures } from 'services/api';
import s from './styles.module.css';

export default function App() {
  // state = {
  //   query: '',
  //   pictures: [],
  //   totalPictures: 0,
  //   page: 1,
  //   loading: false,
  //   error: null,
  //   isOpen: false,
  //   content: 0,
  // };

  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [totalPictures, setTotalPictures] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(0);

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.query !== this.state.query ||
  //     prevState.page !== this.state.page
  //   ) {
  //     try {
  //       this.setState({ loading: true });
  //       const { hits, totalHits } = await await fetchPictures(
  //         this.state.query,
  //         this.state.page
  //       );
  //       this.setState(prev => ({
  //         pictures: [...prev.pictures, ...hits],
  //         totalPictures: totalHits,
  //       }));
  //     } catch (error) {
  //     } finally {
  //       this.setState({ loading: false });
  //     }
  //   }
  // }

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { hits, totalHits } = await fetchPictures(query, page);
        setPictures(prev => [...prev, ...hits]);
        setTotalPictures(totalHits);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = query => {
    setQuery(query);
    setPictures([]);
    setPage(page);
    // this.setState({ query, pictures: [], page: 1 });
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
    // this.setState(prev => ({ page: prev.page + 1 }));
  };

  const handleToggleModal = () => {
    setIsOpen(prev => !prev);
    // this.setState(prev => ({ isOpen: !prev.isOpen }));
  };

  const handleSeeBigPicture = content => {
    setIsOpen(true);
    setContent(content);
    // this.setState({ isOpen: true, content });
  };

  return (
    <div className={s.App}>
      <Searchbar handleSetQuery={handleSetQuery} />
      <ImageGallery pictures={pictures} openModal={handleSeeBigPicture} />
      {loading && !pictures.length && <Loader />}
      {pictures.length && pictures.length < totalPictures ? (
        <Button handleLoadMore={handleLoadMore} />
      ) : null}
      {isOpen && <Modal closeModal={handleToggleModal} content={content} />}
    </div>
  );
}
