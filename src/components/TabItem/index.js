import './index.css'

const TabItem = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const classEl = isActive === true ? 'activeElement' : 'notActive'

  const ok = () => {
    changeState(id)
  }

  return (
    <li className="button-list">
      <button className={classEl} type="button" onClick={ok}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
