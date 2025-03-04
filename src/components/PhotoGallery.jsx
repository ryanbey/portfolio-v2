import { PhotoProvider, PhotoView } from 'react-photo-view';
import css from '../styles/PhotoGallery.module.scss'

export default function PhotoGallery({ images, showAll = false }) {
  const numPhotosToDisplay = showAll ? 100 : 1
  const showAllAttr = showAll.toString()

  return (
    <PhotoProvider maskOpacity={0.8} className={css.galleryContainer} maskClassName={css.mask}>
      <div className={css.galleryLayout} show-all={showAllAttr}>
        {images?.map((item, index) => (
          <PhotoView key={index} src={item}>
            {index < numPhotosToDisplay && (
              <img
                src={item}
                alt=""
                className={css.imageElement}
                show-all={showAllAttr} 
                draggable="false"
              />
            )}
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}
