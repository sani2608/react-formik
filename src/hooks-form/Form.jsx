import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("firstname is requried"),
  lastName: yup.string().required("lastname requried"),
  email: yup.string().email("Invalid email format1").required("Required"),
  age: yup.number().required("age requried").positive().integer(),
  password: yup.string().min(4).max(15).required("required password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="First Name..."
            {...register("firstName", { required: true })}
          />
          <p>{errors.firstName?.message}</p>
          <input
            type="text"
            placeholder="Last Name..."
            {...register("lastName")}
          />
          <p> {errors.lastName?.message} </p>
          <input type="email" placeholder="Email..." {...register("email")} />
          <p> {errors.email?.message} </p>
          <input type="text" placeholder="Age..." {...register("age")} />
          <p> {errors.age?.message} </p>
          <input
            type="text"
            placeholder="password..."
            {...register("password")}
          />
          <p> {errors.password?.message} </p>
          <input
            type="text"
            placeholder="confirm Password..."
            {...register("confirmPassword")}
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
};

export default Form;
