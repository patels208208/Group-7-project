
const UserDetails = ({ user }) => {
  const firstName = user.firstName;
  const surname = user.surname;
  const email = user.email;
 

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center text-briny-600">
        {/* {firstName} {surname} */}
      </h2>
      {/* <p className="text-lg text-center text-briny-600">{email}</p> */}
      
    </div>
  );

};

export default UserDetails;