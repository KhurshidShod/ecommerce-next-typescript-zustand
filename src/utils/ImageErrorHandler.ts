import Img from '@/assets/images/No-Image-Placeholder.svg'
export const onImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    img
  ): void => {
    e.currentTarget.src = img;
  };
  