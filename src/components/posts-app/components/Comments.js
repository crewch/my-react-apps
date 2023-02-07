function Comments({ id, name, email, body }) {
	return (
		<div style={{ margin: '7px', padding: '5px' }}>
			<h5>
				{id}. {email}
			</h5>
			<p>{body}</p>
		</div>
	)
}

export default Comments
