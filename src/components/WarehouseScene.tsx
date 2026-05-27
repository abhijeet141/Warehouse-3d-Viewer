import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid, Stats, GizmoHelper, GizmoViewport } from '@react-three/drei';
import { SegmentBox } from './SegmentBox';
import type { Segment, SegmentType } from '../types';

export interface WarehouseSceneConfig {
  segments: Segment[];
  camera: {
    position: [number, number, number];
    fov?: number;
    near?: number;
    far?: number;
  };
  orbit: {
    target: [number, number, number];
    minDistance: number;
    maxDistance: number;
  };
  grid: {
    size: number;
    cellSize: number;
    sectionSize: number;
    fadeDistance: number;
    centerXZ: [number, number];
  };
  axesSize: number;
  originSphereRadius: number;
}

interface Props extends WarehouseSceneConfig {
  visibleTypes: Set<SegmentType>;
}

export function WarehouseScene({
  segments,
  visibleTypes,
  camera,
  orbit,
  grid,
  axesSize,
  originSphereRadius,
}: Props) {
  return (
    <Canvas
      camera={{
        position: camera.position,
        fov: camera.fov ?? 50,
        near: camera.near ?? 10,
        far: camera.far ?? 100000,
      }}
      style={{ background: '#0f172a' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[30000, 40000, 20000]} intensity={0.9} castShadow />
      <pointLight position={[-10000, 15000, -10000]} intensity={0.3} />

      {/* Floor grid */}
      <Grid
        args={[grid.size, grid.size]}
        cellSize={grid.cellSize}
        cellThickness={0.5}
        cellColor="#4b5563"
        sectionSize={grid.sectionSize}
        sectionThickness={1.2}
        sectionColor="#94a3b8"
        fadeDistance={grid.fadeDistance}
        fadeStrength={1}
        position={[grid.centerXZ[0], -1, grid.centerXZ[1]]}
      />

      {/* Axes helper at origin */}
      <axesHelper args={[axesSize]} />

      {/* Origin marker (red sphere) */}
      <mesh position={[0, originSphereRadius, 0]}>
        <sphereGeometry args={[originSphereRadius, 16, 16]} />
        <meshBasicMaterial color="red" />
      </mesh>

      {segments.map((seg, i) => (
        <SegmentBox
          key={`${seg.fullName}-${i}`}
          segment={seg}
          visible={visibleTypes.has(seg.type)}
        />
      ))}

      {/* Camera controls */}
      <OrbitControls
        target={orbit.target}
        enablePan
        enableZoom
        enableRotate
        minDistance={orbit.minDistance}
        maxDistance={orbit.maxDistance}
      />

      {/* Axis gizmo in corner */}
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
      </GizmoHelper>

      <Stats className="r3f-stats" />
    </Canvas>
  );
}
