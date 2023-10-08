import {HomeContainer, HomeContent} from "./styles.ts";
import {Chat} from "../../components/Chat";
import {Sidebar} from "../../components/Sidebar";

export function Home() {
    return (
        <HomeContainer>
            <Sidebar/>
            <HomeContent>
                <Chat/>
            </HomeContent>
        </HomeContainer>
    )
}