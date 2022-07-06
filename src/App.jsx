import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

const App = () => {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 €");

  const data = [
    {
      id: 1,
      question: "Koji je uobičajeni naziv za petak pred Uskrs?",
      answers: [
        {
          text: "Veliki",
          correct: true,
        },
        {
          text: "Mali",
          correct: false,
        },
        {
          text: "Crveni",
          correct: false,
        },
        {
          text: "Crni",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Šta od sledećeg predstavlja krvno srodstvo?",
      answers: [
        {
          text: "Zaova",
          correct: false,
        },
        {
          text: "Svastika",
          correct: false,
        },
        {
          text: "Zet",
          correct: false,
        },
        {
          text: "Ujak",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "„Rols Rojs PLC“ je britanski proizvođač?",
      answers: [
        {
          text: "Slatkiša",
          correct: false,
        },
        {
          text: "Odeće",
          correct: false,
        },
        {
          text: "Avionskih motora i pogonskih sistema",
          correct: false,
        },
        {
          text: "Luksuznih automobila",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Cunami je?",
      answers: [
        {
          text: "Kiselo jelo",
          correct: false,
        },
        {
          text: "Veliki talas",
          correct: true,
        },
        {
          text: "Vrsta sablje",
          correct: false,
        },
        {
          text: "Začin",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Koje voće, po legendi, povezuje Njutna, Adama i Evu?",
      answers: [
        {
          text: "Trešnja",
          correct: false,
        },
        {
          text: "Ananas",
          correct: false,
        },
        {
          text: "Jabuka",
          correct: true,
        },
        {
          text: "Kruška",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "Prezimena koja počinju sa Mek (Mc) su uglavnom škotska, prezimena koja sadrže Fon (Von) su nemačka, Ibn uglavnom arapska, a Van su?",
      answers: [
        {
          text: "Španska",
          correct: false,
        },
        {
          text: "Engleska",
          correct: false,
        },
        {
          text: "Holandska",
          correct: true,
        },
        {
          text: "Švedska",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Suveren je?",
      answers: [
        {
          text: "Mislilac",
          correct: false,
        },
        {
          text: "Vladalac",
          correct: true,
        },
        {
          text: "Bankar",
          correct: false,
        },
        {
          text: "Samouveren čovek",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Kako se zvao prvi i poslednji kralj Crne Gore?",
      answers: [
        {
          text: "Danilo",
          correct: false,
        },
        {
          text: "Nikola",
          correct: true,
        },
        {
          text: "Petar Petrović Njegoš",
          correct: false,
        },
        {
          text: "Milo",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "„Dajte mi oslonac i pomeriću Zemlju“, rekao je?",
      answers: [
        {
          text: "Cezar",
          correct: false,
        },
        {
          text: "Galilej",
          correct: false,
        },
        {
          text: "Aristotel",
          correct: false,
        },
        {
          text: "Arhimed",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Za dezinfekciju delova tela koristi se?",
      answers: [
        {
          text: "Rastvor hipermangana",
          correct: true,
        },
        {
          text: "Rastvor arsenika",
          correct: false,
        },
        {
          text: "Tečni amonijak",
          correct: false,
        },
        {
          text: "Sona kiselina",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Dva osnovna sistema obračuna amortizacije su?",
      answers: [
        {
          text: "Vremenski i funkcionalni sistem",
          correct: true,
        },
        {
          text: "Retrospektivni i prospektivni sistem",
          correct: false,
        },
        {
          text: "Strukturalni i funkcionalni sistem",
          correct: false,
        },
        {
          text: "Kvantitativni i kvalitativni sistem",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Operu „Toska“ je komponovao?",
      answers: [
        {
          text: "Anri Fayol",
          correct: false,
        },
        {
          text: "Ludvig van Betoven",
          correct: false,
        },
        {
          text: "Đakomo Pučini",
          correct: true,
        },
        {
          text: "Volfgang Amadeus Mocart",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question:
        "Termin birokratija, kojim se opisuje organizacija koja ima jasno definisanu hijerarhijsku strukturu, primenjuje autoritativni slil menadžmenta, visoko specijalizovane uloge njenih članova, formalizovana pravila ponašanja, sa velikim naglaskom na pravila i procedure, krajem 19. veka uveo je?",
      answers: [
        {
          text: "Italijanski pisac Nikolo Makijaveli",
          correct: false,
        },
        {
          text: "Nemački sociolog Max Weber",
          correct: true,
        },
        {
          text: "Engleski naučnik Tom Arya",
          correct: false,
        },
        {
          text: "Američki naučnik Frederick Winslow Taylor",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Andragogija se bavi?",
      answers: [
        {
          text: "Proučavanjem insekata",
          correct: false,
        },
        {
          text: "Proučavanje terena",
          correct: false,
        },
        {
          text: "Obrazovanjem odraslih",
          correct: true,
        },
        {
          text: "Sporazumevanjem pomoću gestova",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        "Kada je kvalitet trajna karakteristika nečega, onda kažemo da je on?",
      answers: [
        {
          text: "Pridodat",
          correct: false,
        },
        {
          text: "Standard",
          correct: false,
        },
        {
          text: "Izvrstan",
          correct: false,
        },
        {
          text: "Svojstven",
          correct: true,
        },
      ],
    },
    {
      id: 16,
      question:
        "ČESTITAMO POSTALI STE MILIONER, sačekajte 30 sekundi ili pritisnite A, B, C ili D.",
      answers: [
        {
          text: "A",
          correct: false,
        },
        {
          text: "B",
          correct: false,
        },
        {
          text: "C",
          correct: false,
        },
        {
          text: "D",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "100 €" },
        { id: 2, amount: "200 €" },
        { id: 3, amount: "300 €" },
        { id: 4, amount: "500 €" },
        { id: 5, amount: "1.000 €" },
        { id: 6, amount: "2.000 €" },
        { id: 7, amount: "4.000 €" },
        { id: 8, amount: "8.000 €" },
        { id: 9, amount: "16.000 €" },
        { id: 10, amount: "32.000 €" },
        { id: 11, amount: "64.000 €" },
        { id: 12, amount: "125.000 €" },
        { id: 13, amount: "250.000 €" },
        { id: 14, amount: "500.000 €" },
        { id: 15, amount: "1.000.000 €" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <div className="endText">
                <h1>
                  {username} earned: {earned}
                </h1>
                <br />
                <p>(If you want to play again, just refresh the page!)</p>
              </div>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
};

export default App;
