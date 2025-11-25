export enum SlideId {
  SLIDE_START = 0,
  SLIDE_1 = 1,
  SLIDE_2 = 2,
  SLIDE_3 = 3,
  SLIDE_END = 4,
}

export interface ChartProps {
  className?: string;
}

export interface FunnelDataPoint {
  stage: string;
  value: number;
  fill: string;
}

export interface AnomalyDataPoint {
  date: string;
  created: number;
  accepted: number;
}