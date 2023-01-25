import Select from './UI/Select';
import Input from './UI/Input';
import style from './PostFilter.module.css';

function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <Select
                setSelectedSort={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                className={style.sort}
            />
            <Input
                className={style.searchInput}
                text="Поиск"
                func={(e) => setFilter({ ...filter, string: e.target.value })}
                value={filter.string}
            />
        </div>
    );
}

export default PostFilter;
