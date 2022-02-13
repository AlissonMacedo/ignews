import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi'

export function SigninButton() {
  const isUserLogged = true;

  if(isUserLogged) {
    return (
      <>
        <button className={styles.singinbutton} type="button">
          <FaGithub color="#04d361" />
          Alisson Macedo
          <FiX color="#737380" className={styles.closeIcon} />
        </button>
      </>
    );
  }

  return (
    <>
      <button className={styles.singinbutton} type="button">
        <FaGithub color="#eba417" />
        Sing in with GitHub
      </button>
    </>
  );
}