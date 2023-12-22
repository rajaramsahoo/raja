function Greeting(props){//pass the props as a parameter bt it was empty object.WE use props for re useable purposes
    console.log(props)
    return(
        <>
        <h1>Hello Rajaram</h1>
        <h1>ke  {props.name1} kauthi </h1>
        <h1>{props.name2} bhai juhar</h1>
        </>
        
    )
}
export default Greeting