import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNoticesPerPage } from "../../redux/notices/operations";
// import { fetchFavorites } from "../../redux/favorites/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { setPage } from "../../redux/notices/slice";
import {
  errNotify,
  // successNotify,
} from "../../auxiliary/notification/notification";

// import {
//   selectSortParam,
//   selectQueryParams,
// } from "../../redux/filters/selectors";
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
// import data from "../../data/cards.json";

import NoticeItemList from "../../components/NoticeItemList/NoticeItemList";

import css from "./FindPetPage.module.css";

const FindPetPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMore = useSelector(selectIsMore);
  const error = useSelector(selectError);
  const noticesNum = useSelector(selectNoticesNumber);

  useEffect(() => {
    dispatch(
      getNoticesPerPage({
        page: currentPage,
        limit: itemsPerPage,
      })
    )
      .unwrap()
      .then(() => {
        // console.log(data);
        // successNotify("Success loading notices");
      })
      .catch(() => {
        errNotify("Error loading notices");
      });
    // isLoggedIn && dispatch(fetchFavorites());
  }, [dispatch, currentPage, itemsPerPage, isLoggedIn]);

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
