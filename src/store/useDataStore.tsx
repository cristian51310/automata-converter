import { obtenerCombinacionesTransiciones } from '@/lib/combinaciones-transiciones';
import { create } from 'zustand';
import { Transiciones } from '@/types/transition';
import { grafoOriginal, grafoResultante } from '@/data/grafos';

interface DataStore {
  states: string[];
  setStates: (newStates: string[]) => void;
  alphabet: string[];
  setAlphabet: (newAlphabet: string[]) => void;
  initialState: string;
  setInitialState: (newInitialState: string) => void;
  finalStates: string[];
  setFinalStates: (newFinalStates: string[]) => void;
  transitions: Transiciones[];
  setTransitions: (newTransitions: any) => void;
  grafoOriginal: string;
  setGrafoOriginal: (newGrafoOriginal: string) => void;
  grafoResultante: string;
  setGrafoResultante: (newGrafoResultante: string) => void;
}

const transitions2 = {
  'q0': { '0': ['q0', 'q1'], '1': ['q0'] },
  'q1': { '0': ['q2'], '1': ["q0", "q2"] },
  'q2': { '0': [], '1': [] },
}

const transitions2Complete = obtenerCombinacionesTransiciones(transitions2)

const useDataStore = create<DataStore>((set) => ({
  states: ["q0", "q1", "q2"],
  setStates: (newStates: string[]) => set({ states: newStates }),

  alphabet: ["0", "1"],
  setAlphabet: (newAlphabet: string[]) => set({ alphabet: newAlphabet }),

  initialState: "q0",
  setInitialState: (newInitialState: string) => set({ initialState: newInitialState }),

  finalStates: ["q2"],
  setFinalStates: (newFinalStates: string[]) => set({ finalStates: newFinalStates }),

  transitions: transitions2Complete,
  setTransitions: (newTransitions: any) => set({ transitions: newTransitions }),

  grafoOriginal,
  setGrafoOriginal: (newGrafoOriginal: string) => set({ grafoOriginal: newGrafoOriginal }),

  grafoResultante,
  setGrafoResultante: (newGrafoResultante: string) => set({ grafoResultante: newGrafoResultante }),
}));

export default useDataStore;
