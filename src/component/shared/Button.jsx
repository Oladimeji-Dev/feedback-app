function Button({type, version, children, isDisabled}) {
  return (
    <button type={type} disabled = {isDisabled} className= {`btn btn-${version}`}>
        {children}
    </button>
  )
}

export default Button

Button.defaultProps ={
    type : "button",
    version : "primary",
    isDisabled : false
}