import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  GlobalState,
  PersonalData,
  Achievement,
  Study,
  Project,
  Experience,
} from "@/store/cv.types";

const useCVData = create(
  persist<GlobalState>(
    (set) => ({
      personalData: {
        firstName: "name",
        email: "example@mail.dev",
        lastName: "last name",
        residency: "Some city",
      },
      aboutMe: "About me...",
      softSkills: [],
      hardSkills: [],
      futureSkills: [],
      keyAchievements: [],
      goals: [],
      languages: ["english"],
      studies: [
        {
          begin: new Date(),
          end: new Date(),
          degree: "Degree",
          description: "Description",
          title: "title",
        },
      ],
      projects: [],
      experiences: [],
      setPersonalData: (personalData: PersonalData) => {
        set({ personalData });
      },
      setAboutMe: (aboutMe: string) => {
        set({ aboutMe });
      },
      setSoftSkills: (softSkills: string[]) => {
        set({ softSkills });
      },
      addSoftSkill: (softSkill: string) => {
        set((prevState) => ({
          softSkills: [...prevState.softSkills, softSkill],
        }));
      },
      removeSoftSkill: (softSkill: string) =>
        set((prevState) => ({
          softSkills: prevState.softSkills.filter(
            (skill) => skill !== softSkill
          ),
        })),
      setHardSkills: (hardSkills: string[]) => {
        set({ hardSkills });
      },
      addHardSkill: (hardSkill: string) => {
        set((prevState) => ({
          hardSkills: [...prevState.hardSkills, hardSkill],
        }));
      },
      removeHardSkill: (hardSkill: string) =>
        set((prevState) => ({
          hardSkills: prevState.hardSkills.filter(
            (skill) => skill !== hardSkill
          ),
        })),
      setFutureSkills: (futureSkills: string[]) => {
        set({ futureSkills });
      },
      addFutureSkill: (futureSkill: string) => {
        set((prevState) => ({
          futureSkills: [...prevState.futureSkills, futureSkill],
        }));
      },
      removeFutureSkill: (futureSkill: string) =>
        set((prevState) => ({
          futureSkills: prevState.futureSkills.filter(
            (skill) => skill !== futureSkill
          ),
        })),
      setKeyAchievements: (keyAchievements: Achievement[]) => {
        set({ keyAchievements });
      },
      addKeyAchievement: (keyAchievement: Achievement) => {
        set((prevState) => ({
          keyAchievements: [...prevState.keyAchievements, keyAchievement],
        }));
      },
      removeKeyAchievement: (keyAchievement: Achievement) =>
        set((prevState) => ({
          keyAchievements: prevState.keyAchievements.filter(
            (achievement) => achievement !== keyAchievement
          ),
        })),
      setGoals: (goals: string[]) => {
        set({ goals });
      },
      addGoal: (goal: string) => {
        set((prevState) => ({
          goals: [...prevState.goals, goal],
        }));
      },
      removeGoal: (goal: string) =>
        set((prevState) => ({
          goals: prevState.goals.filter((gl) => gl !== goal),
        })),
      setStudies: (studies: Study[]) => {
        set({ studies });
      },
      addStudy: (study: Study) => {
        set((prevState) => ({
          studies: [...prevState.studies, study],
        }));
      },
      removeStudy: (study: Study) =>
        set((prevState) => ({
          studies: prevState.studies.filter((stdy) => stdy !== study),
        })),
      setLanguages: (languages: string[]) => {
        set({ languages });
      },
      addLanguage: (language: string) => {
        set((prevState) => ({
          languages: [...prevState.languages, language],
        }));
      },
      removeLanguage: (language: string) =>
        set((prevState) => ({
          languages: prevState.languages.filter((lang) => lang !== language),
        })),
      setProjects: (projects: Project[]) => {
        set({ projects: projects });
      },
      addProject: (project: Project) => {
        set((prevState) => ({
          projects: [...prevState.projects, project],
        }));
      },
      removeProject: (project: Project) =>
        set((prevState) => ({
          projects: prevState.projects.filter((lang) => lang !== project),
        })),
      setExperiences: (experiences: Experience[]) => {
        set({ experiences: experiences });
      },
      addExperience: (experience: Experience) => {
        set((prevState) => ({
          experiences: [...prevState.experiences, experience],
        }));
      },
      removeExperience: (experience: Experience) =>
        set((prevState) => ({
          experiences: prevState.experiences.filter(
            (exp) => exp !== experience
          ),
        })),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCVData;

export const getPersonalData = (state: GlobalState) => state.personalData;
export const getAboutMe = (state: GlobalState) => state.aboutMe;
export const getSoftSkills = (state: GlobalState) => state.softSkills;
export const getHardSkills = (state: GlobalState) => state.hardSkills;
export const getFutureSkills = (state: GlobalState) => state.futureSkills;
export const getKeyAchievements = (state: GlobalState) => state.keyAchievements;
export const getGoals = (state: GlobalState) => state.goals;
export const getStudies = (state: GlobalState) => state.studies;
export const getLanguages = (state: GlobalState) => state.languages;
export const getProjects = (state: GlobalState) => state.projects;
export const getExperiences = (state: GlobalState) => state.experiences;
export const getGlobalMethods = (state: GlobalState) => ({
  setPersonalData: state.setPersonalData,
  setAboutMe: state.setAboutMe,
  setSoftSkills: state.setSoftSkills,
  addSoftSkill: state.addSoftSkill,
  removeSoftSkill: state.removeSoftSkill,
  setHardSkills: state.setHardSkills,
  addHardSkill: state.addHardSkill,
  removeHardSkill: state.removeHardSkill,
  setFutureSkills: state.setFutureSkills,
  addFutureSkill: state.addFutureSkill,
  removeFutureSkill: state.removeFutureSkill,
  setKeyAchievements: state.setKeyAchievements,
  addKeyAchievement: state.addKeyAchievement,
  removeKeyAchievement: state.removeKeyAchievement,
  setGoals: state.setGoals,
  addGoal: state.addGoal,
  removeGoal: state.removeGoal,
  setStudies: state.setStudies,
  addStudy: state.addStudy,
  removeStudy: state.removeStudy,
  setLanguages: state.setLanguages,
  addLanguage: state.addLanguage,
  removeLanguage: state.removeLanguage,
  setProjects: state.setProjects,
  addProject: state.addProject,
  removeProject: state.removeProject,
  setExperiences: state.setExperiences,
  addExperience: state.addExperience,
  removeExperience: state.removeExperience,
});
