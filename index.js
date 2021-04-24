const rpc = require("discord-rpc");
const client = new rpc.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "We do a little gaming",                 
            assets: {
                // large_image: "icon",            // Logo without the background
                large_image: "logogo",       // Logo with background
                large_text: "ReefRaid"
            },
            buttons: [
                {
                label: "Join official server",
                url: "https://discord.gg/VdgQTgs"
                 }, 
                {
                    label: "Add to your server",
                    url: "https://invite.reefraid.com"
                }
            ]
        }
    })
    console.log("[RPC] We are live, baby!")
})

client.login({
    clientId: "623545336484462593"
});