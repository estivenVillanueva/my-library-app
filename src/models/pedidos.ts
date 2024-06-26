 export class pedido{
    fecha:string;
    telefono:number;
    direccion_cliente:string;
    nombreLibro:string;

    constructor(
    fecha:string,
    telefono:number,
    direccion_cliente:string,
    nombreLibro:string,
    )

    {
     this.fecha=fecha;
     this.telefono=telefono;
     this.direccion_cliente=direccion_cliente;
     this.nombreLibro=nombreLibro
    }
}