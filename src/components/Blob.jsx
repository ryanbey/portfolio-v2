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

  const handlePointerOver = () => hover.current = true
  const handlePointerOut = () => hover.current = false

  useFrame((state) => {
    const { clock } = state
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime()
      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 0.75 : 0.25,
        0.02
      )
    }
  })
  
  return (
    <mesh
      ref={mesh}
      scale={1.4}
      position={[1, 0, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
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