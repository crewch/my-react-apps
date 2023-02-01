import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from '../../AppPosts.module.css';
import { usePagination } from '../../hooks/usePagination';

function Pagination({ totalPages, setPage, page }) {
    let pagesArray = usePagination(totalPages);

    return (
        <div className={style.page__wrapper}>
            {pagesArray.map((p) => (
                <button
                    onClick={() => setPage(p)}
                    key={uuidv4()}
                    className={
                        p === page
                            ? [style.navBnt, style.page__current].join(' ')
                            : style.navBnt
                    }
                >
                    {p}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
