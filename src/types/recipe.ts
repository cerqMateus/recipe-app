export interface Recipe {
    id: string;
    nome: string;
    descricao: string;
    ingredientes: string[];
    modoPreparo: string[];
    informacoesAdicionais: string;
    imageURL: string;
    isFavorite: boolean;
    createdAt: Date;
    updatedAt: Date;
}
