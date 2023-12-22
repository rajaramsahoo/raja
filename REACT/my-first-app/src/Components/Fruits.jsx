const Fruits = (props) =>{
    return (
       <>
        {
            props.f.map(ele=>{
                return(
                    <h1>kauta kahibu kaha <p>{ele}</p></h1>
                )
            })
        }
       </>
    )
}
export default Fruits