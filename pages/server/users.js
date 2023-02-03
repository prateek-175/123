const UserPage = (props) => {
  console.log(props);
    return (
      <div>USer (ssr)
        {
          props.data.users.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          )) 
        }
      </div>
    )
  }

  export const getServerSideProps = async () => {
    console.log("task in server");
    const data = await (await fetch('https://dummyjson.com/users')).json()
    return{
      props: {
        data,
      }
    }
  };
  
  export default UserPage