import { useForm } from "react-hook-form";
import "./App.css";

// Based off of this article: https://www.freecodecamp.org/news/how-to-build-forms-in-react/

export default function Multiple({ onSubmit })
{
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    // const onSubmit = (data) => {
    //     console.log(data);
    // };

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div className="form-control">
                    <label>Name</label>
                    <input type="text" name="name" {...register("name")} />
                </div>
                
                <div className="form-control">
                    <label>Date</label>
                    <input type="text" name="date" {...register("date")} />
                </div>
                
                <div className="form-control">
                    <label>Location</label>
                    <input type="text" name="location" {...register("location")} />
                </div>

                <div className="form-control">
                    <label>Time</label>
                    <input type="text" name="time" {...register("time")} />
                </div>

                <div className="form-control">
                    <textarea name="description" {...register("description")} />
                </div>
                
                <div className="my-6 py-3 bg-blackText rounded hover:scale-110">
                    <label></label>
                    <button className="text-whiteBody font-bold" type="submit">Submit</button>
                </div>

            </form>
        </div>
    );


}
