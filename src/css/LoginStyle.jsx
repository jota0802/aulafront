import styled from 'styled-components'

export const LoginStyle = styled.section`
.container{
    width: 100%;
    margin:0 auto;
}
.container-login{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex:wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: transparent;
}
.login{
    width: 30vw;
    margin-right:4vw;
}
.login-form{
  width: 100%;
}
.titulo-login{
    display: block;
    font-size: 2vw ;
    line-height: 1.2rem;
    text-align: center;
}
.w-input{
    width: 100%;
    position: relative;
    margin-top: 3vh;
    margin-bottom: 3vh;
    border-bottom: 0.3vh solid #d9d9d9;
}
.input-form{
    font-size: 1rem;
    color: #555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 2.8vh;
    padding:0 0%.4;
    border: none;
}
.login-btn{
    width: 100%;
    display: flex;
    justify-content: center;

}
.login-form-btn{
    font-size: 1rem;
    color: white;
    background: #213550;
    width: 100%;
    height: 5.2vh;
    border-radius:0.6vw;
    transition: all 0.5s ease-in-out;

}
.login-form-btn:hover{
   scale: 1.06;
}
.utils{
    margin-top: 2vh;
    margin-bottom: 2vh;
}
.text1{
    color: black;
}
.text2{
    color: #3a7444;
}
img{
    width: 40vw;
    height: 25vh;
}
`