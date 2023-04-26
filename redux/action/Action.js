import { CHANGE_LANGUAGE } from "../ActionTypes";

export const changeLanguage = type => (
    {
        type:CHANGE_LANGUAGE,
        payload:type
    }
);
