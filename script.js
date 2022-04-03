//(40 puntos) [Criterio subjetivo] Según qué tan interesante es el diseño de su interfaz (en este caso incluye el diseño de las tarjetas)
//(20 puntos) Por que las tarjetas estén en posiciones random en el grid cada vez que se cargue la pantalla [COMPLETADO]
//(20 puntos) Por mostrar un mensaje de "juego completado" cuando el jugador gane el juego [COMPLETADO]
//(10 puntos) Por llevar un contador de los movimientos que le ha tomado al jugador resolver el juego (siempre debe estar visible) [COMPLETADO]
//(10 puntos) Por entregar un link a su trabajo en git [COMPLETADO]
//(5 puntos) Por utilizar css grid [COMPLETADO]

// Referencia: https://reactjs.org/docs/hooks-reference.html#useeffect

const SpiderSolitary = [
  {
    tipo_carta: "Corazones",
    src: "./images/corazones.png",
    cardStatus: false,
  },

  {
    tipo_carta: "Jajas",
    src: "./images/jajas.png",
    cardStatus: false,
  },

  {
    tipo_carta: "Rombo",
    src: "./images/rombo.png",
    cardStatus: false,
  },

  {
    tipo_carta: "Rombo Rojo",
    src: "./images/rombo_rojo.png",
    cardStatus: false,
  },

  {
    tipo_carta: "Trebol",
    src: "./images/trebol.png",
    cardStatus: false,
  },

  {
    tipo_carta: "Trebol Negro",
    src: "./images/trebol_negro.png",
    cardStatus: false,
  },

  {
    tipo_carta: "Corazones Negros",
    src: "./images/corazones_negros.png",
    cardStatus: false,
  },

  {
    tipo_carta: "Esfera",
    src: "./images/esfera.png",
    cardStatus: false,
  },
];

