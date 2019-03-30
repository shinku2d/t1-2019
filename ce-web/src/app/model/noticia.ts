export class Noticia {
    public id: Number;
    public titulo: String;
    public imagen: String;
    public descripcion: String;
    public fechaCreacion: Date;
    public ultimaModificacion: Date;

    constructor(id, titulo, imagen, descripcion, fechaCreacion, ultimaModificacion) {
        this.id = id;
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.ultimaModificacion = ultimaModificacion;
    }
}