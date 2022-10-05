import Image from "next/image";

function Navigation() {
    return (
        <div className="bg-dark">
            <nav className="navbar navbar-expand-lg py-1 navbar-dark shadow-sm d-none d-lg-block d-xl-block bg-dark2">
                <div className="container">

                    <a href="/#" className="navbar-brand">
                        <Image src="/static/images/logo_menor.png" alt="Logo" width="100" height="75" />
                    </a>

                    <div className="collapse navbar-collapse mr-2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item "><a href="/#" className="nav-link">Início</a></li>
                            <li className="nav-item"><a href="/sobre" className="nav-link">Sobre</a></li>
                            <li className="nav-item"><a href="/dedicado" className="nav-link">Dedicados</a></li>
                            <li className="nav-item"><a href="/contato" className="nav-link">Contato</a></li>
                            <li className="nav-item"><a href="https://obfuscation.skyplugins.com.br"
                                                        className="nav-link">Obfuscação</a></li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse flex-row-reverse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active me-2">
                                <a className="nav-link text-light bg-primary rounded" href="/conta"><i className="fa fa-user"></i> Minha
                                    conta</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link text-light bg-dark rounded" href="/carrinho"><i
                                    className="fa fa-shopping-cart"></i> <span
                                    className="badge carrin badge">1</span></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navigation;