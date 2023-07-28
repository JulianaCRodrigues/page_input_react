import style from "./CardMain.module.css";

function CardMain() {
  return ( 
    <div className={style.container}>
      <div className={style.text}>
        <p className={style.subTitle}><img src="lightning.svg" alt=""/> FAÇA PARTE DA TURMA 1</p> 
        <div className={style.title}>
          <h1>Saia do zero e comece sua carreira como dev Full Stack</h1>
          <p>
            Aprenda as habilidades necessárias pra sair do completo zero e
            conquistar sua primeira vaga no mercado da programação já nos
            próximos meses.
          </p>
        </div>
        <button className={style.btnCompra}>Garantir minha vaga</button>
      </div>
      <div className={style.effectBlur}><img id="effectBlur" src="effect-blur.svg" alt=""/></div>
      <div className={style.photo}><img src="img-bruno.png" alt="" /></div>
    </div>   
   );
}

export default CardMain;