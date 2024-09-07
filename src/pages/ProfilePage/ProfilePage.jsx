import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFavorites,
  selectViewedPets,
} from "../../redux/favorites/selectors";
import UserCard from "../../components/UserCard/UserCard";
import NoticeItemList from "../../components/NoticeItemList/NoticeItemList";
import Button from "../../components/UI/Button/Button";
import { getFullUserInfo } from "../../redux/auth/operations";
import EmptyFavoritesMsg from "../../components/EmptyFavoritesMsg/EmptyFavoritesMsg";
import DocumentTitle from "../../components/DocumentTitle";
import {
  errNotify,
  successNotify,
} from "../../auxiliary/notification/notification";
import css from "./ProfilePage.module.css";

const ProfilePage = () => {
  const [isFavorite, setIsFavorite] = useState(true);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const viewedPets = useSelector(selectViewedPets);

  useEffect(() => {
    dispatch(getFullUserInfo())
      .unwrap()
      .then(() => {
        successNotify("success getFullUserInfo");
      })
      .catch(() => {
        errNotify("Error getFullUserInfo");
      });
  }, [dispatch]);

  const handleDetails = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <DocumentTitle>Profile page</DocumentTitle>

      <section className={css.container}>
        <h2 className="visually-hidden"> Profile page</h2>
        <UserCard />
        <div className={css.details}>
          <div className={css.buttons}>
            <Button
              onClick={handleDetails}
              type="button"
              background={isFavorite ? "primary" : "unactive"}
            >
              My favorite pets
            </Button>
            <Button
              onClick={handleDetails}
              type="button"
              background={!isFavorite ? "primary" : "unactive"}
            >
              Viewed
            </Button>
          </div>
          <div className={css.listContainer}>
            {isFavorite && favorites.length > 0 ? (
              <NoticeItemList notices={favorites} forFavorites={true} />
            ) : (
              isFavorite && <EmptyFavoritesMsg />
            )}
            {!isFavorite && viewedPets.length > 0 ? (
              <NoticeItemList
                notices={viewedPets}
                forFavorites={true}
                isFavoriteButton={false}
              />
            ) : (
              !isFavorite && <EmptyFavoritesMsg />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProfilePage;
