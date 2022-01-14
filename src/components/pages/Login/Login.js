import { useState } from "react"
import { LoginContainer, LoginTypes, LoginForms, UserButtons, CommonUser, AdminUser } from './styles'
import AdminForm from '../../layout/LoginForms/AdminForm'
import CommonForm from "../../layout/LoginForms/CommonForm"
// import { CheckCircleOutlined } from '@material-ui/icons';

const Login = () => {

    const [ activeForm, setActiveForm ] = useState('common')

    const handleUserButton = (e) => {
        setActiveForm(e.target.id)
    }

    return (
        <LoginContainer>
            <LoginTypes>
                {/* <img src="https://www.accessbankplc.com/App_Themes/AccessBankGroup/img/logo-main.png" alt="Access_Brand" height="50px" width="170px" /> */}
                <h1> WELCOME </h1>
                <p> choose your account type </p>
                <UserButtons>

                    <CommonUser 
                        id='common' 
                        onClick={handleUserButton} 
                        style={{backgroundColor: activeForm === 'common' ? 'var(--orange)' : "" }} 
                    > 
                        sign in as user 
                    </CommonUser>

                    <AdminUser 
                        id='admin' 
                        onClick={handleUserButton} 
                        style={{backgroundColor: activeForm === 'admin' ? 'var(--blue)' : "" }} 
                    > 
                        sign in as admin
                    </AdminUser>

                </UserButtons>
            </LoginTypes>

            <LoginForms>
                { activeForm === 'admin' &&  <AdminForm /> }
                { activeForm === 'common' &&  <CommonForm /> } 
            </LoginForms>
            
        </LoginContainer>
    )
}

export default Login
