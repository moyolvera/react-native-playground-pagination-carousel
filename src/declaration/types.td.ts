import { ImageSourcePropType } from 'react-native';

export type SliceItem = {
  type: string;
  imageUri: ImageSourcePropType;
  heading: string;
  description: string;
  key: string;
  color: string;
};

export type SliceList = SliceItem[];
