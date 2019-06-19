const state={
    nm : '北京',
    id : 1
};

const actions = {

};

const mutations={
    CITY_INFO(state,payload){
        state.id=payload.id;
        state.nm=payload.nm;
    }
};


export default {
    namespaced : true,
    state,
    actions,
    mutations
}