import { useMemo, useState } from 'react';
import { WarehouseScene, type WarehouseSceneConfig } from './components/WarehouseScene';
import { SEGMENTS_WAREHOUSE1 } from './data/segmentsWarehouse1';
import { SEGMENTS_WAREHOUSE2 } from './data/segmentsWarehouse2';
import { SEGMENTS_WAREHOUSE3 } from './data/segmentsWarehouse3';
import { SEGMENTS_WAREHOUSE4 } from './data/segmentsWarehouse4';
import type { SegmentType } from './types';

type WarehouseId = 'warehouse1' | 'warehouse2' | 'warehouse3' | 'warehouse4';

interface WarehouseEntry {
  id: WarehouseId;
  label: string;
  scene: WarehouseSceneConfig;
  legend: JSX.Element;
}

const WAREHOUSES: Record<WarehouseId, WarehouseEntry> = {
  warehouse1: {
    id: 'warehouse1',
    label: 'Warehouse 1 (3 aisles)',
    scene: {
      segments: SEGMENTS_WAREHOUSE1,
      camera: { position: [9000, 7000, 14000], near: 10, far: 100000 },
      orbit: { target: [3000, 2000, 4500], minDistance: 500, maxDistance: 60000 },
      grid: {
        size: 20000,
        cellSize: 500,
        sectionSize: 2000,
        fadeDistance: 40000,
        centerXZ: [3000, 3000],
      },
      axesSize: 2500,
      originSphereRadius: 80,
    },
    legend: (
      <>
        <div><b>X:</b> 2 bays × 1500 + 40 offset (aisle dim.X = 6120)</div>
        <div><b>Y:</b> 3 aisles at Y = 0 / 3000 / 6000 (each dim.Y 2000, offset 1000)</div>
        <div><b>Z:</b> 0–6100 (3 levels of 2000mm + 50mm beam)</div>
        <div style={{ marginTop: 6 }}>
          <b>Counts:</b> 3 aisles · 12 bays · 36 levels · 72 bins
        </div>
      </>
    ),
  },
  warehouse2: {
    id: 'warehouse2',
    label: 'Warehouse 2 (10 aisles)',
    scene: {
      segments: SEGMENTS_WAREHOUSE2,
      camera: { position: [40000, 28000, 50000], near: 50, far: 300000 },
      orbit: { target: [13000, 6000, 13500], minDistance: 1000, maxDistance: 150000 },
      grid: {
        size: 60000,
        cellSize: 1000,
        sectionSize: 5000,
        fadeDistance: 120000,
        centerXZ: [13000, 13500],
      },
      axesSize: 6000,
      originSphereRadius: 200,
    },
    legend: (
      <>
        <div><b>X:</b> A-E at 0–12000, walkway 12000–14000, F-J at 14000–26000</div>
        <div><b>Y:</b> 5 aisles × 5400 = 0–27000 (within each: rack 1200 + walkway 3000 + rack 1200)</div>
        <div><b>Z:</b> 0–12000 (6 levels of 1950mm + 50mm beam)</div>
        <div style={{ marginTop: 6 }}>
          <b>Counts:</b> 10 aisles · 100 bays · 600 levels · 1800 bins
        </div>
      </>
    ),
  },
  warehouse3: {
    id: 'warehouse3',
    label: 'Warehouse 3 (14 aisles)',
    scene: {
      segments: SEGMENTS_WAREHOUSE3,
      camera: { position: [60000, 50000, 140000], near: 100, far: 500000 },
      orbit: { target: [7500, 6000, 45500], minDistance: 2000, maxDistance: 250000 },
      grid: {
        size: 120000,
        cellSize: 1500,
        sectionSize: 7500,
        fadeDistance: 200000,
        centerXZ: [7500, 45500],
      },
      axesSize: 8000,
      originSphereRadius: 300,
    },
    legend: (
      <>
        <div><b>X:</b> 5 bays × 3000 + 4 × 100 offset = 0–15400 (aisle dim.X)</div>
        <div><b>Y:</b> 14 aisles × 6500 = 0–91000 (within each: rack 1500 + walkway 3500 + rack 1500)</div>
        <div><b>Z:</b> 0–12000 (5 levels of 2350mm + 50mm beam)</div>
        <div style={{ marginTop: 6 }}>
          <b>Counts:</b> 14 aisles · 140 bays · 700 levels · 2100 bins
        </div>
      </>
    ),
  },
  warehouse4: {
    id: 'warehouse4',
    label: 'Warehouse 4 (3 separated racks)',
    scene: {
      segments: SEGMENTS_WAREHOUSE4,
      camera: { position: [14000, 8000, 14000], near: 10, far: 60000 },
      orbit: { target: [4500, 3000, 2250], minDistance: 500, maxDistance: 40000 },
      grid: {
        size: 20000,
        cellSize: 500,
        sectionSize: 2000,
        fadeDistance: 40000,
        centerXZ: [4500, 2250],
      },
      axesSize: 2000,
      originSphereRadius: 100,
    },
    legend: (
      <>
        <div><b>Shape:</b> 3 separated racks (1st left, 2nd top-middle, 3rd right) — gaps between</div>
        <div><b>Path:</b> +Y (1st rack) → skip 1500 → +X (2nd rack) → skip 1500 → +Y (3rd rack)</div>
        <div><b>Bay dim:</b> 1500 × 1500 × 6000 (square, orientation-agnostic)</div>
        <div><b>Aisle box:</b> 9000 × 4500 × 6000 (encompasses all 3 racks)</div>
        <div style={{ marginTop: 6 }}>
          <b>Counts:</b> 1 aisle · 6 bays · 12 levels · 12 bins
        </div>
      </>
    ),
  },
};

