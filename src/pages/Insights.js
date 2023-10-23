import Header from "../components/Header";
import { Link } from "react-router-dom";

function Insights() {
  //TODO: da sistemare Header in modo che abbia il link per l'accesso a login come prima
  //TODO: da sistemare il codice sass di questa pagina

  return (
    <body>
      <Header />
      <p> ! Insights ! </p>
      <p>
        Go to <Link to="/"> HOME </Link>
      </p>
    </body>
  );
}

export default Insights;
