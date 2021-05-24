
export type ModalDetails = {
    clearPhoto: () => void;
    loading: boolean;
    photo: Photo;
};

export type History = {
    goBack: ()=> void
};

type Photo = {
    user?: User;
    cover_photo?: {
        urls?: Urls;
        user?: User2;
        title?: string | undefined;
    };
};

type User = {
    name?: string;
};

type Urls = {
    small?: string | undefined;
};

type User2 = {
    location?: string;
};
