function Header({text, bgColor, textColor}) {
  
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
  }

   return (
    <header style={headerStyles}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
   )
 }
 
 export default Header

 Header.defaultProps = {

  text:"FEEDBACK APP",
  bgColor : "rgba(0,0,0,0.4)",
  textColor : "#ff6a95"
 
}