import {Libros} from './models/libros';
import {libreria} from './models/libreria';
import { pedido } from './models/pedidos';

const librerias= new libreria();

const libro1 = new Libros ("Cien años de soledad"," Gabriel García Márquez","fitcion","español",100,"tapa blanda", 9780553380163," Una saga familiar que narra la historia de los Buendía a lo largo de siete generaciones en el ficticio pueblo de Macondo.","nuevo","Madrid, España","30 de mayo de 1967","Editorial Sudamericana",496,"13 x 2.5 x 20 cm","400 gramos",true);

const libro2 = new Libros ("pricipitos","antoine de saint","fitcion","español",89,"tapadura",97819864314480,"un cuento magico que sigue las aventuras de un pequeño principe","nuevo","francia","1994","boka for you young",96,"11.43*3.18*18.42","100g",true);

const libro3 = new Libros ("1984"," George Orwell","fitcion","ingles",89,"tapadura", 9780451524935,"Una novela distópica que explora temas de totalitarismo, vigilancia gubernamental y manipulación de la verdad","nuevo","Tienda en línea","8 de junio de 1949","Secker & Warburg",398,"11.43*3.18*18.42","100g",true);

const pedido1 = new pedido ("07-08-2024",3105399262,"casa azul","principito")

librerias.addlibro(libro1)
librerias.addlibro(libro2)
librerias.addlibro(libro3)
librerias.flitrarLibro("pricipitos")
librerias.removelibro("pricipito")
librerias.ordenarLibros()
librerias.addPedidos(pedido1)