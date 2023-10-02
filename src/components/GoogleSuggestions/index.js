import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  arrow = uniqueId => {
    const {suggestionsList} = this.props
    const requiredItem = suggestionsList.filter(
      eachItem => eachItem.id === uniqueId,
    )

    this.setState({searchInput: requiredItem.suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem => {
      const suggestionInLowerCase = eachItem.suggestion.toLowerCase()
      return suggestionInLowerCase.includes(searchInput.toLowerCase())
    })

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul>
            {searchResults.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                suggestionItem={eachItem}
                arrow={this.arrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
