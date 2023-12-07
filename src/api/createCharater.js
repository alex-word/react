import api from './request.js';
export const createCharacter = (userId, data) => {
    return api.post(
        '/character/create',
        {
            user_id: userId,
            ...data
        },
        {
            showLoading: true
        }
    );
};

export const createOrEdit = (userId, character_id, data) => {
    return api.post(
        '/character/createOrEdit',
        {
            user_id: userId,
            character_id,
            ...data
        },
        {
            showLoading: true
        }
    );
};

export const uploadAvatarImage = (user_id, file) => {
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('img', file);
    console.log(formData, 'formData--');
    return api.post(
        '/character/uploadAvatar',
        { user_id, img: file },
        {
            showLoading: true,
            headers: {
                Accept: '*/*',
                'Content-type': 'multipart/form-data'
            }
        }
    );
};

export const getTagList = () => {
    return api.get('/tags/list');
};

export const getListAvailableList = () => {
    return api.get('/tags/listAvailableTags');
};

export const getVoiceList = () => {
    return api.get('/character/listVoices');
};

export const generateMsgs = (data, onProgress) => {
    return api.post('/character/generatMsgs', data, {
        onDownloadProgress(res) {
            const { response } = res.event?.target;
            //console.log("进度",response)
            onProgress(response);
            //console.log("进度", JSON.parse(response));
        },
        showLoading: true
    });
};

export const generateUserDialogs = (data, onProgress) => {
    return api.post('/character/generatUserDialogs', data, {
        onDownloadProgress(res) {
            const { response } = res.event?.target;
            //console.log("进度",response)
            onProgress(response);
            //console.log("进度", JSON.parse(response));
        },
        showLoading: true
    });
};

export const getProfile = (user_id, character_id, showLoading = true) => {
    //user_id	number
    //id	number
    return api.post(
        '/character/getProfile',
        {
            user_id,
            character_id
        },
        {
            showLoading: showLoading
        }
    );
};

export const newCreateAvatar = (userId, data) => {
    return api.post('/character/new/createAvatar', {
        user_id: userId,
        data: data || ''
    });
};

export const createAvatar = (userId, data) => {
    return api.post('/character/createAvatar', {
        user_id: userId,
        data: data || ''
    });
};

export const getCharactersByTag = (userId, tag) => {
    return api.post('/character/getCharactersByTag', {
        user_id: userId,
        tag,
        limit: 2
    });
};

export const createChat = (userId, characterId) => {
    return api.post(
        '/character/createChat',
        {
            user_id: userId,
            character_id: characterId
        },
        {
            showLoading: true
        }
    );
};

export const searchCharacter = (userId, name) => {
    return api.post(
        '/character/search',
        {
            user_id: userId,
            index_name: name
        },
        {
            showLoading: true
        }
    );
};

/**
 * @description k should be base64 string
 * @param {*} k
 * @returns
 */
export const getSharedDialogs = k => {
    return api.get('/character/getSharedDialogs', {
        k
    });
};
