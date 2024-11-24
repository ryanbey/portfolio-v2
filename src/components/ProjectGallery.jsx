import { PhotoProvider, PhotoView } from 'react-photo-view';
import css from '../styles/ProjectGallery.module.scss'

export default function ProjectGallery({ images }) {
  return (
    <PhotoProvider
      maskOpacity={0.5}
      photoWrapClassName={css.photoWrap}
      photoClassName={css.photo}
    >
      <div>
        {images?.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt="" height={50} width={120} style={{ objectFit: 'cover' }}/>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  )
}
