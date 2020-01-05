import React, {Component} from 'react';
import '../../styles/components/read-more.css';

const ELLIPSES = '…';
const SHOW_LESS_TEXT = 'Show Less';
const SHOW_MORE_TEXT = 'Read More...';

export default class ReadMore extends Component {

  static defaultProps = {
    numberOfLines: 2,
    lineHeight: 1,
    readMoreCharacterLimit: 180,
    showLessButton: false
  }

  state = { 
    showingAll: false
  }

  componentDidMount() {
    this.props.onContentChange();
  }
  
  toggleReadMore = () => {
    this.setState({
      showingAll: !this.state.showingAll
    });
  }

  _getReadMoreParts = ({text, numberOfLines, readMoreCharacterLimit}) => {
      let teaserText;
      let remainingText;
      let remainingWordsArray = [];

      if (text) {
          const teaserWordsArray = text.split(' ');

          while (teaserWordsArray.join(' ').length > readMoreCharacterLimit ) {
              remainingWordsArray.unshift(teaserWordsArray.pop());
          }

          teaserText = teaserWordsArray.join(' ');

          if (remainingWordsArray.length > 0) {
              remainingText = remainingWordsArray.join(' ');
          }
      }

      return {
          teaserText,
          remainingText
      };
  };

  getText = ({showingAll, text, readMoreCharacterLimit, numberOfLines}) => {
    let {
      teaserText,
      remainingText
     } = this._getReadMoreParts({text, numberOfLines, readMoreCharacterLimit});

    if (!showingAll && text.length > readMoreCharacterLimit) {
      return (
        <span>
          {teaserText.replace(/\s*$/, "")}
          <span className="read-more__text--remaining read-more__text--hide">
            {remainingText}
          </span>{ELLIPSES}
        </span>
      );
    }

    return (
      <span>
        {teaserText}
        <span className="read-more__text--remaining read-more__text--show">
          {remainingText}
        </span>
      </span>
    );
  }

  getActionButton = ({showingAll, showLessButton}) => {
    if (showingAll && !showLessButton) {
      return
    }

    let buttonText = showingAll ? SHOW_LESS_TEXT : SHOW_MORE_TEXT;

    return (
      <button 
        onClick={this.toggleReadMore}
        className="read-more__button"
        >
          {buttonText}
      </button>
    );
  }

  render () {
    let {
      text, 
      readMoreCharacterLimit, 
      showLessButton,
      onContentChange,
      numberOfLines,
      lineHeight
    } = this.props;

    console.log(numberOfLines, lineHeight, numberOfLines * lineHeight);
    let maxHeight = numberOfLines * lineHeight;
    let style = {
      lineHeight,
      maxHeight: `${maxHeight}em`
    }
    let {showingAll} = this.state;
    let textToDisplay = this.getText({showingAll, text, readMoreCharacterLimit, numberOfLines});
    let actionButton = this.getActionButton({showingAll, showLessButton});

    return (
      <div className="read-more" style={style}>
        {textToDisplay} {actionButton}
      </div>
    )
  };

};
