import './App.css';
import NavBar from './Components/NavBar';
import ImageDisplay from './Components/ImageDisplay'
import InfoDisplay from './Components/InfoDisplay'
import { useState } from 'react';
import LightBox from './Components/LightBox';
import LeftNav from './Components/LeftNav';

function App() {

  let [currentImageNo, setCurrentImageNo] = useState(1)
  let [currentImage, setCurrentImage] = useState('images/image-product-1.jpg')
  let [noOfProduct, setNoOfProduct] = useState(0)

  let [cartActive, setCartActive] = useState(false)
  let [cart, setCart] = useState({})
  let [lightBox, setLightBox] = useState(false)
  let [leftNav, setLeftNav] = useState(false)

  const increaseFn = () => {
    setNoOfProduct(noOfProduct + 1)
  }

  const decreaseFn = () => {
    noOfProduct > 0 && setNoOfProduct(noOfProduct - 1)
  }

  const toggleCart = () => {
    setCartActive(!cartActive)
  }

  const toggleLightBox = () => {
    setLightBox(!lightBox)
  }

  const toggleLeftNav = () => {
    setLeftNav(!leftNav)
  }

  const nextImage = () => {
    // Increment currentImageNo if it's less than 4
    if (currentImageNo < 4) {
      setCurrentImageNo(currentImageNo + 1);
      setCurrentImage(`images/image-product-${currentImageNo + 1}.jpg`);
    }
  };

  const prevImage = () => {
    // Increment currentImageNo if it's less than 4
    if (currentImageNo > 1) {
      setCurrentImageNo(currentImageNo - 1);
      setCurrentImage(`images/image-product-${currentImageNo - 1}.jpg`);
    }
  };

  return (
    <div className="App">
      <LeftNav leftNav={leftNav} toggleLeftNav={toggleLeftNav}/>
      <NavBar toggleLeftNav={toggleLeftNav} cartActive={cartActive} toggleCart={toggleCart} cart={cart} setCart={setCart} noOfProduct={noOfProduct}/>
      <div className='display-section'>
        <ImageDisplay prevImage={prevImage} nextImage={nextImage} toggleLightBox={toggleLightBox} lightBox={lightBox} currentImageNo={currentImageNo} setCurrentImageNo={setCurrentImageNo} currentImage={currentImage} setCurrentImage={setCurrentImage}/>
        <InfoDisplay noOfProduct={noOfProduct} increaseFn={increaseFn} decreaseFn={decreaseFn} cart={cart} setCart={setCart} />
      </div>
      <LightBox 
        currentImageNo={currentImageNo} 
        setCurrentImageNo={setCurrentImageNo} 
        currentImage={currentImage} 
        setCurrentImage={setCurrentImage}
        lightBox={lightBox}
        setLightBox={setLightBox}
        toggleLightBox={toggleLightBox}
        prevImage={prevImage}
        nextImage={nextImage}
      />
    </div>
  );
}

export default App;
