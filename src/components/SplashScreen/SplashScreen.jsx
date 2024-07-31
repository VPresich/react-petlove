import css from "./SplashScreen.module.css";
import Logo from "../Logo/Logo";

const AppSplashScreen = () => {
  return (
    <div className={css.container}>
      <Logo />
    </div>
  );
};

export default AppSplashScreen;
