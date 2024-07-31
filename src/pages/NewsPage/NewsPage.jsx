import DocumentTitle from "../../components/DocumentTitle";
import css from "./NewsPage.module.css";

const NewsPage = () => {
  return (
    <>
      <DocumentTitle>News Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2>News Page</h2>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
