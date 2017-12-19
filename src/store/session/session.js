export default {
    state: {
        username: '',
        token: ''
    },
    mutations: {
        addSession(state, session) {
            state.username = session.username
            state.token = session.token
        }
    },
    actions: {
        addSessionAsync({commit}, session) {
            // TODO: Add backend verification and token generation.
            session.token = 'faketoken' // Should be recieved from backend
            commit('addSession', session)
        }
    },
    getters: {
        session(state) {
            return {username: state.username, token: state.token}
        }
    }
}
