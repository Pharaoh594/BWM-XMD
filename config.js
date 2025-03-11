const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8l3rFWbmJYERHLAoCIjZeQHBjHwoosJRbU+UFJ/z3DXR6p2N3ZraXpwqg8uQ5mXm+grLCBNmoBaOvoG7wGVLUHWlbIzAC41Oaogb0QAIpBCNgLDxaqqqu41rw9zhXLVaoNxY2axLc8py8OopbHPIW5/ILuPdAfYpyHP8CEHFXBk953zYO+pUT2bh8XYp+zm+1FVyUWrw6uFPL5O2F6r2Ae4cIcYPLTK/3qEANzG3UuhA3n6N/sfjcbGe0SiOtrXCqDSNmF4ZW0YZLS71pisYZh9VyyUw/SX/e2h7pN0enScKlGnrHFipT68biICIObXdQjHZF6BvyUn3SJzgrUWIlqKSYtp+eu268GZLtmoHl+hcNOleNMK7jBTGjD2vWtdPjupYOOZpw3ueI89Urlzu8q00CZbZx1vvaGjatr0lSGUzMVahr7JD1hdVAtz4Sd5t3rxz/z9y3xpwGs77ezvWcsaMrHnCTQG1k91xNuTGqmUpQrd2MzAvnc/Svw2Lc5+UQrgbjNSwc/XZzrSKwrLg0/Hy+lep+VEhEW/Ef6EN6an7FMp20jsFfmj5kzbm5dikUd9ezp772NxlfsG3dSMw23HtEMR1Bm++Rw8WYCeur7pPCTE2phdvxwttdlv3tfsct3rh8qGYvj46OqLUSMOLuPdCgDBPaQIqr8vFuOOwBmJzXKG4QfYwX7COZ9rEWrqOBXa5tdmqMmcy80lzsT1Q3UMJzjFVpx6sy+wJ6oG6qGBGCEhMTWjWtgwiBGSJg9MdDqa7pBhUVRTOcdOoLwkARB+yAl4a/k98ue0gJrOvfSkRBD6RNVTgIjGhzQj3wuCCo/GTIc6Im80N1oqryUFC7topnoQ0uEKGwqLtuRE5SWFng7n/2QImu9OmZrlOB64EUN4R65anOK5i8G+r9I4zj6lTSdVvGk+6AGjD68BpRisuMdN2cStjEe3xGk447GKUwJ+jeAwk64xh1eKCR/cvhdW9uxtA/n80kmMJhkXXT2lfl85cY8jCWxOQLl7DpF1FG0RcZRukXTowEJEBZkNMB6EbwjGt356fuSXLqvuUtvRInpbWdkQOznMbGMWKzhwOesqMGJe+TjWB8PNWb6ojKX+BCKPG3fNeEp8tsuap8Z7Zp5LfTtWwvH3CfdgKjr99X5KRKOjzJlSV97M5Ap1ZX518OGHH/9MD975l3FxJEIc4JGIHJ4pDJCjvT5+35MhcNQ9UzdZKp4LtG7zl7+jgYiBWc7WZvpXLT7KrxmeFtHKt9R9/w4a0K8NGbC2p2Mo/eyw9AwAjkNRvIO/vNCxXPa/nyuF2tovXEPFyyteqEM7dca7orzU7XRWGRy4JT3dyXBgdkLoxzME7IMdgQh5/v9yVzIMtjdJUV7fLSVXt65WOxvi8KA/XI2PSsKtae1ZNTIW5qaUD9ZLOZ+yuO8eavzYJT8ArNiBcvpWUVeP25tr4uFv1hbtMDdoVKns5mjXS79Y3x4n0DPDZQ/m3z42/ZfDorxeixSEvYKfQf2nz0OHvvfYD4tpl/4qOxzyDbwNs1rPvxpX2zufQkXwLVvY11pXCkqVhPJ8rFmu8HU3DvwlvnkKZVU4ARwI/MgB7IIaHq95T+IPi81ANFq9b1mkL6Hm6gdo+eReD+F7KVT59zCAAA"
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

