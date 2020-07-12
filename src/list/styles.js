const styles = theme => ({
  root: {
    backgroundColor: '#4b4276;',
    height: '100vh',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black',
    margin:'0'
    
  },
  listItem: {
    cursor: 'pointer'
  },
  newChatBtn: {
    borderRadius: '0px'
  },
  unreadMessage: {
    color: 'red',
    position: 'absolute',
    top: '0',
    right: '5px'
  }
});

export default styles;