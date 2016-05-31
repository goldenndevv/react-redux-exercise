import * as React from 'react';

// This component should stay "dumb"
const ExerciseOne = React.createClass({ // eslint-disable-line react/prefer-stateless-function
    propTypes: {
        name: React.PropTypes.string.isRequired,
        buttonClicked: React.PropTypes.func.isRequired,
    },

    render() {
        const { name, buttonClicked } = this.props;
        return (
            <div>
                <h1>Exercise 1</h1>
                <div style={{ marginBottom: '10px' }}><i>Implement the action for this Redux cycle</i></div>
                <div style={{ marginBottom: '5px' }}>{name} just got clicked!</div>
                <div>
                    <button name="Button 1" onClick={buttonClicked}>Button 1</button>
                    <button name="Button 2" onClick={buttonClicked}>Button 2</button>
                </div>
            </div>
        );
    },
});

export default ExerciseOne;
