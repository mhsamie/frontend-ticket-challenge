//import necessary libraries and types
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import ConfirmedId from "../../components/ConfirmPage/ConfirmedId";
import "./result-page-styles.css";

const ResultPage = () => {
  // use navigation hook provided by react router dom to navigate between pages
  const navigate = useNavigate();

  return (
    <div className="success-confirmation">
      <ConfirmedId />
      {/* after ticket id appeared there is a chnace that user wants to buy another ticket or do sth else on home page=> purpose of home button  */}
      <Button
        text="Go back to home"
        type="outlined"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default ResultPage;
