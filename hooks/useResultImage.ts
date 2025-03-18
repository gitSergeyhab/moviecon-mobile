import { useEffect, useState } from "react";

export const useResultImage = (image: string | null, photo: string | null) => {
  const [resultImage, setResultImage] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      setResultImage(image);
    }
  }, [image]);

  useEffect(() => {
    if (photo) {
      setResultImage(photo);
    }
  }, [photo]);

  return resultImage;
};
