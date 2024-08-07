import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNoticesWithParams } from "../../redux/notices/operations";
import { setPage } from "../../redux/notices/slice";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";

import {
  selectQueryParams,
  selectSortParam,
} from "../../redux/filters/selectors";
import {
  selectNotices,
  selectCurrentPage,
  selectIsLoading,
  selectItemsPerPage,
  selectIsMore,
  selectError,
  selectNoticesNumber,
} from "../../redux/notices/selectors";

import Button from "../../components/UI/Button/Button";
import DocumentTitle from "../../components/DocumentTitle";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import Filter from "../../components/Filter/Filter";

import NoticeItemList from "../../components/NoticeItemList/NoticeItemList";

import css from "./FindPetPage.module.css";

const FindPetPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const isMore = useSelector(selectIsMore);
  const error = useSelector(selectError);
  const noticesNum = useSelector(selectNoticesNumber);
  const query = useSelector(selectQueryParams);
  const sort = useSelector(selectSortParam);

  const loadNotices = useCallback(() => {
    dispatch(
      getNoticesWithParams({
        page: currentPage,
        limit: itemsPerPage,
        query,
        sort,
      })
    )
      .unwrap()
      .then(() => {
        successNotify("Success loading notices");
      })
      .catch(() => {
        errNotify("Error loading notices");
      });
  }, [dispatch, currentPage, itemsPerPage, query, sort]);

  useEffect(() => {
    loadNotices();
  }, [loadNotices]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };

  return (
    <>
      <DocumentTitle>Find pet page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className="visually-hidden"> Notices</h2>
          <PageTitle>Find your favorite pet</PageTitle>
          <Filter />
          <div className={css.catalog}>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                {!error && noticesNum > 0 ? (
                  <NoticeItemList notices={notices} />
                ) : (
                  <p className={css.text}>Not found notices.</p>
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

export default FindPetPage;
