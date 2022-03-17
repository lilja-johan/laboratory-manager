export interface Sample {
  id: number;
  name: string;
  location: string;
  desiredAnalysis: string[];
  registeredAnalysis: string[];
  completedAnalysis:string[];
  status:string;
}
