import {firebase} from "./Firebase"
const SocialMediaOath = (provider)=>{
return firebase.auth().signInWithPopup(provider).then((res)=>{
    return res.user
}).catch((err)=>{
    return err
})
}
export default SocialMediaOath;