import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl text-center font-extrabold">Add A coffee</h2>
        <form onSubmit={handleAddCoffee}>
            {/* form and quantity row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Coffee Name"
                            className="input input-bordered w-full"
                            name="name" id="" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available  Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Available  Quantity"
                            className="input input-bordered w-full"
                            name="quantity" id="" />
                    </label>
                </div>
            </div>
            {/* form supplier and taste row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="supplier Name"
                            className="input input-bordered w-full"
                            name="supplier" id="" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="taste"
                            className="input input-bordered w-full"
                            name="taste" id="" />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="category"
                            className="input input-bordered w-full"
                            name="category" id="" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="details"
                            className="input input-bordered w-full"
                            name="details" id="" />
                    </label>
                </div>
            </div>
            {/* form photo row */}
            <div className="md:flex">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="photo url"
                            className="input input-bordered w-full"
                            name="photo" id="" />
                    </label>
                </div>
            </div>
            <button className="btn btn-block bg-green-600 mt-5">ADD COFFEE</button>
        </form>
    </div>
    );
};

export default AddCoffee;