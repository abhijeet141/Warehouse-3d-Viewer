import { useState } from 'react';
import { Html, Edges } from '@react-three/drei';
import type { Segment } from '../types';

const COLOR_MAP: Record<string, string> = {
  AISLE: '#3b82f6',
  BAY:   '#f97316',   
  LEVEL: '#22c55e',   
  BIN:   '#ef4444',
};

const EDGE_COLOR_MAP: Record<string, string> = {
  AISLE: '#3b82f6',
  BAY:   '#f97316',
  LEVEL: '#22c55e',
  BIN:   '#ef4444',
};

const OPACITY_MAP: Record<string, number> = {
  AISLE: 0.06,
  BAY:   0.15,
  LEVEL: 0.30,
  BIN:   0,   
};

const HOVER_OPACITY_MAP: Record<string, number> = {
  AISLE: 0.12,
  BAY:   0.25,
  LEVEL: 0.45,
  BIN:   0.95,
};

const HOVER_COLOR_MAP: Record<string, string> = {
  AISLE: '#fbbf24',
  BAY:   '#fbbf24',
  LEVEL: '#fbbf24',
  BIN:   '#7f1d1d',
};

interface Props {
  segment: Segment;
  visible: boolean;
}

export function SegmentBox({ segment, visible }: Props) {
  const [hovered, setHovered] = useState(false);

  if (!visible) return null;

  const position: [number, number, number] = [
    segment.coordinateX + segment.dimensionX / 2,
    segment.coordinateZ + segment.dimensionZ / 2,
    segment.coordinateY + segment.dimensionY / 2,
  ];

  const size: [number, number, number] = [
    segment.dimensionX,
    segment.dimensionZ,
    segment.dimensionY,
  ];

  const color = COLOR_MAP[segment.type];
  const edgeColor = EDGE_COLOR_MAP[segment.type];
  const baseOpacity = OPACITY_MAP[segment.type];
  const hoverOpacity = HOVER_OPACITY_MAP[segment.type];
  const isBin = segment.type === 'BIN';
  const isContainer = !isBin;
  const meshRaycast = isContainer ? (() => undefined) : undefined;

  return (
    <group>
      <mesh
        position={position}
        onPointerOver={
          isBin
            ? (e) => { e.stopPropagation(); setHovered(true); }
            : undefined
        }
        onPointerOut={isBin ? () => setHovered(false) : undefined}
        raycast={meshRaycast as never}
      >
        <boxGeometry args={size} />
        <meshStandardMaterial
          color={hovered ? HOVER_COLOR_MAP[segment.type] : color}
          opacity={hovered ? hoverOpacity : baseOpacity}
          transparent
          depthWrite={isBin && hovered}
        />
        <Edges
          scale={1.001}
          threshold={15}
          color={hovered ? HOVER_COLOR_MAP[segment.type] : edgeColor}
        />
      </mesh>

      {hovered && (
        <Html position={position} center distanceFactor={8000} zIndexRange={[100, 0]}>
          <div style={{
            background: 'rgba(0,0,0,0.85)',
            color: 'white',
            padding: '6px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            fontFamily: 'monospace',
          }}>
            <strong>{segment.fullName}</strong> ({segment.type})
            <br />
            coord: ({segment.coordinateX}, {segment.coordinateY}, {segment.coordinateZ})
            <br />
            dim:   ({segment.dimensionX} × {segment.dimensionY} × {segment.dimensionZ})
          </div>
        </Html>
      )}
    </group>
  );
}
