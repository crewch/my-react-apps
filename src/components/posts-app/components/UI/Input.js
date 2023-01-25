function Input({ text, func, className, value }) {
    return (
        <input
            placeholder={text}
            type="text"
            className={className}
            onChange={func}
            value={value}
        ></input>
    );
}

export default Input;
