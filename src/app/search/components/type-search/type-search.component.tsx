"use client";

import { useContext, useEffect, useState, useCallback, useMemo } from "react";
import styles from "./type-search.module.css";
import { FilterContext } from "@/app/search/components/filter/filter-provider.component";

export default function TypeSearchComponent() {
  const [resize, setResize] = useState<number>(0);
  const [type, setType] = useState<string>("inPerson");

  const { setSelectedFilters } = useContext(FilterContext);

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateOffset = useCallback((element: HTMLElement | null) => {
    if (element) {
      document.documentElement.style.setProperty(
        "--offset-left-active-type-search",
        `${element.offsetLeft}px`,
      );
      document.documentElement.style.setProperty(
        "--offset-width-active-type-search",
        `${element.offsetWidth}px`,
      );
    }
  }, []);

  useEffect(() => {
    const activeElement = document.querySelector(
      `span.${styles.active}`,
    ) as HTMLElement;
    updateOffset(activeElement);
  }, [resize, type, updateOffset]);

  const changeActiveType = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      const currentItem = e.target as HTMLElement;

      updateOffset(currentItem);

      setSelectedFilters((prev) => ({ ...prev, plural: currentItem.id }));
      setType(currentItem.id);
    },
    [setSelectedFilters, updateOffset],
  );

  const types = useMemo(
    () => [
      { id: "inPerson", label: "حضوری" },
      { id: "online", label: "چت آنلاین" },
      { id: "tell", label: "تلفنی" },
    ],
    [],
  );

  return (
    <div className={styles.type_search}>
      {types.map(({ id, label }) => (
        <span
          key={id}
          onClick={changeActiveType}
          className={`${type === id && styles.active}`}
          id={id}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
