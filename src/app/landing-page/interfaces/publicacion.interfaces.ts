export interface Publicacion {
    id?: number,
    titulo: string,
    descripcionPromo: string,
    descripcion: string,
    categorias?: [string]
    visualizaciones: number,
    comentarios: number,
    costo?: number
}