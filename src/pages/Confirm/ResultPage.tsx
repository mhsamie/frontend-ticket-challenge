import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import ConfirmedId from "../../components/ConfirmPage/ConfirmedId";
import "./result-page-styles.css";

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-confirmation">
      <ConfirmedId />
      <Button
        text="Go back to home"
        type="outlined"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default ResultPage;
