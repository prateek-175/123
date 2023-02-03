

const UserPage = (props) => {
  return (
    <div>user page (ssg)

{
          props.data.users.map((user) => (
            <li key={user.id}>{user.firstName}</li>
          )) 
        }
    </div>
  )
}

export default UserPage


export const getStaticProps = async () => {
    const data = await (await fetch('https://dummyjson.com/users')).json()
    return{
      props: {
        data,
      }
    }
}