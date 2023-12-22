import Search from "./Search"
import Users from "./Users"
function Home(props) {
    return (
        <>
            <center>
                <Search  SearchUser = {props.SearchUser}  clearUser={props.clearUser}/>
                <Users users={props.users} />
                

            </center>
        </>
    )
}
export default Home