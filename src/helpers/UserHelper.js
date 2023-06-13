module.exports.userAvatar = function (avatar) {
    return new Promise(function (resolve, reject) {
        if (avatar != "") {
            resolve(locals.user_avatar.path + avatar);
        } else {
            resolve(locals.user_avatar.default_path);
        }
    });
}


