export interface Publicacion {
    titulo: string,
    descripcionPromo: string,
    descripcion: string,
    categorias?: [string]
    visualizaciones: number,
    comentarios: number,
    costo?: number
}