export interface Burger {
    id?: number;
    nom?: string;
    prix?: number;
    image?: File;
    description?: string;
    archiver?: boolean;
    created_at?: Date;
    updated_at?: Date;
}