const ALL_TYPES: SegmentType[] = ['AISLE', 'BAY', 'LEVEL', 'BIN'];

const TYPE_COLORS: Record<SegmentType, string> = {
  AISLE: '#0ea5e9',
  BAY:   '#f97316',
  LEVEL: '#22c55e',
  BIN:   '#ef4444',
};

const TYPE_LABELS: Record<SegmentType, string> = {
  AISLE: 'AISLE',
  BAY:   'BAY',
  LEVEL: 'LEVEL',
  BIN:   'BIN',
};

const TYPE_DESCRIPTIONS: Record<SegmentType, string> = {
  AISLE: 'Aisle box',
  BAY:   'Rack column',
  LEVEL: 'Shelf inside a bay',
  BIN:   'leaf slot',
};

export function App() {
  const [selectedWarehouse, setSelectedWarehouse] = useState<WarehouseId>('warehouse1');
  const [visibleTypes, setVisibleTypes] = useState<Set<SegmentType>>(
    new Set(ALL_TYPES),
  );

  const warehouse = WAREHOUSES[selectedWarehouse];
  const { scene, legend, label } = warehouse;

  const toggleType = (type: SegmentType) => {
    const updated = new Set(visibleTypes);
    if (updated.has(type)) updated.delete(type);
    else updated.add(type);
    setVisibleTypes(updated);
  };

  const counts = useMemo(() => {
    return ALL_TYPES.reduce((acc, type) => {
      acc[type] = scene.segments.filter((s) => s.type === type).length;
      return acc;
    }, {} as Record<SegmentType, number>);
  }, [scene.segments]);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Title bar with warehouse selector */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background: 'rgba(15, 23, 42, 0.95)',
        color: 'white',
        padding: '15px 20px',
        borderBottom: '1px solid #334155',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
      }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '18px' }}>
            RACKING Warehouse 3D View
          </h2>
          <small style={{ opacity: 0.7 }}>
            {label} · {scene.segments.length} total segments
          </small>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
          <span style={{ opacity: 0.85 }}>Warehouse:</span>
          <select
            value={selectedWarehouse}
            onChange={(e) => setSelectedWarehouse(e.target.value as WarehouseId)}
            style={{
              background: '#1e293b',
              color: 'white',
              border: '1px solid #475569',
              borderRadius: '6px',
              padding: '6px 10px',
              fontSize: '13px',
              cursor: 'pointer',
              minWidth: '260px',
            }}
          >
            {Object.values(WAREHOUSES).map((w) => (
              <option key={w.id} value={w.id}>
                {w.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Layer toggle panel */}
      <div style={{
        position: 'absolute',
        top: 80,
        left: 20,
        zIndex: 10,
        background: 'rgba(15, 23, 42, 0.92)',
        color: 'white',
        padding: '15px',
        borderRadius: '8px',
        minWidth: '180px',
      }}>
        <strong style={{ fontSize: '13px' }}>LAYERS</strong>
        <div style={{ marginTop: '10px' }}>
          {ALL_TYPES.map((type) => (
            <label
              key={type}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '8px',
                cursor: 'pointer',
                userSelect: 'none',
              }}
              title={TYPE_DESCRIPTIONS[type]}
            >
              <input
                type="checkbox"
                checked={visibleTypes.has(type)}
                onChange={() => toggleType(type)}
                style={{ marginRight: '8px', marginTop: '3px' }}
              />
              <span
                style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  background: TYPE_COLORS[type],
                  borderRadius: '2px',
                  marginRight: '8px',
                  marginTop: '4px',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '13px', lineHeight: '1.3' }}>
                {TYPE_LABELS[type]} ({counts[type]})
                <br />
                <span style={{ fontSize: '10px', opacity: 0.65 }}>
                  {TYPE_DESCRIPTIONS[type]}
                </span>
              </span>
            </label>
          ))}
        </div>
        <div style={{
          marginTop: '10px',
          paddingTop: '10px',
          borderTop: '1px solid #334155',
          fontSize: '10px',
          opacity: 0.78,
          lineHeight: '1.45',
        }}>
          <strong>Layout (mm):</strong>
          <div style={{ marginTop: 6, fontFamily: 'monospace', fontSize: '10px' }}>
            {legend}
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 20,
        zIndex: 10,
        background: 'rgba(15, 23, 42, 0.92)',
        color: 'white',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '11px',
        opacity: 0.85,
      }}>
        <strong>Mouse Controls:</strong><br />
        🖱️ Left-drag: Rotate<br />
        🖱️ Right-drag: Pan<br />
        🖱️ Scroll: Zoom<br />
        🖱️ Hover: Show segment info
      </div>

      {/* 3D Scene — re-mounted on warehouse switch via `key` so camera /
          OrbitControls reset cleanly to the new warehouse's defaults. */}
      <WarehouseScene
        key={selectedWarehouse}
        visibleTypes={visibleTypes}
        {...scene}
      />
    </div>
  );
}
