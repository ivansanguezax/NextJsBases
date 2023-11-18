import Link from "next/link";

export const metadata = {
  title: "Tienda",
  description: "Tienda de productos",
}



function layout({ children }) {
  return (
    <>
      <nav>
        <h3>Seccion tienda</h3>
        <ul>
          <li><Link href="/store/categorias">Categorias</Link></li>
          <li>Productos</li>
        </ul>
      </nav>
      {children}
    </>
  );
}

export default layout;
