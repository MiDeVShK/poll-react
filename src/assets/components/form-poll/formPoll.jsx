import ButtonNav from "../buttons-nav/button-nav";
import Share from "../share/share";

const FormPoll = (props) => {
  function handleSubmit(event) {
    event.preventDefault(); // empêche le rechargement de la page

    // code à exécuter lors de la soumission du formulaire
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="flex items-center mb-2">
          <input type="radio" name="poll"  />
          <div className="w-full bg-gray-200 rounded-full mx-2">
            <div
              className="bg-redPoll text-s font-medium  text-center p-1.5 leading-none rounded-full"
              style={{ width: 45 + "%", border: "3px solid #e17055" }}
            >
              {" "}
              <p>{props.answerA}</p>
            </div>
          </div>
          <span className="text-2xl">55%</span>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <input type="radio" name="poll"  />
          <div className="w-full bg-gray-200 rounded-full mx-2">
            <div
              className="bg-greenPoll text-s font-medium  text-center p-1.5 leading-none rounded-full"
              style={{ width: 55 + "%", border: "3px solid #00b894" }}
            >
              {" "}
              <p>{props.answerB}</p>
            </div>
          </div>
          <span className="text-2xl">55%</span>
        </div>
      </div>
      <div id="poll-footer" className="flex items-center justify-between">
        <Share />
        <p className="text-2xl">{props.resultTotal} votes</p>
        <ButtonNav text="Validate" />
      </div>
    </form>
  );
};

export default FormPoll;
