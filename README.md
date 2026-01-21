# LightHouse

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat&logo=vercel)](https://light-house-sujitkoji-portfolio-wor.vercel.app/)
[![Stars](https://img.shields.io/github/stars/sujitkoji/kojilab?style=flat)](https://github.com/sujitkoji/LightHouse-Sujitkoji-Portfolio-Works/stargazers)
[![License](https://img.shields.io/badge/License-Showcase-lightgrey?style=flat)](#license)

---

## Overview

LightHouse is a performance-focused WebGL scene built with React Three Fiber and Three.js.
The project explores real-time rendering, procedural animation, and cinematic composition
for modern web-based 3D experiences.

---

## Live

https://light-house-sujitkoji-portfolio-wor.vercel.app/

---

## Preview

![LightHouse Preview](https://github.com/sujitkoji/LightHouse-Sujitkoji-Portfolio-Works/blob/main/public/lighthouse-img.png?raw=true)

---

## Systems

### Ocean
- Water shader using three-stdlib
- Time-uniform animation
- Large-scale geometry for depth and scale

### Ship
- GLB asset loaded via useGLTF
- Buoyancy motion using sine and cosine
- Subtle rotational drift

### Clouds
- Procedural cloud distribution
- Independent motion parameters
- Optimized per-frame updates

### Environment
- Sky atmosphere
- Star field for depth
- Controlled camera interaction

---

## Stack

| Layer | Tech |
|------|------|
| Framework | Next.js |
| Renderer | React Three Fiber |
| Core | Three.js |
| Helpers | @react-three/drei |
| Shaders | three-stdlib |
| Deployment | Vercel |

---

## Performance

- Clamped device pixel ratio
- GPU-based animation
- Ref-driven updates
- Memoized procedural data

```ts
gl={{ antialias: true, powerPreference: "high-performance" }}
```

## Architecture
```ts
Canvas
 ├─ Ocean
 ├─ LightHouseGLB
 ├─ MovingClouds
 ├─ Sky
 ├─ Stars
 └─ OrbitControls
```
---

## Development

- git clone https://github.com/sujitkoji/LightHouse-Sujitkoji-Portfolio-Works.git
- cd voyage
- npm install
- npm run dev

---

## License

Showcase and educational use only.

---

## Author

- Sujit Koji
- WebGL / Frontend Developer
- React · Three.js · GLSL
