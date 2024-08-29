import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const SingUp = () => {
    const { createSingUp } = useContext(AuthContext);
    const handleSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = { email, password };
        console.log(newUser);

        createSingUp(email, password)
            .then(result => {
                console.log(result.user);
                // new user has been create
                const createAt = result.user.metadata?.creationTime;
                const user ={email,createAt: createAt};
                fetch(' https://naeem-56-52ga6vvut-ailas-projects-e6327532.vercel.app/user',{
                    method:'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                })

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SingUp now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSingUp} className="card-body">
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
                            <button className="btn btn-primary">SingUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;