import { BigSuccessButton } from "./BigSuccessButton";
import { Button } from "./Button";
import { partiallyApply } from "./partiallyApply";
// import { DangerButton } from "./DangerButton";

// export const DangerButton = partiallyApply(Button, { color: 'red' });
const DangerButton = partiallyApply(Button, { color: 'red' });

function App() {
    return (
        <>
            <DangerButton />
            <BigSuccessButton />
        </>
    );
}

export default App;