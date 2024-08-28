import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    })
                    
            }
        });
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="flex justify-between">
                <div>
                    <h2 className="card-title">NAME : {name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn join-item">View</button>
                        <Link to={`/updatedCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item bg-orange-700">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;