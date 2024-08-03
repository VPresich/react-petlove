import DocumentTitle from "../../components/DocumentTitle";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import Filter from "../../components/Filter/Filter";
import data from "../../data/cards.json";

import NoticeItemList from "../../components/NoticeItemList/NoticeItemList";

import css from "./FindPetPage.module.css";

const FindPetPage = () => {
  return (
    <>
      <DocumentTitle>Find Pet Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <PageTitle>Find your favorite pet</PageTitle>
          <Filter />
          <div className="">
            <NoticeItemList notices={data.results} />
          </div>
        </div>
      </section>
    </>
  );
};

export default FindPetPage;

{
  /* <div className={css.catalog}>
  {isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {!error && noticesNumber > 0 ? (
        <NoticeItemList nannies={nannies} />
      ) : (
        <p className={clsx(css.text, css[theme])}>Not found nannies.</p>
      )}
      {isMore && (
        <Button onClick={handleLoadMore} btnAuxStyles={css.btnAuxStyles}>
          Load More
        </Button>
      )}
    </>
  )}
</div>; */
}
