import { useMemo, useRef } from "react"
import { extend, useFrame } from "@react-three/fiber"
import { IcosahedronGeometry, MathUtils } from "three"
extend({ IcosahedronGeometry })
import vertexShader from "./shaders/vertexShader"
import fragmentShader from "./shaders/fragmentShader"

export default function Blob() {
  const mesh = useRef()
  const hover = useRef(false)
  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_intensity: { value: 0.35 },
  }))

  const handleBlobHoverOn = () => hover.current = true
  const handleBlobHoverOff = () => hover.current = false
  const handleBlobClick = () => {
    // Mostly here for mobile since you can't hover
    hover.current = true
    setTimeout(() => {
      hover.current = false
    }, 3000);
  }

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = 0.4 * state.clock.getElapsedTime()
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 0.75 : 0.25,
        0.04 // hover transition time
      )
    }
  })
  
  return (
    <mesh
      ref={mesh}
      scale={1.25}
      position={[0, 0, 0]}
      onPointerOver={handleBlobHoverOn}
      onPointerOut={handleBlobHoverOff}
      onClick={handleBlobClick}
    >
      <icosahedronGeometry args={[2, 25]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}