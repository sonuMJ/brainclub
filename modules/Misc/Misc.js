module.exports = {
    RandomIdGen : function(){
        var randomID = "U_"+ Math.random().toString(36).substring(2, 8) +"-"+ Math.random().toString(36).substring(2, 15);
        return randomID;
    },
    RandomNewsIdGen : function(){
        var randomID = Math.random().toString(36).substring(2, 8) +"-"+ Math.random().toString(36).substring(2, 15);
        return randomID;
    },
    idGenerator : function(prefix,limit) {
        var text = prefix;
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < limit; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}