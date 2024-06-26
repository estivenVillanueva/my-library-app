import { pedido } from "./pedidos";
import { Libros } from "./libros";

 export class libreria{
  public Libros: Libros[];
  public Pedidos: pedido[];

  constructor(){
    this.Libros = [];
    this.Pedidos =[];
  }
addlibro(Libros:Libros): void{
    this.Libros.push(Libros)
    console.table(`libro '${Libros.titulo}' agregado a la bibioteca`)
}
removelibro(titulo:string):void{
    const index = this.Libros.findIndex(Libros=> Libros.titulo === titulo);
    if (index !== -1) {
        this.Libros.splice(index,1);
        console.log(`libro '${titulo}' eliminado de la biblioteca`)
    }else{
        console.log(`libro '${titulo}'no encontrado en la biblioteca`)
    }
}
flitrarLibro (nombre:string) {
    const fiterlibros = this.Libros.filter((libro)=>{
        return libro.titulo === nombre;
    }).map((fiterlibros2) => {
        return{
           titulo:fiterlibros2.titulo,
           autor:fiterlibros2.autor,
           editorial:fiterlibros2.editorial,
           precio:fiterlibros2.precio,
        }
    
    })
    console.log("buscar por libro");
    console.table(fiterlibros);
}

    
ordenarLibros( ): void {
    const ordenarLibros= this.Libros.sort((a,b) => b.paginas-a.paginas)
.map((librospagMayorMenor) => {
    return{
       titulo:librospagMayorMenor.titulo,
       autor:librospagMayorMenor.autor,
       editorial:librospagMayorMenor.editorial,
       paginas:librospagMayorMenor.paginas, 
    }
})

console.log("ordenal libros de mayor a menor ");
console.table(ordenarLibros);
    
}
listarlibros( ):void{
    const listar = this.Libros.map((libro) =>{
        return{
            titulo:libro.titulo,
            autor:libro.autor,
            editorial:libro.editorial,
            descripcion:libro.descripcion,
        };


})
console.log("mostrar  libros");
console.table(listar);
}


addPedidos(pedido:pedido):void{
   this.Pedidos.push(pedido);
}

}

 