import api from './request.js';

export const getCharactersChatRecently = userId => {
    return api.post('/character/getCharactersChatRecently', {
        user_id: userId,
        limit: 100,
        page_no: 0
    });
};

export const getChatHistoryById = (userId, id) => {
    return api.post('/character/getChatHistory', {
        user_id: userId,
        character_id: id
    });
};

export const getCharactersByTag = (userId, tag) => {
    return api.post('/character/getCharactersByTag', {
        user_id: userId,
        tag
    });
};

export const saveChat = (userId, id, context) => {
    return api.post('/character/saveChat', {
        user_id: userId,
        character_id: id,
        context
    });
};

export const updateChat = (userId, id, context) => {
    return api.post('/character/updateChat', {
        user_id: userId,
        character_id: id,
        context
    });
};

export const delChatsFromIdx = (userId, sessionId, idx) => {
    return api.post('/character/delChatsFromIdx', {
        user_id: userId,
        session_id: sessionId,
        idx
    });
};

export const delChat = (userId, character_id) => {
    return api.post('/character/delChat', {
        user_id: userId,
        character_id
    });
};

export const getContinueChat = (userId, characterId, session_id) => {
    return api.post('/character/continueChat', {
        user_id: userId,
        character_id: characterId,
        session_id
    });
};

export const createChatSession = (userId, characterId) => {
    return api.post('/character/createChat', {
        user_id: userId,
        character_id: characterId
    });
};

export const generateChat = (userId, sessionId, content, uniqId, onProgress) => {
    return api.post(
        '/character/genChat',
        {
            user_id: userId,
            session_id: sessionId,
            content,
            uniqId: uniqId
        },
        {
            onDownloadProgress(res) {
                const {response} = res.event?.target;
                window.uniqIds = [];
                window.globalVariable = 0;
                //console.log("进度",response)
                onProgress(response);
                //console.log("进度", JSON.parse(response));
            }
        }
    );
};

export const reGenerateChat = (userId, sessionId, content, uniqId, onProgress) => {
    return api.post(
        '/character/reGenChat',
        {
            user_id: userId,
            session_id: sessionId,
            content
        },
        {
            onDownloadProgress(res) {
                const {response} = res.event?.target;
                //  console.log("进度",response)
                onProgress(response);
                //  console.log("进度", JSON.parse(response));
            }
        }
    );
};

export const userChat = (userId, sessionId, content) => {
    return api.post('/character/userChat', {
        user_id: userId,
        session_id: sessionId,
        content
    });
};
export const setStar = (userId, sessionId, content, star) => {
    return api.post('/character/setStar', {
        user_id: userId,
        session_id: sessionId,

        content,
        star
    });
};

export const getLastDialog = (userId, character_id, session_id) => {
    return api.post('/character/getLastDialog', {
        user_id: userId,
        character_id,
        session_id
    });
};

//发表评论和打星
export const setRoleStar = (userId, character_id, star_count, comment) => {
    return api.post(
        '/character/setRoleStar',
        {
            user_id: userId,
            character_id,
            star_count,
            comment
        },
        {
            showLoading: true
        }
    );
};

//获取评星
export const getRoleStarDetail = character_id => {
    return api.get('/character/getRoleStarDetail', {
        character_id
    });
};

//获取评论
export const getRoleStarComments = character_id => {
    return api.get('/character/getRoleStarComments', {
        character_id,
        limit: 100,
        page_no: 0
    });
};

//删除角色
export const deleteCharacter = (userId, character_id) => {
    return api.post(
        '/character/delete',
        {
            user_id: userId,
            character_id
        },
        {
            showLoading: true
        }
    );
};

//举报评论
export const reportRoleStarComment = (user_id, id) => {
    return api.post(
        '/character/reportRoleStarComment',
        {
            user_id,
            id
        },
        {
            showLoading: true
        }
    );
};

//轮询通过ID生成图片或GIF
export const genImageOrGifs = (user_id, create_id) => {
    return api.post('/character/getImageOrGif', {
        user_id,
        create_id
    });
};

export const newGenImageWithChat = (user_id, session_id, idx) => {
    return api.post('/character/new/genImage ', {
        user_id,
        session_id,
        idx
    });
};

//聊天生成图片ID
export const genImageWithChat = (user_id, session_id, idx) => {
    return api.post('/character/genImage ', {
        user_id,
        session_id,
        idx
    });
};

export const newGenGifWithChat = (user_id, session_id, idx) => {
    return api.post('/character/new/genGif ', {
        user_id,
        session_id,
        idx
    });
};

//聊天生成GIFID
export const genGifWithChat = (user_id, session_id, idx) => {
    return api.post('/character/genGif ', {
        user_id,
        session_id,
        idx
    });
};

//regenerate 聊天后，用户重新选择聊天
export const selectChatDialog = (userId, sessionId, content) => {
    return api.post('/character/replaceChatDialog', {
        user_id: userId,
        session_id: sessionId,
        content
    });
};

//点击播放语音
export const generateAudio = (userId, sessionId, idx, uniqId) => {
    return api.post('/character/generateAudio', {
        user_id: userId,
        session_id: sessionId,
        idx,
        uniqId
    });
};
