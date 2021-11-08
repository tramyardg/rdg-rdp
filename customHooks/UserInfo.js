import { useCurrentUser } from "./useCurrentUser";
import { useResource } from "./useResource";
export const UserInfo = ({ userId }) => {
    // const user = useCurrentUser();
    const user = useUser(userId);
    // const user2 = useResource('/user/' + userId);
    const { name, age, hairColor, hobbies } = user || {};

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    ) : <p>Loading...</p>;
}