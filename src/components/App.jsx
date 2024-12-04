import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
import { FriendsList } from "./FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"

import user from "../assets/user.json"
import dataStatistics from "../assets/data.json"
import friends from "../assets/friends.json"
import transactions from "../assets/transactions.json"

function App(){
  return <div>
    <Profile user={user}/>
    <Statistics dataStatistics={dataStatistics}/>
    <FriendsList friends={friends}/>
    <TransactionHistory transactions={transactions}/>
  </div>
}

export default App

