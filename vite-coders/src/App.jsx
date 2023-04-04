import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import PayForm from "./components/payForm";
import CartForm from "./components/CartForm";
import UserForm from "./components/UserForm";

//Hooks
import { useForm } from "./hooks/useForm";

import "./App.css";

function App() {
  const formComponents = [<CartForm />, <UserForm />, <PayForm />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Agradecemos sua compra</h2>
        <p>
          Muito obrigado por comprar em nossa loja e permitir que mantenhamos
          nosso sonho vivo!
        </p>
      </div>
      <div className="form-container">
        <p>Etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <span>Voltar</span>
                <GrFormPrevious />
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
