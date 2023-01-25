function Select({ setSelectedSort, className }) {
    return (
        <select
            className={className}
            defaultValue={'default'}
            onChange={(e) => setSelectedSort(e.target.value)}
        >
            <option value="default" disabled>
                Сортировка
            </option>
            <option value="id">По номеру</option>
            <option value="title">По названию</option>
            <option value="discription">По описанию</option>
        </select>
    );
}

export default Select;
