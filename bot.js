const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'
//Dating Gamers Bot By Luca Changretta
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`by Floki | %help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('') 
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('╚[═══════════════════════]╝')
  console.log(' Bot Is Online By Luca Changretta')
  console.log('╚[═══════════════════════]╝')
  console.log('')
  console.log('')
});


	



client.on("message", message => {
	var prefix = "*&";

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : sent to`); 
 message.delete(); 
};     
});





























  
  
  

 




 
 














 
 
 












client.login(process.env.BOT_TOKEN);
