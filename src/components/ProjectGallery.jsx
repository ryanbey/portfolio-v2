import { PhotoProvider, PhotoView } from 'react-photo-view';
import css from '../styles/ProjectGallery.module.scss'

export default function ProjectGallery({ images }) {
  return (
    <PhotoProvider maskOpacity={0.8} className={css.galleryContainer} maskClassName={css.mask}>
      <div className={css.galleryLayout}>
        {images?.map((item, index) => (
          <PhotoView key={index} src={item}>
            {index < 4 && <img src={item} alt="" className={css.imageElement} draggable="false" />}
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}
