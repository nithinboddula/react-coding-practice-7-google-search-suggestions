// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, arrow} = props
  const {suggestion, id} = suggestionItem

  const onArrow = () => {
    arrow(id)
  }

  return (
    <li className="suggestion-container">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onArrow}
      />
    </li>
  )
}

export default SuggestionItem
