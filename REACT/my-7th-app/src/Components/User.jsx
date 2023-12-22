import { useParams } from "react-router-dom"
function User() {
    const urlData = useParams()

    return (
        <>
            <h1>{urlData.uname}</h1>
            <h1>{urlData.id}</h1>
            <h1>{urlData.uname}</h1>
            <h1>{urlData.uname}</h1>

        </>
    )
}
export default User