import { useState, useEffect } from "react"
import axios from "axios"
import "../App.css"

function EffectAPI() {
    const [todos, setTodos] = useState([])
    const [flag, setFlag] = useState(false)
    const [filterTodos, setfilterTodos] = useState([])

    const url = "https://jsonplaceholder.typicode.com/todos"
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.log(response.data)
                setTodos(response.data)
                setfilterTodos(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    function HandleCompleted() {
        setFlag(!flag)
        let filtercompleted = todos.filter(ele =>  ele.completed == flag )
        setfilterTodos(filtercompleted)
    }
    return (
        <center>
            <button onClick={HandleCompleted}>Filter</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Completed</th>

                    </tr>
                </thead>
                <tbody>
                    {filterTodos.map((ele) => {
                        return (
                            <tr>
                                <td>{ele.id}</td>
                                <td>{ele.userId}</td>
                                <td>{ele.title}</td>
                                <td>{ele.completed ? "true" : "false"}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>


        </center>

    )

}
export default EffectAPI