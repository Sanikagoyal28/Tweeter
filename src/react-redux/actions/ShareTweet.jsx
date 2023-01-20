import BaseUrl from "./BaseUrl"

export const ShareTweet = (data, socket) => {
    const accessToken = localStorage.getItem("access token")
    const config = {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    }
    return async function (dispatch) {
        dispatch({
            type:"SHARE_TWEET"
        })
        await BaseUrl.post("/c/share",data, config)
            .then((Res) => {
                console.log(Res)
                socket.emit("new message", Res.data.msg)
                dispatch({
                    type: "SHARE_TWEET_YES",
                    payload: Res
                })
            })
            .catch((err) => {
                dispatch({
                    type: "SHARE_TWEET_NO",
                    payload: err
                })
            })
    }
}