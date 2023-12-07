import api from "./request";

export const guestLogin = (token) => {
  return api.post(
    "/guest/login",
    {
      client_token: token,
    },
    {
      unChanged: true,
    }
  );
};

export const guestChat = (guest_id, character_id) => {
  return api.post("/guest/chat", {
    guest_id,
    character_id,
  });
};

// export const guestChat=(guest_id,character_id,content)=>{
//     return api.post("/guest/guestChat",{
//         guest_id,
//         character_id,
//         content,
//     });
// }

export const guestGenerate = (guest_id, character_id, content,uniqId,onProgress) => {
  return api.post(
    "/guest/genChat",
    {
      guest_id,
      character_id,
      content,
    },
    {
      onDownloadProgress(res) {
        const {response} = res.event?.target;
        onProgress(response);
        //console.log("进度", JSON.parse(response));
      },
    }
  );
};

export const reGuestGenerate = (guest_id, character_id,_,uniqId,onProgress) => {
  return api.post(
    "/guest/reGenChat",
    {
      guest_id,
      character_id,
    },
    {
      onDownloadProgress(res) {
        const {response} = res.event?.target;
        onProgress(response);
        //console.log("进度", JSON.parse(response));
      },
    }
  );
};

export const getGuestLastDialog = (guest_id, character_id) => {
  return api.post("/guest/getLastDialog", {
    guest_id,
    character_id,
  });
};
