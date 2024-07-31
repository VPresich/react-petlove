import DocumentTitle from "../../components/DocumentTitle";
import css from "./FindPetPage.module.css";

const FindPetPage = () => {
  return (
    <>
      <DocumentTitle>Find Pet Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2>Find Pet Page</h2>
        </div>
      </section>
    </>
  );
};

export default FindPetPage;
