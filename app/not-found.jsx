import Link from "next/link"



function notFfound() {
  return (
    <div>
        <section><h1>Pagina no encontrada</h1></section>
        <Link href="/">volver</Link>
    </div>
  )
}

export default notFfound
