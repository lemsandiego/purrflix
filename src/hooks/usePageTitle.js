import { useEffect } from "react";

export const usePageTitle = (title) => {
    useEffect(() => {
        document.title = `${title} / Purrflix`;
    }, [title]);
  return null;
}