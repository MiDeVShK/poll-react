import DataQuizz from "../assets/components/Quizz/dataQuizz";
import Inscription from "../assets/components/inscription/inscription";
import OptionAdmin from "../assets/containers/optionAdmin";

const Admin = () => {
  return (
    <>
      <main className=" flex flex-col items-center">
        <h1 className="text-5xl mb-20 w-3/4" >
          Hello Mike Fullstack developers AKA big ben
        </h1>
        <OptionAdmin />

        <div>
            <Inscription />
            <DataQuizz />
        </div>
      </main>
    </>
  );
};

export default Admin;
