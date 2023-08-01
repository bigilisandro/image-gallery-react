import "./App.css";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div data-test-id="component-app" className="bg-body">
      <ImageGallery />
    </div>
  );
}

export default App;
