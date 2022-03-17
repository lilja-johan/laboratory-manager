export interface Sample {
  id: string;
  name: string;
  location: string;
  desiredAnalysis: string[];
  registeredAnalysis: string[];
  completedAnalysis:string[];
  status:string;
}
