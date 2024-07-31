import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import {
  // getNanniesPerPage,
  getNanniesWithParams,
} from "../../redux/nannies/operations";
import { fetchFavorites } from "../../redux/favorites/operations";
import { selectIsLoggedIn, selectTheme } from "../../redux/auth/selectors";
import { setPage } from "../../redux/nannies/slice";
import CardList from "../../components/CardsList/CardsList";
import Filters from "../../components/Filters/Filters";
import {
  selectSortParam,
  selectQueryParams,
} from "../../redux/filters/selectors";
import {
  selectNannies,
  selectCurrentPage,
  selectIsLoading,
  selectItemsPerPage,
  selectIsMore,
  selectError,
  selectNanniesNumber,
} from "../../redux/nannies/selectors";
import Button from "../../components/UI/Button/Button";
import DocumentTitle from "../../components/DocumentTitle";

import css from "./NanniesPage.module.css";

export default function NanniesPage() {
  const dispatch = useDispatch();

  const nannies = useSelector(selectNannies);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMore = useSelector(selectIsMore);
  const error = useSelector(selectError);
  const nanniesNum = useSelector(selectNanniesNumber);

  const theme = useSelector(selectTheme);

  const queryParams = useSelector(selectQueryParams);
  const sortParam = useSelector(selectSortParam);

  useEffect(() => {
    dispatch(
      getNanniesWithParams({
        page: currentPage,
        limit: itemsPerPage,
        query: queryParams,
        sort: sortParam,
      })
    );
    isLoggedIn && dispatch(fetchFavorites());
  }, [dispatch, currentPage, itemsPerPage, isLoggedIn, queryParams, sortParam]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };
  return (
    <>
      <DocumentTitle>Nannies catalog</DocumentTitle>
      <section className={css.container}>
        <h2 className="visually-hidden"> Nannies catalog</h2>
        <Filters />
        <div className={css.catalog}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {!error && nanniesNum > 0 ? (
                <CardList nannies={nannies} />
              ) : (
                <p className={clsx(css.text, css[theme])}>Not found nannies.</p>
              )}
              {isMore && (
                <Button
                  onClick={handleLoadMore}
                  btnAuxStyles={css.btnAuxStyles}
                >
                  Load More
                </Button>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
