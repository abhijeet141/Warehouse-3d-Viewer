import type { Segment } from '../types';

export const SEGMENTS_WAREHOUSE4: Segment[] = [
  // -------- AISLE (1) --------
  { fullName: 'A', type: 'AISLE', coordinateX:     0, coordinateY:     0, coordinateZ:     0, dimensionX:  9000, dimensionY: 4500, dimensionZ:  6000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,

  // -------- BAYS (6) — 3 racks at separated positions --------
  { fullName: 'A-01', type: 'BAY', coordinateX:     0, coordinateY:     0, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  6000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-02', type: 'BAY', coordinateX:     0, coordinateY:  1500, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  6000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-03', type: 'BAY', coordinateX:  3000, coordinateY:  3000, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  6000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-04', type: 'BAY', coordinateX:  4500, coordinateY:  3000, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  6000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-05', type: 'BAY', coordinateX:  7500, coordinateY:  1500, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  6000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-06', type: 'BAY', coordinateX:  7500, coordinateY:     0, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  6000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,

  // -------- LEVELS (12) --------
  { fullName: 'A-01-A', type: 'LEVEL', coordinateX:     0, coordinateY:     0, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-01-B', type: 'LEVEL', coordinateX:     0, coordinateY:     0, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-02-A', type: 'LEVEL', coordinateX:     0, coordinateY:  1500, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-02-B', type: 'LEVEL', coordinateX:     0, coordinateY:  1500, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-03-A', type: 'LEVEL', coordinateX:  3000, coordinateY:  3000, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-03-B', type: 'LEVEL', coordinateX:  3000, coordinateY:  3000, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-04-A', type: 'LEVEL', coordinateX:  4500, coordinateY:  3000, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-04-B', type: 'LEVEL', coordinateX:  4500, coordinateY:  3000, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-05-A', type: 'LEVEL', coordinateX:  7500, coordinateY:  1500, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-05-B', type: 'LEVEL', coordinateX:  7500, coordinateY:  1500, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-06-A', type: 'LEVEL', coordinateX:  7500, coordinateY:     0, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-06-B', type: 'LEVEL', coordinateX:  7500, coordinateY:     0, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,

  // -------- BINS (12) --------
  { fullName: 'A-01-A-1', type: 'BIN', coordinateX:     0, coordinateY:     0, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-01-B-1', type: 'BIN', coordinateX:     0, coordinateY:     0, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-02-A-1', type: 'BIN', coordinateX:     0, coordinateY:  1500, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-02-B-1', type: 'BIN', coordinateX:     0, coordinateY:  1500, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-03-A-1', type: 'BIN', coordinateX:  3000, coordinateY:  3000, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-03-B-1', type: 'BIN', coordinateX:  3000, coordinateY:  3000, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-04-A-1', type: 'BIN', coordinateX:  4500, coordinateY:  3000, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-04-B-1', type: 'BIN', coordinateX:  4500, coordinateY:  3000, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-05-A-1', type: 'BIN', coordinateX:  7500, coordinateY:  1500, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-05-B-1', type: 'BIN', coordinateX:  7500, coordinateY:  1500, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-06-A-1', type: 'BIN', coordinateX:  7500, coordinateY:     0, coordinateZ:     0, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
  { fullName: 'A-06-B-1', type: 'BIN', coordinateX:  7500, coordinateY:     0, coordinateZ:  3000, dimensionX:  1500, dimensionY: 1500, dimensionZ:  3000, offsetX:  0, offsetY:    0, offsetZ:  0 } as Segment,
];
