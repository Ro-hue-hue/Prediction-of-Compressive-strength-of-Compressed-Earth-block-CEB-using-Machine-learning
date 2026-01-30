
export interface CEBSample {
  id: number;
  soilSource: string;
  sandType: 'Black' | 'White' | 'Crusher';
  blackSandPct: number;
  whiteSandPct: number;
  crusherDustPct: number;
  soilProportion: number;
  surkhiContent: number;
  cementContent: number;
  dryWeight: number;
  wetWeight: number;
  moistureContent: number;
  waterAbsorption: number;
  dryDensity: number;
  curingAge: 7 | 28;
  compressiveStrength: number;
}

export interface ModelMetrics {
  name: string;
  r2: number;
  mae: number;
  mse: number;
  rmse: number;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
}

export interface PredictionInputs {
  soilSource: string;
  sandType: 'Black' | 'White' | 'Crusher';
  blackSandPct: number;
  whiteSandPct: number;
  crusherDustPct: number;
  cementContent: number;
  surkhiContent: number;
  moistureContent: number;
  dryDensity: number;
  curingAge: number;
  waterAbsorption: number;
}
