import create from "zustand";

const useCities = create((set) => ({
  cities: [],
  ADDCITIES: (newCity) =>
    set((state) => ({ cities: [...state.cities, newCity] })),
}));

const useCurrentCity = create((set) => ({
  currentCity: "",
  UPDATECURRENTCITY: (newCity) => set((state) => ({ currentCity: newCity })),
}));

export { useCities, useCurrentCity };
