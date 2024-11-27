import { FriendsList } from "./FriendList"
import { Profile } from "./Profile"
import { Statistics } from "./Statistics"
import { TransactionHistory } from "./TransactionHistory"

function App(){
  return <div>
    <Profile/>
    <FriendsList/>
    <Statistics/>
    <TransactionHistory/>
  </div>
}

export default App