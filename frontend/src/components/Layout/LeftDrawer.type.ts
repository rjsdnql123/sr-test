import { ILeftDrawerList } from "../../pages/home";

export interface LeftDrawerProps {
    leftList: ILeftDrawerList[];
    children: React.ReactNode;
}