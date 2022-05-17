import styled from "styled-components"

export const ScForm = styled.div`
  margin: 20px auto;
  width: 300px;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`

export const ScFormScreen = styled.div`
  background-color: #fff;
  border-radius: 5px;
`

export const ScFormLabel = styled.label`
  align-text: center;
`

export const ScAppTitle = styled.div`
  text-align: center;
  color: #777;
`

export const ScFormForm = styled.form`
  text-align: center;
  padding: 25px;
`

export const ScControlGroup = styled.div`
  margin-bottom: 10px;
`

export const ScFormInput = styled.input`
  text-align: center;
  background-color: #ecf0f1;
  border: 2px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 200;
  padding: 10px 0;
  width: 100%;
  transition: border 0.5s;
  :focus {
    border: 2px solid #3498db;
    box-shadow: none;
  }
`

export const ScBtn = styled.button`
  border: 2px solid transparent;
  background: #02050ce0;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  //width: 250px;
  margin: 0 auto;
  :hover {
    background-color: #000000;
  }
`

export const ScFormLink = styled.a`
  font-size: 12px;
  color: #444;
  display: block;
  margin-top: 12px;
`
