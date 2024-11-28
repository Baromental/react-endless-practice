import { FriendsList } from "./FriendList/FriendList"
import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"


function App(){
  return <div>
    <Profile/>
    <FriendsList/>
    <Statistics/>
    <TransactionHistory/>
  </div>
}

export default App