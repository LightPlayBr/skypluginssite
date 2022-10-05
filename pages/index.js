import Image from "next/image";
import axios from 'axios';

const authAxios = axios.create({
    baseURL: "http://skyplugins-api.vercel.app/api"
    /*headers: {
        Authorization: `Bearer TOKEN-AQUI`
    }*/
})

async function getPlugins() {
    authAxios.get("/api/plugins/").then(
        (response) => {
            console.log("ok");
        }, () => {
            console.log("erro");
        })
}

function Home() {
    getPlugins()
    return (
        <div className="bg-dark">

            <div className="container pt-5 pb-5">

                <div className="container bg-dark2 rounded d-none d-lg-block d-xl-block">
                    <div className="row">
                        <div className="col-sm">
                            <div className="p-3 display-3 text-light">
                                A inovação começa agora!
                            </div>
                            <div className="p-3">

                                <a className="btn btn-primary me-1" href="/conta/cadastrar" role="button">Criar Conta</a>

                                <a className="btn btn-dark" href="/contato" role="button">Contato</a>

                            </div>
                        </div>
                        <div className="col-sm p-3 mx-auto d-block my-auto">
                            <Image src="/static/images/logo_grande.png" alt="Logo" width="500px" height="250px" />
                        </div>
                    </div>
                </div>

                <div className="container mt-5 text-center">
                    <div className="text-light blockquote">Plugins Mais Populares</div>
                    <div className="text-secondary blockquote-footer">Nossos Plugins Mais Famosos</div>
                </div>


                <div className="container rounded mt-2">
                    <div className="row justify-content-center">

                        <div className="col-6 col-lg-2 m-lg-1 rounded p-1">
                            <div className="bg-dark2 rounded p-3">
                                <div className="d-flex justify-content-center">
                                    <Image src="/static/images/icone_plugin.png" alt="Logo" width="100" height="100" />
                                </div>
                                <div className="h6 text-light text-center mt-3">
                                    Teste
                                </div>
                                <div className="h4 text-light text-center mt-1">
                                    R$ 10,00
                                </div>
                                <div className="text-light text-center mt-1 d-flex justify-content-center">
                                    <a className="btn btn-primary me-1 add-to-cart" href="#" role="button"><i
                                        className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-dark me-1" href="#" role="button">Ver detalhes</a>
                                </div>
                            </div>
                        </div>

                        <div id="plugins"/>

                    </div>
                </div>


                <div className="container mt-5 text-left">
                    <div className="text-light blockquote">Plugins</div>
                    <div className="text-secondary blockquote-footer">Todos nossos plugins prontos</div>
                </div>


                <div className="content rounded mt-2">
                    <div className="row justify-content-center">



                        <div className="col-6 m-0 col-lg-2 m-lg-1 rounded p-1">
                            <div className="bg-dark2 rounded p-3">
                                <div className="d-flex justify-content-center">
                                    <Image src="/static/images/icone_plugin.png" alt="Logo" width="100" height="100" />
                                </div>
                                <div className="h6 text-light text-center mt-3">
                                    Teste
                                </div>
                                <div className="h4 text-light text-center mt-1">
                                    R$ 10,00
                                </div>
                                <div className="text-light text-center mt-1 d-flex justify-content-center">
                                    <a className="btn btn-primary me-1 add-to-cart" href="#plugins" pl="<?= $plugin->id ?>" role="button"><i
                                        className="fa fa-shopping-cart"></i></a>
                                    <a className="btn btn-dark me-1" href="/plugin?id=<?= $plugin->id ?>" role="button">Ver detalhes</a>
                                </div>
                            </div>
                        </div>


                    </div>


                    <div className="mt-3">
                        <div className="row justify-content-end">
                            <div className="col-3">
                                <div className="row justify-content-end">
                                    <div className="d-flex justify-content-end">

                                        <a className="btn btn-primary ms-1" href="#" role="button">1</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="d-none d-md-block d-lg-block">
                    <div className="container mt-4 text-left">
                        <div className="text-light blockquote">Parceiros</div>
                        <div className="text-secondary blockquote-footer">Servidores que confiam em nosso trabalho</div>
                    </div>



                    <div className="container rounded mt-2">

                        <div className="row justify-content-center carousel slide">

                            <div className="col-md-1 col-lg-1 m-4 mt-1 rounded p-2">
                                <div className="d-flex justify-content-center">
                                    <li>

                                    </li>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>


            </div>



        </div>
    );
}

export default Home;