import React from 'react';

class Searchbar extends React.Component {
    render(){
        return(
            <form>
                <button className="button-input">
                    Search
                </button>
                <input className="seach-input"/>

            </form>
        )
    }
}

export default Searchbar;