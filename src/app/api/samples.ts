import { Sample } from "../shared/model/sample";

export class SampleData {

  static samples: Sample[] = [
    {
      "id": 1,
      "name": "small vial with transparent fluid",
      "location": "Central",
      "desiredAnalysis":
      [
        "Mikrobial Analysis(M21)",
        "Nitrogen Content Analysis(NCA2)"
      ],
      "registeredAnalysis": ["Nitrogen Content Analysis(NCA2)"],
      "completedAnalysis":[],
      "status":"Under Transport"
    },
    {
      "id": 2,
      "name": "Green bottle with smelly fluid",
      "location": "Central",
      "desiredAnalysis":
      [
        "Nitrogen Content Analysis(NCA2)",
        "Relative PFAS Levels(rPFAS)"
      ],
      "registeredAnalysis": [],
      "completedAnalysis":["Relative PFAS Levels(rPFAS)"],
      "status":"Under Transport"
    }
  ]
}