const App = () => {
  // Referencia para tiempo: https://stackoverflow.com/questions/55031097/how-do-i-start-a-timer-on-a-click
  var min = 0;
  var sec = 0;

  function tiempoPartida() {
    timer.innerHTML = min + " min " + sec + " sec";
    sec++;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
  }

  const maxPoints = () => {
    var itemsInCards = SpiderSolitary.length;
    var maxScore = itemsInCards * 2;
    console.log(maxScore);
    return maxScore;
  };

  maxPoints();

  // Funcion para resetear el tiempo
  const resetTime = () => {
    var min = 0;
    var sec = 0;
    timer.innerHTML = 0 + " min " + 0 + " sec";

    return min, sec;
  };
  document.addEventListener(
    "click",
    () => {
      setInterval(tiempoPartida, 1000);
    },
    { once: true }
  );

  const glowingRed = {
    width: "150px",
    height: "150px",
    backgroundColor: "white",
    boxShadow: "0px 0px 40px 20px red",
  };

  const glowingBlue = {
    width: "150px",
    height: "150px",
    backgroundColor: "white",
    boxShadow: "0px 0px 40px 20px blue",
  };

  const gitHub = {
    backgroundImage: "url('./images/gitLogo.png')",
    backgroundSize: "cover",
    width: "60px",
    height: "60px",
    position: "relative",
    backgroundColor: "lightblue",
    marginTop: "5px",
  };

  //https://www.geeksforgeeks.org/how-to-set-background-images-in-reactjs/
  const resetButton = {
    backgroundImage: "url('./images/reset.png')",
    backgroundSize: "cover",
    width: "60px",
    height: "60px",
    position: "relative",
    backgroundColor: "lightblue",
  };

  const CardCSS = {
    position: "relative",
    padding: "0px",
  };

  // Usada para esconder cartas jeje
  const CardCSS2 = {
    width: "90px",
    height: "90px",
    transform: "rotateY(90deg)",
    position: "absolute",
  };

  const CardCSS3 = {
    width: "90px",
    height: "90px",
  };

  const Leaderboard = {
    display: "flex",
    border: "10px solid green",
    color: "black",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    columnCount: "2",
    columnGap: "100px",
    fontFamily: "Tahoma",
    borderRadius: "7px",
  };
  const bgStyle = {
    backgroundImage: "url('./images/background.png')",
    textAlign: "center",
  };

  const bgStyle2 = {
    width: "100%",
    height: "100%",
    backgroundImage: "url('./images/xp fondo.png')",
    textAlign: "center",
  };

  //(5 puntos) Por utilizar css grid [COMPLETADO]
  const cardsInGrid = {
    //https://developer.mozilla.org/es/docs/Web/CSS/gap
    marginTop: "50px",
    display: "grid",
    gridTemplateColumns: "4fr 4fr 4fr 4fr",
    gap: "-15px -100px -100px",
  };

  const handleCard = (SpiderCard) => {
    firstCard ? setnextCard(SpiderCard) : setfirstCard(SpiderCard);
  };

  const restartGame = () => {
    shuffleDeck();
    let min = 0;
    let sec = 0;
    resetTime();
    alert("Reiniciando la partida. ¡Se han revuelto las cartas!");
    //console.log("Si funcionaaa");
  };

  // Se definen variables con audios a usar
  var startGame = new Audio("./extra/song.mp3");
  var Right = new Audio("./extra/right.mp3");
  var Wrong = new Audio("./extra/wrong.mp3");

  var Win = new Audio("./extra/win.mp3");

  // Se llama cada sonido
  const StartGame = () => {
    startGame.play();
  };
  const WrongCard = () => {
    Wrong.play();
  };

  const RightCard = () => {
    Right.play();
  };

  const WinGame = () => {
    Win.play();
  };

  // Referencia: https://es.reactjs.org/docs/hooks-state.html

  // Declaracion de variables de estado
  const [unavailableCard, setUnavailableCard] = React.useState(false);
  const [cartas, setCartas] = React.useState([]);
  const [cardMovement, setcardMovement] = React.useState(0);
  const [score, setScore] = React.useState(0);

  // manejo de cartas
  const [firstCard, setfirstCard] = React.useState(null);
  const [nextCard, setnextCard] = React.useState(null);
  const [foundMatches, setfoundMatches] = React.useState(0);

  //(10 puntos) Por entregar un link a su trabajo en git [COMPLETADO]
  const githubLink = () => {
    alert("Redireccionando a GitHub!");
    window.location = "https://github.com/aleg001/WindowsXP_LabReact";
  };

  const nullableFunc = () => {
    setfirstCard(null);
    setnextCard(null);
  };

  const valueCard = (parameter) => {
    console.log(setcardMovement(0));
    console.log(setScore(0));
    console.log(setfoundMatches(0));
  };

  //(20 puntos) Por que las tarjetas estén en posiciones random en el grid cada vez que se cargue la pantalla [COMPLETADO]
  const shuffleDeck = () => {
    const mixedCards = [...SpiderSolitary, ...SpiderSolitary]
      //https://javascript.info/array-methods#shuffle-an-array
      .sort(() => Math.random() - 1 / 2)
      .map((SpiderCard) => ({ ...SpiderCard, id: Math.random() - 1 / 2 }));

    //null parameters are sent through function
    nullableFunc();
    setcardMovement(0);
    setScore(0);
    setfoundMatches(0);
    valueCard();
    setCartas(mixedCards);
  };

  function SearchCard({
    SpiderCard,
    handleCard,
    flippedCard,
    unavailableCard,
  }) {
    const reverseCard = () => {
      if (!unavailableCard) {
        handleCard(SpiderCard);
      }
    };

    return (
      <div className="SpiderCard" style={CardCSS}>
        <img
          src={SpiderCard.src}
          style={flippedCard ? CardCSS3 : CardCSS2}
        ></img>
        <img
          src="./images/TarjetaSpider.png"
          onClick={reverseCard}
          style={flippedCard ? CardCSS2 : CardCSS3}
        ></img>
      </div>
    );
  }

  const ScorePoints = () => {
    setfirstCard(null);
    setnextCard(null);
    setScore((totalScore) => totalScore + 50);
    setUnavailableCard(false);
  };

  const movements = () => {
    setfirstCard(null);
    setnextCard(null);
    setcardMovement((cardMovementTotal) => cardMovementTotal + 1);
    setUnavailableCard(false);
  };

  React.useEffect(() => {
    // Verificación de cartas
    if (firstCard && nextCard) {
      //console.log("Si funcionaaa");
      setUnavailableCard(true);
      // Coincidencias
      if (firstCard.src == nextCard.src) {
        //console.log("Si funcionaaa");
        setCartas((CartaPrev) => {
          return CartaPrev.map((SpiderCard) => {
            if (SpiderCard.src == firstCard.src) {
              //console.log("Si funcionaaa");
              setfoundMatches((TotCoinci) => TotCoinci + 1);
              return { ...SpiderCard, matchCard: true };
            } else {
              //console.log("Si funcionaaa");
              return SpiderCard;
            }
          });
        });
        alert("¡Felicidades, sigue así!");
        movements();
        ScorePoints();
        console.log("¡Has obtenido un punto!");
        RightCard();
      } else {
        alert("¡Intenta de nuevo!");
        setTimeout(() => movements(), 5);
        WrongCard();
        //console.log("Si funcionaaa");
      }
    }

    if (foundMatches == maxPoints()) {
      //(20 puntos) Por mostrar un mensaje de "juego completado" cuando el jugador gane el juego [COMPLETADO]
      WinGame();
      alert("JUEGO COMPLETADO");
      //console.log("Si funcionaaa");
    }
  }, [firstCard, nextCard]);

  React.useEffect(() => {
    StartGame();
    alert("Iniciando partida");
    tiempoPartida();
    shuffleDeck();
  }, []);

  return (
    <div style={bgStyle}>
      <audio src="./extra/song.mp3" autoPlay="autoplay" loop="loop"></audio>
      <button style={gitHub} onClick={githubLink}></button>
      <button style={resetButton} onClick={restartGame}></button>

      <div className="cardsInGrid" style={cardsInGrid}>
        {cartas.map((SpiderCard) => (
          <SearchCard
            key={SpiderCard.id}
            SpiderCard={SpiderCard}
            handleCard={handleCard}
            flippedCard={
              SpiderCard == firstCard ||
              SpiderCard == nextCard ||
              SpiderCard.matchCard
            }
            unavailableCard={unavailableCard}
          />
        ))}
      </div>

      <div style={Leaderboard}>
        <p>Movements: {cardMovement}</p>
        <p>Score: {score}</p>
        <div id="timer"></div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
