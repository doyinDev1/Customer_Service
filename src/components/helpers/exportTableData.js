import { CloudDownload } from "@material-ui/icons"
import { CSVLink } from "react-csv"

export const exportTableAsCSVButton = (loading, exportFunc, filename) => {
    return (
        <button disabled={loading}>
            <CSVLink
                style={{pointerEvents: loading && "none"}}
                data={exportFunc} 
                filename={filename} 
                target="_blank">  
                    <CloudDownload style={{fontSize: "18px", marginRight: "5px"}} /> 
                    <span>Export as CSV</span> 
            </CSVLink>
        </button> 
    )
}

export const exportAssessedCandidates = (data) => {
    return (
        data?.map(candidate => {
            const { employee_id : EMPLOYEE_ID, name : NAME, email : EMAIL, grade : GRADE, gender : GENDER, location : LOCATION, division : DIVISION, last_login : LAST_LOGIN, login_attempt : TOTAL_NO_OF_LOGINS, final_assessment_attempt : TEST_ATTEMPTS, final_assessment_score : TEST_SCORE, final_assessment_status : STATUS} = candidate
                return (
                    { EMPLOYEE_ID, NAME, EMAIL, GRADE, GENDER, LOCATION, DIVISION, LAST_LOGIN, TOTAL_NO_OF_LOGINS, TEST_ATTEMPTS, TEST_SCORE, STATUS }
                )
        })
    )
}

export const exportCommonData = (data) => {
    return (
        data?.map(candidate => {
            const { 
                employee_id : EMPLOYEE_ID, 
                name : NAME, 
                email : EMAIL, 
                current_module: CURRENT_MODULE, 
                final_assessment_status : STATUS,
                grade : GRADE, 
                gender : GENDER, 
                location : LOCATION, 
                division : DIVISION, 
                last_login : LAST_LOGIN 
            } = candidate
                return (
                    { EMPLOYEE_ID, NAME, EMAIL, CURRENT_MODULE, STATUS, GRADE, GENDER, LOCATION, DIVISION, LAST_LOGIN }
                )
        })
    )
}

export const exportNotStarted = (data) => {
    return (
        data?.map(candidate => {
            const { employee_id : EMPLOYEE_ID, name : NAME, email : EMAIL, grade : GRADE, gender : GENDER, location : LOCATION, division : DIVISION } = candidate
                return (
                    { EMPLOYEE_ID, NAME, EMAIL, GRADE, GENDER, LOCATION, DIVISION }
                )
        })
    )
}