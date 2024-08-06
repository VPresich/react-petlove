import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchForm from "../../components/UI/SearchForm/SearchForm";
import { getNewsWithParams } from "../../redux/news/operations";
import { setPage, setKeyword } from "../../redux/news/slice";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";
import {
  selectNews,
  selectCurrentPage,
  selectIsLoading,
  selectItemsPerPage,
  selectIsMore,
  selectError,
  selectNewsNumber,
  selectKeyword,
} from "../../redux/news/selectors";

import Button from "../../components/UI/Button/Button";
import DocumentTitle from "../../components/DocumentTitle";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import NewsList from "../../components/NewsList/NewsList";

import css from "./NewsPage.module.css";

const NewsPage = () => {
  const dispatch = useDispatch();
  const newsList = useSelector(selectNews);

  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const isMore = useSelector(selectIsMore);
  const error = useSelector(selectError);
  const noticesNum = useSelector(selectNewsNumber);
  const keyword = useSelector(selectKeyword);
  const shouldFetch = useRef(true);

  useEffect(() => {
    if (shouldFetch.current) {
      dispatch(
        getNewsWithParams({
          page: currentPage,
          limit: itemsPerPage,
          keyword,
        })
      )
        .unwrap()
        .then(() => {
          successNotify("Success loading news");
        })
        .catch(() => {
          errNotify("Error loading news");
        });
      shouldFetch.current = false;
    }
  }, [dispatch, currentPage, itemsPerPage, keyword]);

  const handleSearch = (topic) => {
    dispatch(setKeyword(topic));

    shouldFetch.current = true;
  };

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
    shouldFetch.current = true;
  };

  return (
    <>
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
                {isMore && (
                  <Button
                    onClick={handleLoadMore}
                    background="secondary"
                    width="200px"
                  >
                    Load More
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
