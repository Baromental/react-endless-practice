import { Searchbar } from './Gallery/Searchbar';
import { ImageGallery } from './Gallery/ImageGallery';
import { Button } from './Gallery/Button';
function App() {
  return (
    <div>
      <Searchbar onSubmit="onSubmit" />
      <ImageGallery />
      <Button />
    </div>
  );
}

export default App;
