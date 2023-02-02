function Input({ text, func, className, value, type }) {
    return (
        <input
            placeholder={text}
            type={type}
            className={className}
            onChange={func}
            value={value}
        ></input>
    );
}

export default Input;
