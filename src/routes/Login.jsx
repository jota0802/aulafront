import {LoginStyle} from '../css/LoginStyle'

const Login =()=>{
    return (
        <LoginStyle>
            <section className="container">
                <div className="container-login">
                    <div className="login">
                        {/*form do login */}
                        <form className="login-form">
                            <span className="titulo-login">Faça seu Login</span>
                            {/* Campo input usuario */}
                            <div className="w-input">
                            <input
                                type="text"
                                className="input-form"
                                id="usuario"
                            />
                            <span placeholder="Usuario"></span>
                            </div>
                            {/*Campo input Senha */}
                            <div className="w-input">
                            <input
                                type="password"
                                className="input-form"
                                id="senha"
                            />
                            <span placeholder="Senha"></span>
                            </div>
                            <div className='login-btn'>
                                <button type='submit' className='login-form-btn'>Login</button>
                            </div>
                            {/** Utils*/}

                                <ul>
                                    <li>
                                        <span className='text-forgot'>Esqueceu sua Senha?</span>
                                    </li>
                                    <li>
                                        <span className='text-forgot'>Não possui Login? Cadastre-se!</span>
                                        <a href="#" className='texto-forgot-cadastro'>Criar Conta</a>
                                    </li>
                                </ul>
                        </form>
                    </div>
                    <img src="" alt="img login" />
                </div>
            </section>
        </LoginStyle>
    )
}
export default Login