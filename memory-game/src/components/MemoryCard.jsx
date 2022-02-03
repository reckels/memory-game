import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
    constructor() {
        super();
        this.state = {isFlipped: false,};
    }
    clickHandler = () => {
        this.setState(previousState => {
            return{
                isFlipped: !previousState.isFlipped,
            }
        });
    }
    render(){
        let memoryCardInnerClass = "MemoryCardInner";
        if (this.state.isFlipped) {
            memoryCardInnerClass = "MemoryCardInner Flipped";
        }
        return(
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="logo" />
                    </div>
                    <div className="MemoryCardFront">
                        Δ
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;