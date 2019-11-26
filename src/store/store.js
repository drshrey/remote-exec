import { observable } from "mobx"

var appState = observable({
    user: null
})

export default appState