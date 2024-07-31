import DocumentTitle from "../../components/DocumentTitle";
import css from "./OurFriendsPage.module.css";

const OurFriendsPage = () => {
  return (
    <>
      <DocumentTitle>Our Friends Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2>Our Friends Page</h2>
        </div>
      </section>
    </>
  );
};

export default OurFriendsPage;
