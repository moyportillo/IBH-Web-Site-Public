import type {ReactNode} from "react";
import HeaderComponent from '@/pages/main/header';
import { FooterComponent } from "./footer";

interface Props {
    children?: ReactNode;
}

const MainComponent = ({ children }: Props) => {
    return (
        <>
            <HeaderComponent/>
            <main>
            {children}
            </main>
            <FooterComponent/>
        </>);
};

export default MainComponent;