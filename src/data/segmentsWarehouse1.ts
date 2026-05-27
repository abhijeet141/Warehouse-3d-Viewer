import type { Segment } from '../types';

export const SEGMENTS_WAREHOUSE1: Segment[] = [
  { fullName: 'A', type: 'AISLE', coordinateX: 0, coordinateY: 0,    coordinateZ: 0, dimensionX: 3080, dimensionY: 3000, dimensionZ: 6100, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B', type: 'AISLE', coordinateX: 0, coordinateY: 3000, coordinateZ: 0, dimensionX: 3080, dimensionY: 3000, dimensionZ: 6100, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C', type: 'AISLE', coordinateX: 0, coordinateY: 6000, coordinateZ: 0, dimensionX: 3080, dimensionY: 3000, dimensionZ: 6100, offsetX: 0, offsetY: 0, offsetZ: 0 },

  // Aisle A — front (Y=0)
  { fullName: 'A-01', type: 'BAY', coordinateX: 0,    coordinateY: 0,    coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  { fullName: 'A-02', type: 'BAY', coordinateX: 1540, coordinateY: 0,    coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  // Aisle A — back (Y=2500)
  { fullName: 'A-03', type: 'BAY', coordinateX: 0,    coordinateY: 2500, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  { fullName: 'A-04', type: 'BAY', coordinateX: 1540, coordinateY: 2500, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  // Aisle B — front (Y=3000)
  { fullName: 'B-01', type: 'BAY', coordinateX: 0,    coordinateY: 3000, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  { fullName: 'B-02', type: 'BAY', coordinateX: 1540, coordinateY: 3000, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  // Aisle B — back (Y=5500)
  { fullName: 'B-03', type: 'BAY', coordinateX: 0,    coordinateY: 5500, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  { fullName: 'B-04', type: 'BAY', coordinateX: 1540, coordinateY: 5500, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  // Aisle C — front (Y=6000)
  { fullName: 'C-01', type: 'BAY', coordinateX: 0,    coordinateY: 6000, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  { fullName: 'C-02', type: 'BAY', coordinateX: 1540, coordinateY: 6000, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  // Aisle C — back (Y=8500)
  { fullName: 'C-03', type: 'BAY', coordinateX: 0,    coordinateY: 8500, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },
  { fullName: 'C-04', type: 'BAY', coordinateX: 1540, coordinateY: 8500, coordinateZ: 0, dimensionX: 1500, dimensionY: 500, dimensionZ: 6100, offsetX: 40, offsetY: 2000, offsetZ: 0 },

  // Aisle A
  { fullName: 'A-01-A', type: 'LEVEL', coordinateX: 0,    coordinateY: 0,    coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-01-B', type: 'LEVEL', coordinateX: 0,    coordinateY: 0,    coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-01-C', type: 'LEVEL', coordinateX: 0,    coordinateY: 0,    coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-02-A', type: 'LEVEL', coordinateX: 1540, coordinateY: 0,    coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-02-B', type: 'LEVEL', coordinateX: 1540, coordinateY: 0,    coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-02-C', type: 'LEVEL', coordinateX: 1540, coordinateY: 0,    coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-03-A', type: 'LEVEL', coordinateX: 0,    coordinateY: 2500, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-03-B', type: 'LEVEL', coordinateX: 0,    coordinateY: 2500, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-03-C', type: 'LEVEL', coordinateX: 0,    coordinateY: 2500, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-04-A', type: 'LEVEL', coordinateX: 1540, coordinateY: 2500, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-04-B', type: 'LEVEL', coordinateX: 1540, coordinateY: 2500, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'A-04-C', type: 'LEVEL', coordinateX: 1540, coordinateY: 2500, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  // Aisle B
  { fullName: 'B-01-A', type: 'LEVEL', coordinateX: 0,    coordinateY: 3000, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-01-B', type: 'LEVEL', coordinateX: 0,    coordinateY: 3000, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-01-C', type: 'LEVEL', coordinateX: 0,    coordinateY: 3000, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-02-A', type: 'LEVEL', coordinateX: 1540, coordinateY: 3000, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-02-B', type: 'LEVEL', coordinateX: 1540, coordinateY: 3000, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-02-C', type: 'LEVEL', coordinateX: 1540, coordinateY: 3000, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-03-A', type: 'LEVEL', coordinateX: 0,    coordinateY: 5500, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-03-B', type: 'LEVEL', coordinateX: 0,    coordinateY: 5500, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-03-C', type: 'LEVEL', coordinateX: 0,    coordinateY: 5500, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-04-A', type: 'LEVEL', coordinateX: 1540, coordinateY: 5500, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-04-B', type: 'LEVEL', coordinateX: 1540, coordinateY: 5500, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'B-04-C', type: 'LEVEL', coordinateX: 1540, coordinateY: 5500, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  // Aisle C
  { fullName: 'C-01-A', type: 'LEVEL', coordinateX: 0,    coordinateY: 6000, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-01-B', type: 'LEVEL', coordinateX: 0,    coordinateY: 6000, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-01-C', type: 'LEVEL', coordinateX: 0,    coordinateY: 6000, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-02-A', type: 'LEVEL', coordinateX: 1540, coordinateY: 6000, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-02-B', type: 'LEVEL', coordinateX: 1540, coordinateY: 6000, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-02-C', type: 'LEVEL', coordinateX: 1540, coordinateY: 6000, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-03-A', type: 'LEVEL', coordinateX: 0,    coordinateY: 8500, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-03-B', type: 'LEVEL', coordinateX: 0,    coordinateY: 8500, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-03-C', type: 'LEVEL', coordinateX: 0,    coordinateY: 8500, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-04-A', type: 'LEVEL', coordinateX: 1540, coordinateY: 8500, coordinateZ: 0,    dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-04-B', type: 'LEVEL', coordinateX: 1540, coordinateY: 8500, coordinateZ: 2050, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },
  { fullName: 'C-04-C', type: 'LEVEL', coordinateX: 1540, coordinateY: 8500, coordinateZ: 4100, dimensionX: 1500, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 50 },

  // ---- Aisle A ----
  // Bay A-01
  { fullName: 'A-01-A-1', type: 'BIN', coordinateX: 0,   coordinateY: 0, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-01-A-2', type: 'BIN', coordinateX: 750, coordinateY: 0, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-01-B-1', type: 'BIN', coordinateX: 0,   coordinateY: 0, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-01-B-2', type: 'BIN', coordinateX: 750, coordinateY: 0, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-01-C-1', type: 'BIN', coordinateX: 0,   coordinateY: 0, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-01-C-2', type: 'BIN', coordinateX: 750, coordinateY: 0, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay A-02
  { fullName: 'A-02-A-1', type: 'BIN', coordinateX: 1540, coordinateY: 0, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-02-A-2', type: 'BIN', coordinateX: 2290, coordinateY: 0, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-02-B-1', type: 'BIN', coordinateX: 1540, coordinateY: 0, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-02-B-2', type: 'BIN', coordinateX: 2290, coordinateY: 0, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-02-C-1', type: 'BIN', coordinateX: 1540, coordinateY: 0, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-02-C-2', type: 'BIN', coordinateX: 2290, coordinateY: 0, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay A-03  (back-row)
  { fullName: 'A-03-A-1', type: 'BIN', coordinateX: 0,   coordinateY: 2500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-03-A-2', type: 'BIN', coordinateX: 750, coordinateY: 2500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-03-B-1', type: 'BIN', coordinateX: 0,   coordinateY: 2500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-03-B-2', type: 'BIN', coordinateX: 750, coordinateY: 2500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-03-C-1', type: 'BIN', coordinateX: 0,   coordinateY: 2500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-03-C-2', type: 'BIN', coordinateX: 750, coordinateY: 2500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay A-04  (back-row)
  { fullName: 'A-04-A-1', type: 'BIN', coordinateX: 1540, coordinateY: 2500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-04-A-2', type: 'BIN', coordinateX: 2290, coordinateY: 2500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-04-B-1', type: 'BIN', coordinateX: 1540, coordinateY: 2500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-04-B-2', type: 'BIN', coordinateX: 2290, coordinateY: 2500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-04-C-1', type: 'BIN', coordinateX: 1540, coordinateY: 2500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'A-04-C-2', type: 'BIN', coordinateX: 2290, coordinateY: 2500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },

  // ---- Aisle B ----
  // Bay B-01
  { fullName: 'B-01-A-1', type: 'BIN', coordinateX: 0,   coordinateY: 3000, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-01-A-2', type: 'BIN', coordinateX: 750, coordinateY: 3000, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-01-B-1', type: 'BIN', coordinateX: 0,   coordinateY: 3000, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-01-B-2', type: 'BIN', coordinateX: 750, coordinateY: 3000, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-01-C-1', type: 'BIN', coordinateX: 0,   coordinateY: 3000, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-01-C-2', type: 'BIN', coordinateX: 750, coordinateY: 3000, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay B-02
  { fullName: 'B-02-A-1', type: 'BIN', coordinateX: 1540, coordinateY: 3000, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-02-A-2', type: 'BIN', coordinateX: 2290, coordinateY: 3000, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-02-B-1', type: 'BIN', coordinateX: 1540, coordinateY: 3000, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-02-B-2', type: 'BIN', coordinateX: 2290, coordinateY: 3000, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-02-C-1', type: 'BIN', coordinateX: 1540, coordinateY: 3000, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-02-C-2', type: 'BIN', coordinateX: 2290, coordinateY: 3000, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay B-03  (back-row)
  { fullName: 'B-03-A-1', type: 'BIN', coordinateX: 0,   coordinateY: 5500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-03-A-2', type: 'BIN', coordinateX: 750, coordinateY: 5500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-03-B-1', type: 'BIN', coordinateX: 0,   coordinateY: 5500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-03-B-2', type: 'BIN', coordinateX: 750, coordinateY: 5500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-03-C-1', type: 'BIN', coordinateX: 0,   coordinateY: 5500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-03-C-2', type: 'BIN', coordinateX: 750, coordinateY: 5500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay B-04  (back-row)
  { fullName: 'B-04-A-1', type: 'BIN', coordinateX: 1540, coordinateY: 5500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-04-A-2', type: 'BIN', coordinateX: 2290, coordinateY: 5500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-04-B-1', type: 'BIN', coordinateX: 1540, coordinateY: 5500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-04-B-2', type: 'BIN', coordinateX: 2290, coordinateY: 5500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-04-C-1', type: 'BIN', coordinateX: 1540, coordinateY: 5500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'B-04-C-2', type: 'BIN', coordinateX: 2290, coordinateY: 5500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },

  // ---- Aisle C ----
  // Bay C-01
  { fullName: 'C-01-A-1', type: 'BIN', coordinateX: 0,   coordinateY: 6000, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-01-A-2', type: 'BIN', coordinateX: 750, coordinateY: 6000, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-01-B-1', type: 'BIN', coordinateX: 0,   coordinateY: 6000, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-01-B-2', type: 'BIN', coordinateX: 750, coordinateY: 6000, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-01-C-1', type: 'BIN', coordinateX: 0,   coordinateY: 6000, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-01-C-2', type: 'BIN', coordinateX: 750, coordinateY: 6000, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay C-02
  { fullName: 'C-02-A-1', type: 'BIN', coordinateX: 1540, coordinateY: 6000, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-02-A-2', type: 'BIN', coordinateX: 2290, coordinateY: 6000, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-02-B-1', type: 'BIN', coordinateX: 1540, coordinateY: 6000, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-02-B-2', type: 'BIN', coordinateX: 2290, coordinateY: 6000, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-02-C-1', type: 'BIN', coordinateX: 1540, coordinateY: 6000, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-02-C-2', type: 'BIN', coordinateX: 2290, coordinateY: 6000, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay C-03  (outer right rack)
  { fullName: 'C-03-A-1', type: 'BIN', coordinateX: 0,   coordinateY: 8500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-03-A-2', type: 'BIN', coordinateX: 750, coordinateY: 8500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-03-B-1', type: 'BIN', coordinateX: 0,   coordinateY: 8500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-03-B-2', type: 'BIN', coordinateX: 750, coordinateY: 8500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-03-C-1', type: 'BIN', coordinateX: 0,   coordinateY: 8500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-03-C-2', type: 'BIN', coordinateX: 750, coordinateY: 8500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  // Bay C-04  (outer right rack)
  { fullName: 'C-04-A-1', type: 'BIN', coordinateX: 1540, coordinateY: 8500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-04-A-2', type: 'BIN', coordinateX: 2290, coordinateY: 8500, coordinateZ: 0,    dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-04-B-1', type: 'BIN', coordinateX: 1540, coordinateY: 8500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-04-B-2', type: 'BIN', coordinateX: 2290, coordinateY: 8500, coordinateZ: 2050, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-04-C-1', type: 'BIN', coordinateX: 1540, coordinateY: 8500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
  { fullName: 'C-04-C-2', type: 'BIN', coordinateX: 2290, coordinateY: 8500, coordinateZ: 4100, dimensionX: 750, dimensionY: 500, dimensionZ: 2000, offsetX: 0, offsetY: 0, offsetZ: 0 },
];
