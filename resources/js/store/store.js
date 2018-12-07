export default {
    state:{
        welcomeMessage: 'Hey, welcome to my first SPA!'
    },
    getters:{
        welcome: (state) => {
            return state.welcomeMessage;
        }
    },
    mutation:{},
    actions:{}
}