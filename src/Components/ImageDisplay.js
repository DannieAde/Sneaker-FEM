import React from 'react'

const ImageDisplay = ({ currentImageNo, setCurrentImageNo, currentImage, setCurrentImage, toggleLightBox, lightBox, prevImage, nextImage }) => {

  const showImage = (e) => {
    setCurrentImageNo(Number(e.target.id))
    setCurrentImage(`images/image-product-${e.target.id}.jpg`)
  }

  return (
    <div className='image-display'>
      <div className='main-display'>
        <div onClick={prevImage} className='navigate-images prev'>
          <img src="images/icon-previous.svg" alt="" />
        </div>
        {lightBox ? <img onClick={toggleLightBox} className='product-image' src='images/image-product-1.jpg' alt="" /> :<img onClick={toggleLightBox} className='product-image' src={currentImage} alt="" />}
        <div onClick={nextImage} className='navigate-images next'>
          <img src="images/icon-next.svg" alt="" />
        </div>
      </div>
      <div className='thumbnail-images'>
        <div className={currentImageNo === Number(1) ? 'clicked' : ''}>
          <img id='1' onClick={(e) => showImage(e)} className={currentImageNo === Number(1) ? 'thumbnail clicked' :'thumbnail'} src="images/image-product-1-thumbnail.jpg" alt="" />
        </div>
        
        <div className={currentImageNo === Number(2) ? 'clicked' :''}>
          <img id='2' onClick={(e) => showImage(e)} className={currentImageNo === Number(2) ? 'thumbnail clicked' :'thumbnail'} src="images/image-product-2-thumbnail.jpg" alt="" />
        </div>

        <div className={currentImageNo === Number(3) ? 'clicked' :''}>
          <img id='3' onClick={(e) => showImage(e)} className={currentImageNo === Number(3) ? 'thumbnail clicked' :'thumbnail'} src="images/image-product-3-thumbnail.jpg" alt="" />
        </div>
        
        <div className={currentImageNo === Number(4) ? 'clicked' :''}>
          <img id='4' onClick={(e) => showImage(e)} className={currentImageNo === Number(4) ? 'thumbnail clicked' :'thumbnail'} src="images/image-product-4-thumbnail.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ImageDisplay