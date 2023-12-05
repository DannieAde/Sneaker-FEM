import React from 'react'

const LightBox = ({ currentImageNo, setCurrentImageNo, currentImage, setCurrentImage, lightBox, toggleLightBox, prevImage, nextImage }) => {
  return (
    <div style={{visibility: lightBox ? 'visible' : 'hidden'}} className='lightbox-container'>
      <div className='product-image-container'>
        <img onClick={toggleLightBox} className='icon-close' src="images/icon-close.svg" alt="" />
        <div onClick={prevImage} className='navigate-images prev'>
          <img src="images/icon-previous.svg" alt="" />
        </div>
        <img onClick={toggleLightBox} className='product-image' src={currentImage} alt="" />
        <div onClick={nextImage} className='navigate-images next'>
          <img src="images/icon-next.svg" alt="" />
        </div>
      </div>
      <div className='thumbnail-images'>
        <div className={currentImageNo === Number(1) ? 'clicked' : ''}>
          <img className={currentImageNo === Number(1) ? 'thumbnail clicked' :'thumbnail'} src="images/image-product-1-thumbnail.jpg" alt="" />
        </div>
        
        <div className={currentImageNo === Number(2) ? 'clicked' :''}>
          <img className={currentImageNo === Number(2) ? 'thumbnail clicked' :'thumbnail'} src="images/image-product-2-thumbnail.jpg" alt="" />
        </div>

        <div className={currentImageNo === Number(3) ? 'clicked' :''}>
          <img className={currentImageNo === Number(3) ? 'thumbnail clicked' :'thumbnail'} src="images/image-product-3-thumbnail.jpg" alt="" />
        </div>
        
        <div className={currentImageNo === Number(4) ? 'clicked' :''}>
          <img className={currentImageNo === Number(4) ? 'thumbnail clicked' :'thumbnail'} src="images/image-product-4-thumbnail.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LightBox