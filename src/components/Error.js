import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();

  return (
    <div>
        <h1>
          {error.text}
          <h1>L#d# thik se likh... 😡</h1>
          <h1>andhe, likh ke ek bar check kar le 🤬</h1>
          <h1>Nai b##c##d, tu rehne de</h1>
          <h1>so jaa...😪😴💤💤💤</h1>
        </h1>
    </div>
  )
}
export default Error;