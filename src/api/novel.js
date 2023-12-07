import api from './request.js';

export const getListAvailableTags = () => {
    return api.get('/novel/listAvailableTags', {
        limit: 100,
        page_no: 0
    });
};
export const getListTags = () => {
    return api.get('/novel/listTags', {
        limit: 100,
        page_no: 0
    });
};
// 获取小说列表
export const getNovelsByTag = (user_id, tag, limit, page_no) => {
    return api.post('/novel/getNovelsByTag', {
        user_id: user_id,
        tag,
        limit,
        page_no
    });
};
// 最近获取小说
export const getRecentlyNovelSessions = (user_id, limit, page_no) => {
    return api.post('/novel/getRecentlyNovelSessions', {
        user_id: user_id,
        limit,
        page_no
    });
};
// 小说生成相关 创建小说会话
export const createSessionNovel = (user_id, novel_id) => {
    return api.post('/novel/createSession', {
        user_id: user_id,
        novel_id
    });
};
// 从首页进入有内容
export const continueNovel = (user_id, novel_id, session_id) => {
    return api.post('/novel/continue', {
        user_id: user_id,
        limit: 100,
        page_no: 1,
        novel_id,
        session_id
    });
};
// 获取小说历史
export const getHistoryByNovel = (user_id, novel_id) => {
    return api.post('/novel/getHistoryByNovel', {
        user_id: user_id,
        novel_id
    });
};
// 提交小说
export const commitContent = (user_id, novel_id, uniq_id, content) => {
    return api.post('/novel/commitContent', {
        user_id: user_id,
        novel_id,
        uniq_id,
        content
    });
};
// 继续生成
export const generate = (user_id, novel_id, session_id) => {
    return api.post('/novel/generate', {
        user_id: user_id,
        limit: 100,
        page_no: 1,
        novel_id,
        session_id
    });
};
// 创建小说
export const novelCreateOrEdit = pay => {
    console.log(pay, 'pay---');
    return api.post('/novel/createOrEdit', {
        ...pay
    });
};

// 获取个人信息收藏或创建的小说

export const getCollectedNovels = user_id => {
    return api.post(
        '/user/getCollectedNovels',
        {
            user_id
        },
        {
            showLoading: true
        }
    );
};

export const getCreatedNovels = user_id => {
    return api.post(
        '/user/getCreatedNovels',
        {
            user_id
        },
        {
            showLoading: true
        }
    );
};

//获取评论相关的api
//获取小说角色明星详情
export const getRoleStarDetailNovel = novel_id => {
    return api.get('/novel/getRoleStarDetail', {
        novel_id
    });
};
//获取小说角色明星详情
export const getRoleStarCommentsNovel = novel_id => {
    return api.get('/novel/getRoleStarComments', {
        novel_id,
        limit: 100,
        page_no: 1
    });
};
//设定角色明星
export const setRoleStarNovel = novel_id => {
    return api.post('/novel/setRoleStar', {
        ...novel_id,
        limit: 100,
        page_no: 1
    });
};
//举报角色明星评论
export const reportRoleStarCommentNovel = novel_id => {
    return api.get('/novel/reportRoleStarComment', {
        novel_id,
        limit: 100,
        page_no: 1
    });
};
// 获取小说简介

export const getProfileNovel = pay => {
    return api.post('/novel/getProfile', {
        ...pay
    });
};
