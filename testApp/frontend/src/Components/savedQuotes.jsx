import { Link } from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { AppContext } from "Provider/AppContext"

const SaveBtn = ({ btnName, link, click }) => {
  return (
    <MyBtn to={link} id='save-btn' onClick={click}>
      {btnName}
    </MyBtn>
  )
}

export default SaveBtn

const MyBtn = styled(Link)`
  color: black;
`