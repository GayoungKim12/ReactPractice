// React Component!
// Follow <-> following
function FollowButton() {
  // following의 초기값: false, setFollowing: following의 값을 변경하는 함수
  const [following, setFollowing] = React.useState(false);

  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    frontWeight: "bold",
    cursor: "pointer",
  };

  const followBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "black",
    color: "white",
  };

  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "white",
    color: "black",
    border: "1px solid #cfd9de"
  };

  return React.createElement("div", 
  {
    onClick: () => setFollowing(!following),
    style: following ? followingBtnStyle : followBtnStyle,
  }, 
  following ? "Following" : "Follow");
}

const domContainer = document.querySelector('#follow_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(FollowButton));