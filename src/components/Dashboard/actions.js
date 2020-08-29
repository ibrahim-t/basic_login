const users = require("./Users.json")

export function doFetchData() {

    return ({ type: "LOAD_INITIAL_DATA", records: users.user })
}
