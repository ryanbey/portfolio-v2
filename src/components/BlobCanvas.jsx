import { Canvas } from "@react-three/fiber";
import Blob from "./Blob";
import css from '../styles/Blob.module.scss'

export default function BlobCanvas() {
  return (
    <div className={css.blobCanvas}>
      <Canvas camera={{ position: [0.0, 0.0, 5.5] }}>
        <Blob />
      </Canvas>
    </div>
  )
}
