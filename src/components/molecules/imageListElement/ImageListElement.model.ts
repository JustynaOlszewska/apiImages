export type PhotoProps = {
    photo: Photo;
};
type Photo = {
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

export type Getphoto = {
getPhoto: (id: number) => Promise<void>;
};
