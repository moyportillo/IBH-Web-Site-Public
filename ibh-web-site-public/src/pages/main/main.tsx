import type {ReactNode} from "react";
import HeaderComponent from '@/pages/main/header';

interface Props {
    children?: ReactNode;
}

const MainComponent = ({ children }: Props) => {
    return (
        <section>
            <HeaderComponent/>
            {children}
        </section>);
};

export default MainComponent;