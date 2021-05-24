export type FromFetchContext = {
    photos: Array<Photos>;
    loading: boolean;
};
export type Photos = {
    id: number;
    cover_photo: Cover_Photo_Urls;
    title: string;
};
type Cover_Photo_Urls = {
    urls: Urls_Small;
};

type Urls_Small = {
small: string
};
