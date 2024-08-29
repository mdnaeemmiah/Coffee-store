import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const SingIn = () => {
    const {singInUSer} = useContext(AuthContext);
    const handleSingIn =e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newLogin = {email,password};
        console.log(newLogin);
        singInUSer(email,password)
        .then(result=>{
            console.log(result.user);
            const user ={
                email,
                lastLoggedAt: result.user?.metadata?.lastSingInTime
            }
            // update last logged at in the database
            fetch(` https://naeem-56-52ga6vvut-ailas-projects-e6327532.vercel.app/user`,{
                method: 'PATCH',
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        })
        .catch(error=>{
            console.log(error);
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                   
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSingIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingIn;