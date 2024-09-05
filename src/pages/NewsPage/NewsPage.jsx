import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchForm from "../../components/UI/SearchForm/SearchForm";
import { getNewsWithParams } from "../../redux/news/operations";
import { setPage, setKeyword } from "../../redux/news/slice";
import PaginationBlock from "../../components/UI/PaginationBlock/PaginationBlock";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";

import {
  selectNews,
  selectCurrentPage,
  selectTotalPages,
  selectIsLoading,
  selectItemsPerPage,
  selectError,
  selectNewsNumber,
  selectKeyword,
} from "../../redux/news/selectors";

import DocumentTitle from "../../components/DocumentTitle";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import NewsList from "../../components/NewsList/NewsList";

import css from "./NewsPage.module.css";

const NewsPage = () => {
  const dispatch = useDispatch();
  const newsList = useSelector(selectNews);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const noticesNum = useSelector(selectNewsNumber);
  const keyword = useSelector(selectKeyword);

  useEffect(() => {
    dispatch(
      getNewsWithParams({
        page: currentPage,
        limit: itemsPerPage,
        keyword,
      })
    )
      .unwrap(successNotify("Success Fetch news"))
      .catch(() => {
        errNotify("Error fetching");
      });
  }, [dispatch, currentPage, itemsPerPage, keyword]);

  const handleSearch = (topic) => {
    dispatch(setKeyword(topic));
    dispatch(setPage(1));
  };

  const handleLoadPage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <React.Fragment>
      <DocumentTitle>News page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className="visually-hidden"> News</h2>
          <div className={css.titleWrapper}>
            <PageTitle>News</PageTitle>
            <div className={css.searchWrapper}>
              <SearchForm onSearch={handleSearch} />
            </div>
          </div>
          <div className={css.catalog}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                {!error && noticesNum > 0 ? (
                  <NewsList items={newsList} />
                ) : (
                  <p className={css.text}>Not found news.</p>
                )}

                <PaginationBlock
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onClick={handleLoadPage}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NewsPage;
