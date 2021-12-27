function emailGenerator() {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    string = string + '@gmail.com';
    return string
}

exports.email = emailGenerator
