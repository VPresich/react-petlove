import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import css from "./PaginationBlock.module.css";
import paginationBullets from "./paginationBullets";
import PaginationButton from "../PaginationButton/PaginationButton";

const PaginationBlock = ({ totalPages, currentPage, onClick }) => {
  const [bulletsToShow, setBulletsToShow] = useState(1);

  useEffect(() => {
    const updateBulletsToShow = () => {
      if (window.innerWidth >= 1440) {
        setBulletsToShow(14);
      } else if (window.innerWidth >= 768) {
        setBulletsToShow(4);
      } else if (window.innerWidth >= 375) {
        setBulletsToShow(3);
      } else {
        setBulletsToShow(1);
      }
    };

    const debouncedUpdate = debounce(updateBulletsToShow, 200);
    window.addEventListener("resize", debouncedUpdate);
    updateBulletsToShow();

    return () => window.removeEventListener("resize", debouncedUpdate);
  }, []);

  const handleClick = useCallback(
    (page) => {
      if (onClick) {
        onClick(page);
      }
    },
    [onClick]
  );

  if (totalPages <= 1) return null;

  const bulletsArray = paginationBullets(
    totalPages,
    bulletsToShow,
    currentPage
  );

  return (
    <div className={css.container}>
      <div className={css.prevButtons}>
        <PaginationButton
          text="<<"
          iconId="chevron-double-left"
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
        />
        <PaginationButton
          text="<"
          iconId="chevron-left"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        />
      </div>
      <div className={css.pagesButtons}>
        {bulletsArray.map((bullet, index) => (
          <PaginationButton
            key={index}
            text={bullet.number}
            isActive={bullet.isActive}
            isButton={bullet.btn}
            onClick={() => bullet.btn && handleClick(Number(bullet.number))}
          />
        ))}
      </div>
      <div className={css.nextButtons}>
        <PaginationButton
          text=">"
          iconId="chevron-right"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
        <PaginationButton
          text=">>"
          iconId="chevron-double-right"
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default PaginationBlock;
