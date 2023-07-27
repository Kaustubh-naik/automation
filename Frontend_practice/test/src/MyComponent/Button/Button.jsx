import { Button as MuiButton } from "@mui/material"
const Button = ({name,...props})=>{
    return <MuiButton {...props}>{name}</MuiButton>
}
export default Button

