export type Photo = {
    getRandomPhoto: () => Promise<void>;
    randomPhoto: Array<SizePhoto>;
};

interface SizePhoto {
    full?: string;
    raw?: string;
    regular?: string;
    small?: string;
    thumb?: string; 
    };
