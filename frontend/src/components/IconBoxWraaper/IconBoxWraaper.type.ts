import { IModeList } from "../../pages/home/index.type";

export interface IIconBoxWraaperProps {
  title: string;
  list: IModeList[];
  onIconClick?: (e: IModeList) => void;
}
