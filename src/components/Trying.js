import UserContext from "../../util/UserContext";
import { useContext } from "react";


const Trying = () => {
    const {user, setUser} = useContext(UserContext);
    return (
        
        <div className="bg-purple-300 m-5 border border-purple-800 rounded-md">
        <input className="border border-purple-950 m-2 p-2" value={user.name} onChange={ (e) => setUser({...user, name : e.target.value})}/>
        <input className="border border-purple-950 m-2 p-2" value={user.email} onChange={ (e) => setUser({...user, email : e.target.value})}/>
        </div>
    )
}

export default Trying;