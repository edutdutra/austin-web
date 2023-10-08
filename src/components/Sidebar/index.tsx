import {LogoImage, SidebarContainer} from "./styles.ts";

import logo from '../../assets/austin-logo.png';

export function Sidebar() {
    return (
        <SidebarContainer>
            <LogoImage src={logo}/>
        </SidebarContainer>
    )
}