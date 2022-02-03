import React from 'react';
import './MemoryCard.css';

class MemoryCard extends React.Component {
    render(){
        return(
            <div class="MemoryCard">
                <div class="MemoryCardInner">
                    <div class="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="logo" />
                    </div>
                    <div class="MemoryCardFront">
                        Δ
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;