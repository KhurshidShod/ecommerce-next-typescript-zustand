import Img from '@/assets/images/No-Image-Placeholder.svg'
export const onImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
    img: string
  ): void => {
    e.currentTarget.src = img;
  };
  