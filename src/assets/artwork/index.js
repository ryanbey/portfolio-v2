import bannerFD from './banner-fd.jpg'
import bannerR3 from './banner-r3.jpg'
import bannerR3mix from './banner-r3mix.jpg'
import completeBadKitty from './complete-badkitty.jpg'
import logoAakara from './logo-aakara.jpg'
import logoCidrec from './logo-cidrec.jpg'
import logoFruitPunch from './logo-fruit-punch.jpg'
import logoR3 from './logo-r3.jpg'
import logoR3mix from './logo-r3mix.jpg'
import polyscapeForest from './polyscape-forest.jpg'
import polyscapeSunset from './polyscape-sunset.jpg'

const artwork = {
  bannerFD,
  bannerR3,
  bannerR3mix,
  completeBadKitty,
  logoAakara,
  logoCidrec,
  logoFruitPunch,
  logoR3,
  logoR3mix,
  polyscapeForest,
  polyscapeSunset,
}

const allArtwork = Object.values(artwork).map((image) => image.src)

export default allArtwork