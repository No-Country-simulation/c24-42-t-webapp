import { Form } from "@ui/Form";
import { FormData, signUpSchema, signUpUiSchema } from "./signUpSchema";
import { useState, FormEvent } from "react";
import { Typography } from "@mui/material";
import { CustomButton } from "@ui/CustomButton/CustomButton";
import { FormStyle } from "./SignUpStyles";
import { useNavigate } from "react-router";
import { useUserStore } from "@store/user.store";
import { useModalStore } from "@store/modal.store";


export default function SignUp() {
    const [data, setData] = useState<FormData>();
    const navigate = useNavigate();
    const getDashboardUrl = useUserStore(state => state.getUserDashboardURL);
    const redirectTo = useModalStore(state => state.modalData.redirect);

    const handleChange = ({data, errors}: {data: any, errors: any}) => {
        console.log(data, errors);
        if (!errors) setData(data);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const signup = true;
        if(signup){
            const dashboard = getDashboardUrl();
            const to = (redirectTo !== null && redirectTo !== undefined) ? redirectTo : dashboard;
            navigate(to);
        }
    }

    return (
        <>
            <form method="POST" style={FormStyle} onSubmit={handleSubmit}>
                <Form schema={signUpSchema} uiSchema={signUpUiSchema} data={data} onChange={handleChange}></Form>
                <CustomButton type="submit">
                    <Typography textTransform="none" >
                        Registrarse
                    </Typography>
                </CustomButton>
            </form>
        </>
    );
}