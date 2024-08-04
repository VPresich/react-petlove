import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFriends } from "../../redux/friends/operations";
import {
  selectFriends,
  selectIsLoading,
  selectError,
  selectFriendsNumber,
} from "../../redux/friends/selectors";
import {
  errNotify,
  // successNotify,
} from "../../auxiliary/notification/notification";
import FriendsList from "../../components/FriendsList/FriendsList";
import PageTitle from "../../components/UI/PageTitle/PageTitle";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./OurFriendsPage.module.css";

const OurFriendsPage = () => {
  const dispatch = useDispatch();
  const friendsList = useSelector(selectFriends);
  const friendsNum = useSelector(selectFriendsNumber);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllFriends())
      .unwrap()
      .then(() => {
        // successNotify("Success loading friends");
      })
      .catch(() => {
        errNotify("Error loading friends");
      });
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Our Friends Page</DocumentTitle>
      <section className={css.section}>
        <div className={css.container}>
          <h2 className="visually-hidden">Our Friends Page</h2>
          <PageTitle>Our friends</PageTitle>
          <div className={css.catalog}>
            {isLoading ? (
              <p className={css.text}>loading....</p>
            ) : !error && friendsNum > 0 ? (
              <FriendsList items={friendsList} />
            ) : (
              <p className={css.text}>Not found friends.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFriendsPage;
