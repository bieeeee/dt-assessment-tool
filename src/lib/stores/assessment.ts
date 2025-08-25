import { writable } from "svelte/store";
import type { AssessmentData } from "$lib/types/assessment";

function createAssessmentData() {
  const { subscribe, update, set } = writable<AssessmentData>({
    industry: "",
    size: "",
    revenue: "",
    businessModel: "",
    techStack: {
      dataManagement: 0,
      financialSystems: 0,
      salesProcess: 0,
      hrOperations: 0,
      itInfrastructure: 0
    },
    painPoints: [],
    businessGoals: []
  });

  return {
    subscribe,
    update,
    set,
    updateValue: (key: string, value: string) =>
      update((state) => ({
        ...state,
        [key]: value
      })),
    toggleValueInArr: (key: string, value: string) =>
      update((state) => {
        const prevValue = state[key];
        const updatedValue = prevValue.includes(value)
          ? prevValue.filter((p) => p !== value)
          : [...prevValue, value];

        return {
          ...state,
          [key]: updatedValue
        };
      })
  };
}

export const assessmentData = createAssessmentData();
