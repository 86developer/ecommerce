export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <nav>
                    <h1>Navbar</h1>

                    <ul>
                        <li>
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/carrito">Carrito</a>
                        </li>
                        <li>
                            <a href="/app/productos">Productos</a>
                        </li>

                    </ul>
                </nav>

                {children}
            </body>
        </html>
    )
}