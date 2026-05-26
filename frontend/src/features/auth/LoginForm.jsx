import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginThunk, fetchMeThunk } from "./authThunk";
import FIELD_TYPE from "../../enums/fieldType";
import Form from "../../components/Form";

const LoginForm = () => {
  const loginStatus = useSelector((state) => state.auth.loginStatus);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fields = [
    {
      type: FIELD_TYPE.INPUT,
      name: "username",
      label: "Username",
      inputType: "text",
      required: true,
    },
    {
      type: FIELD_TYPE.INPUT,
      name: "password",
      label: "Password",
      inputType: "password",
      required: true,
    },
  ];

  const onFormSubmit = async (data) => {
    try {
      const { access } = await dispatch(loginThunk(data)).unwrap();
      await dispatch(fetchMeThunk(access)).unwrap();

      navigate("/");
    } catch {
      console.error("Login failed (no navigate applied)");
    }
  };

  return (
    <div className="flex justify-center items-center h-[75vh]">
      <Form
        label="Login"
        fields={fields}
        onFormSubmit={onFormSubmit}
        submitLabel="Login"
        submitStatus={loginStatus}
      />
    </div>
  );
};

export default LoginForm;
