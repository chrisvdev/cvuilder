export interface Social {
  url: string;
  title: string;
  description?: string;
}

export interface Licenses {
  type: string;
  level?: string;
  description?: string;
}
export interface PersonalData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  socials?: Social[];
  licenses?: Licenses[];
  workAvailability?: "immediately" | "toNegotiate" | "partTime" | "temporary";
  presentiality?: "remote" | "onSite" | "hybrid";
  travelAvailability?: true;
  maritalStatus?: "single" | "married" | "divorced" | "widower";
  birthday?: Date;
  nationality?: string;
  residency: string;
}

export interface Experience {
  begin: Date;
  end: Date | "CurrentlyWorkingHere";
  title: string;
  rol?: string;
  description: string;
}
export interface Project {
  begin: Date;
  end: Date | "CurrentlyWorkingOnIt";
  title: string;
  rol?: string;
  description: string;
  socials?: Social[];
}
export interface Study {
  begin: Date;
  end: Date | "CurrentlyStudyingHere";
  title: string;
  degree: string;
  description: string;
}

export interface Achievement {
  date: Date;
  title: string;
  description: string;
}

export interface GlobalData {
  personalData: PersonalData;
  aboutMe: string;
  softSkills: string[];
  hardSkills: string[];
  futureSkills: string[];
  keyAchievements: Achievement[];
  goals: string[];
  studies: Study[];
  languages: string[];
  projects: Project[];
  experiences: Experience[];
}

export interface GlobalMethods {
  resetGlobalData: () => void;
  setGlobalData: (globlaData: GlobalData) => void;
  setPersonalData: (personalData: PersonalData) => void;
  setAboutMe: (aboutMe: string) => void;
  setSoftSkills: (softSkills: string[]) => void;
  addSoftSkill: (softSkill: string) => void;
  removeSoftSkill: (softSkill: string) => void;
  setHardSkills: (hardSkills: string[]) => void;
  addHardSkill: (hardSkill: string) => void;
  removeHardSkill: (hardSkill: string) => void;
  setFutureSkills: (futureSkills: string[]) => void;
  addFutureSkill: (futureSkill: string) => void;
  removeFutureSkill: (futureSkill: string) => void;
  setKeyAchievements: (keyAchievements: Achievement[]) => void;
  addKeyAchievement: (keyAchievement: Achievement) => void;
  removeKeyAchievement: (keyAchievement: Achievement) => void;
  setGoals: (goals: string[]) => void;
  addGoal: (goal: string) => void;
  removeGoal: (goal: string) => void;
  setStudies: (studies: Study[]) => void;
  addStudy: (study: Study) => void;
  removeStudy: (study: Study) => void;
  setLanguages: (languages: string[]) => void;
  addLanguage: (language: string) => void;
  removeLanguage: (language: string) => void;
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  removeProject: (project: Project) => void;
  setExperiences: (experiences: Experience[]) => void;
  addExperience: (experience: Experience) => void;
  removeExperience: (experience: Experience) => void;
}

export type GlobalState = GlobalMethods & GlobalData;
