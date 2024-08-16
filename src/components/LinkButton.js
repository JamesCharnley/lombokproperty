import styles from './LinkButton.module.css';
import { useNavigate } from "react-router-dom";

export default function LinkButton({text, link}){

  const navigate = useNavigate();

  function handleClick(){
    navigate(link);
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}