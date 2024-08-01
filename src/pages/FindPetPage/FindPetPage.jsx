import DocumentTitle from "../../components/DocumentTitle";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import Filter from "../../components/Filter/Filter";

import css from "./FindPetPage.module.css";

const FindPetPage = () => {
  return (
    <>
      <DocumentTitle>Find Pet Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <PageTitle>Find your favorite pet</PageTitle>
          <Filter />
        </div>
      </section>
    </>
  );
};

export default FindPetPage;
