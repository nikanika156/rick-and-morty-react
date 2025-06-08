import { useEffect, useState } from "react";
export function useImageLoading(images: string[]) {
  const [loading, setLoading] = useState<boolean>();

  const imagePreload = async () => {
    
  };
  useEffect(() => {
    setLoading(true);


  }, [images]);
}
