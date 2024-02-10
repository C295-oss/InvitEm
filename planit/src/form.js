import { useForm } from "react-hook-form";
import { useRef } from 'react';
import "./App.css";
import emailjs from 'emailjs-com';

export default function Multiple({ addFormData  })
{
    const {
        register,
        handleSubmit
    } = useForm();
    const form = useRef();

    const onSubmit = (data) => {
        addFormData(data); // Call the addFormData function passed from the parent component
        sendEmail(); // Call sendEmail function to send email
    };

    const sendEmail = () => {
        emailjs.sendForm('service_cn4108g', 'template_fiwkzrt', form.current, 'qU0bzCgf6xZOQiuOV', { to_email: 'tbits2@uic.edu' })
            .then((result) => {
                console.log(result.text);
                console.log("message sent!")
            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });
    };

    return (
        <div className="flex justify-center items-center">
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            
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
