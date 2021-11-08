import { useCurrentUser } from "./useCurrentUser";
import { useDataSource } from "./useDataSource";
import { useResource } from "./useResource";
import axios from "axios";

const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
}

// const serverResource = resourceUrl => {
//     return async () => {
//         const response = await axios.get(resourceUrl);
//         return response.data;
//     }
// }

export const UserInfo = ({ userId }) => {
    // const user = useCurrentUser();
    const user = useUser(userId);
    // const user2 = useResource('/user/' + userId);
    // const user3 = useDataSource(serverResource(`/users/${userId}`));


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