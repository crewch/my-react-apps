function CreatePostButton({ text, className }) {
	return (
		<button type='submit' className={className}>
			{text}
		</button>
	)
}

export default CreatePostButton
