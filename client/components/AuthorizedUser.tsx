import React from "react";

import {User} from '../../server/api/users/user.model'

export interface AuthorizedUserProps {
    user: User | null | undefined;
}

interface AuthorizedUserType {
    user: User;
}

const BaseContext = React.createContext<AuthorizedUserProps>({
    user: undefined,
});

export const AuthorizedUser: React.FC<AuthorizedUserProps> = props => {
    return (
        <BaseContext.Provider
            value={{
                user: props.user,
            }}
        ></BaseContext.Provider>
    );
};

export const useAuthorizedUser = (): AuthorizedUserType => {
    const props = React.useContext(BaseContext);

    return {
        user: props.user || ({id: undefined} as unknown as User)
    }
}
