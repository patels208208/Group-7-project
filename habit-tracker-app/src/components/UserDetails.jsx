
const UserDetails = ({ user }) => {
  const fname = user.first_name;
  const lname = user.surname;
  const email = user.email;
 

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center text-briny-600">
        {fname} {lname}
      </h2>
      <p className="text-lg text-center text-briny-600">{email}</p>
      
    </div>
  );

};

export default UserDetails;