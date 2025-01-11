"use client";

import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";

import { createContext, useState } from "react";

type SelectedFilters = {
  service: string;
  specialtie: string;
  serviceType: string;
};

type FilterContextType = {
  selectedFilters: SelectedFilters;
  setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
};

export const FilterContext = createContext<FilterContextType>({
  selectedFilters: {
    service: "",
    specialtie: "",
    serviceType: "in_person",
  },
  setSelectedFilters: () => {},
});

export default function FilterComponent({ children }: PropsWithChildren) {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    service: "",
    specialtie: "",
    serviceType: "in_person",
  });

  return (
    <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
