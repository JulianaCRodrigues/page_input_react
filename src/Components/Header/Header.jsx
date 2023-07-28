import style from "./Header.module.css";


function Header() {
  return (
    <div className={style.header}>
      <img
        className={style.logo}
        src="logo.svg"
        alt="Desenho formando um cículo com pequenas bolas verdes"
      />

      <div className={style.menu}>
        <div className={style.login}>
          <img src="user.svg" alt="icone de uma pessoa" />
          <p>Já sou aluno</p>
        </div>
        <div className={style.register}>
          <button className={style.btnMenu}>Faça sua inscrição</button>
        </div>
      </div>
    </div>
  );
}

export default Header;