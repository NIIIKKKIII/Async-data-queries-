import { atom, selector} from "recoil";
import axios from "axios"

export const all = atom({
    key: "allAtom",
    default: selector({
    key: "Allselector",
    get: async ()=>{
        const res = axios.get("http://localhost:3000/N")
        return res.data;
    }
    })
});


export hey = 

// Above code explaination = A atom cannot have a asynchronous data as a default value in it
// However a selector can have a asynchronous default value through which we can get the real time data(from the backend) as a default data
//which we failed to show in the previous code base of atom and selectors 



export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
    const allNotifications = get (all);
    return allNotifications.Home +
    allNotifications. Jobs +
    allNotifications. Network+ 
    allNotifications.Notifications
}
})