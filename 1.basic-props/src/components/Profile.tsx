type ProfileCardProps = {
  name? : string;
  age: number;
  job?: string;
  address : string;
}

function Profile(props : ProfileCardProps) {

  const {name = "Anonymous", age, job, address} = props;

  return (

      <div className="card">
        <p>Name   : {name}</p>
        <p>Age    : {age}</p>
        <p>Adress : {address}</p>
        {props.job &&  <p>Job : {job}</p> }

    </div>
  );
}

export default Profile;
