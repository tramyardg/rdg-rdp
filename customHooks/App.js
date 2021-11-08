import { UserInfo } from "./customHooks/UserInfo";

function App() {
    return (
        <>
            <UserInfo userInfo="123" />
            <UserInfo userInfo="223" />
            <UserInfo userInfo="423" />
        </>
    );
}

export default App;