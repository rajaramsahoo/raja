import { Link } from "react-router-dom";
function Users(props) {
    return (
        <>
            <center>
                {props.users.map(user => {
                    return (
                        <>
                            <h5>{user.login}</h5>
                            <Link to={`/user/${user.login}`}>profile</Link>

                            <hr />
                        </>
                    )
                })}
            </center>
        </>
    )
}
export default Users;
