import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNoticesWithParams } from "../../redux/notices/operations";
import { setPage } from "../../redux/notices/slice";
import PaginationBlock from "../../components/UI/PaginationBlock/PaginationBlock";

import { errNotify } from "../../auxiliary/notification/notification";

import {
  selectQueryParams,
  selectSortParam,
} from "../../redux/filters/selectors";
import {
  selectNotices,
  selectCurrentPage,
  selectTotalPages,
  selectIsLoading,
  selectItemsPerPage,
  selectError,
  selectNoticesNumber,
} from "../../redux/notices/selectors";

import DocumentTitle from "../../components/DocumentTitle";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import Filter from "../../components/Filter/Filter";
import Loader from "../../components/UI/Loader/Loader";
import NoticeItemList from "../../components/NoticeItemList/NoticeItemList";

import css from "./FindPetPage.module.css";

const FindPetPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const noticesNum = useSelector(selectNoticesNumber);
  const query = useSelector(selectQueryParams);
  const sort = useSelector(selectSortParam);

  useEffect(() => {
    dispatch(
      getNoticesWithParams({
        page: currentPage,
        limit: itemsPerPage,
        query,
        sort,
      })
    )
      .unwrap()
      .catch(() => {
        errNotify("Error fetching");
      });
  }, [dispatch, currentPage, itemsPerPage, query, sort]);

  const handleLoadPage = useCallback(
    (page) => {
      if (page !== currentPage) {
        dispatch(setPage(page));
      }
    },
    [dispatch, currentPage]
  );

  return (
    <React.Fragment>
      <DocumentTitle>Find pet page</DocumentTitle>
      <section className={css.container}>
        <h2 className="visually-hidden"> Notices</h2>
        <PageTitle>Find your favorite pet</PageTitle>
        <Filter />
        <div className={css.catalog}>
          {isLoading ? (
            <Loader />
          ) : (
            <React.Fragment>
              {!error && noticesNum > 0 ? (
                <NoticeItemList notices={notices} />
              ) : (
                <p className={css.text}>Not found notices.</p>
              )}

              <PaginationBlock
                totalPages={totalPages}
                currentPage={currentPage}
                onClick={handleLoadPage}
              />
            </React.Fragment>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default FindPetPage;
