import { writable } from "svelte/store";
import type { AssessmentData } from "$lib/types/assessment";

const initialData = {
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
};

function createAssessmentData() {
  const { subscribe, update, set } = writable<AssessmentData>(initialData);

  return {
    subscribe,
    update,
    set,
    clear: () => set(initialData),
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
      }),
    calculateTechScore: (techStack: Record<string, number>) => {
      const scores = Object.values(techStack);
      const average =
        scores.reduce((sum, score) => sum + score, 0) / scores.length;
      return Math.round(average * 2.5 * 10) / 10;
    }
  };
}

export const assessmentData = createAssessmentData();
