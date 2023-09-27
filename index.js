const discord = require('freeze-selfbot');
const client = new discord.Client();
const config = require("./config")
const console = require("./utils/logger")
const TOKEN = process.env.Token

module.exports = client;
TOKEN ? client.login(TOKEN) : console.exit("Thiếu token");
config.mode ? require(`./presences/${config.mode}`) : console.exit('Đã xảy ra lỗi!');
console.logger.info(`


██████╗ ██╗  ██╗ █████╗ ███╗   ██╗██╗  ██╗██╗  ██╗ █████╗ 
██╔══██╗██║  ██║██╔══██╗████╗  ██║██║ ██╔╝██║  ██║██╔══██╗
██████╔╝███████║███████║██╔██╗ ██║█████╔╝ ███████║███████║
██╔═══╝ ██╔══██║██╔══██║██║╚██╗██║██╔═██╗ ██╔══██║██╔══██║
██║     ██║  ██║██║  ██║██║ ╚████║██║  ██╗██║  ██║██║  ██║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
                                                          
                                                          
`
)
