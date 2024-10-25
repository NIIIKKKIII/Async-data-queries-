import { RecoilRoot, useRecoilValue, } from "recoil";
import { all, totalNotificationSelector } from "./Atoms";


function App(){
return <div>
  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
</div>
}

function MainApp(){
  const things  = useRecoilValue(all)
  const ALLDATA = useRecoilValue(totalNotificationSelector);
return <div>
  <button>Home {things.Home}</button>
  <button>Jobs{things.Jobs}</button>
  <button>Network{things.Network}</button>
  <button>Notifications{things.Notifications}</button>




  <button>total{ALLDATA}</button>
</div>
}

export default App;
