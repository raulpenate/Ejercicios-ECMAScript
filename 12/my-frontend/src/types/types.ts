export type Movie = {
    id?: string
    title: string,
    protagonist: string,
    category: string,
    url: string
}

export interface MovieProps {
    movie: Movie
}


export interface CrudButtonsProps {
    onDelete: () => void
}