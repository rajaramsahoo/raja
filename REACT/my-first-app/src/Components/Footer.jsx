function Footer1(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Rajaram',
    lastName: 'Sahoo'
  };
  
  function Footer5(){
    return(
      <h1>
      Hello, {Footer1(user)}
    </h1>

    )
  }

   
  
  export default Footer5;