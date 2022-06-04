import { Component } from "react";

const styles = {
  bubblealert: {
    backgroundColor: '#E9725A',
    borderRadius: '15px',
    color: '#fff',
    padding: '2px 10px',
    fontSize: '0.9rem',
    widh: '20px',
    
  }
}

class BubbleAlert extends Component {
  render() {
    return(
      <span style={styles.bubblealert}>
        5
      </span>
    )
  }
}


export default BubbleAlert