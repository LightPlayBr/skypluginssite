import Image from "next/image";

function Footer() {
    return (
        <div className="bg-dark">

            <footer className="bg-dark2 text-center text-white pt-3 pb-3">
                <div className="container">
                    <a href="/#" className="navbar-brand">
                        <Image src="/static/images/logo_menor.png" alt="Logo" width="100" height="75" />
                    </a>

                    <div className="mr-2">
                        <span> &copy; Todos os direitos reservados 2015-2022</span>
                        <p>Não somos afliados a mojang AB</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Footer;