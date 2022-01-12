import { LoadingState } from "../../../types";

export interface User{
    email: string;
    fullname: string;
    username: string;
    password: string;
    _id?: string;
    confirmHash: string;
    confirmed?: boolean;
    location?: string;
    about?: string;
    website?: string;
}

export interface UserState{
    data: User | undefined;
    status: LoadingState
}
