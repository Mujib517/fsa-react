function User(props) {
    const { user } = props;
    
    return <>
        <h3>{user.login}</h3>
        <h4>{user.type}</h4>
        <hr />
    </>
}

export default User;
