import DocumentTitle from "../../components/DocumentTitle";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import css from "./FindPetPage.module.css";
import SearchForm from "../../components/UI/SearchForm/SearchForm";

const FindPetPage = () => {
  const handleSearch = (topic) => {
    console.log("FindPage", topic);
  };

  return (
    <>
      <DocumentTitle>Find Pet Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <PageTitle>Find your favorite pet</PageTitle>
          <div className={css.filtersContainer}>
            <SearchForm onSearch={handleSearch} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FindPetPage;
