const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "^";


client.on('ready', () => {
client.user.setGame(`Trying To Develop This Bot To make it the Best ! :open_mouth: :fire:`,"https://www.twitch.tv/iDxolr")
});

// Welcome message

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find('name', 'welcome-bye');

  const millis = new Date().getTime() - member.user.createdAt.getTime();
  const now = new Date();
  const createdAt = millis / 1000 / 60 / 60 / 24;





  const embed = new Discord.RichEmbed()
  
  .setColor("black")
  .setDescription(`**You Have Joined Discord Since ${createdAt.toFixed(0)} Day**`)
  .setAuthor(member.user.tag, member.user.avatarURL);
  channel.sendEmbed(embed);


});









client.on('message', message => {

    if (message.author.bot) return;
  
    if (!message.content.startsWith(prefix)) return;
  
  
    let command = message.content.split(" ")[0];
  
    command = command.slice(prefix.length);
  
  
    let args = message.content.split(" ").slice(1);
  
  
  // -say
  
    if (command === "ssay") {
  
            message.delete()
  
      message.channel.sendMessage(args.join(" ")).catch(console.error);
  
    }
  
    
  
   
  
  
  if (command == "embed") {
  
      let say = new Discord.RichEmbed()
  
      .setDescription(args.join(" "))
  
      .setColor(0x23b2d6)
  
      message.channel.sendEmbed(say);
  
      message.delete();
  
    }
  
  
  
  });




client.on('message', message => {
    if (message.content === "^createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "-----ManagamentRoles-----", color: "#ffffff", permissions: [] })

message.channel.sendMessage('**Please Wait While Creating The Roles**')
}
});




client.on('message', function(message) {
  if(!message.channel.guild) return;
if(message.content ===  '^color 100') {
if(message.member.hasPermission('MANAGE_ROLES')) {
setInterval(function(){})
message.channel.send('Wait While I Can Make The Colors Please')
message.channel.send('** I Must Have ،"MANAGE_ROLES" ❌**')
}
}
});

client.on('message', message=>{
if (message.content ===  '%color 100'){
if(!message.channel.guild) return;
if (message.member.hasPermission('MANAGE_ROLES')){
setInterval(function(){})
  let count = 0;
  let ecount = 0;
for(let x = 1; x < 100; x++){
message.guild.createRole({name:x,
color: 'RANDOM'})
}
}
}
});





  client.on("message", (message) => {
 
    if (message.content.startsWith("^new")) {  
         const reason = message.content.split(" ").slice(1).join(" ");  
         if (!message.guild.roles.exists("name", "Helpers Team")) return message.channel.send(`You Need To Make Role   \`Helpers Team\` And You Must Give The Bot Administrator Prem So he Can Create the tickets `);
         if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
         message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
             let role = message.guild.roles.find("name", "Helpers Team");
             let role2 = message.guild.roles.find("name", "@everyone");
             c.overwritePermissions(role, {
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
             });  
             c.overwritePermissions(role2, {
                 SEND_MESSAGES: false,
                 READ_MESSAGES: false
             });
             c.overwritePermissions(message.author, {
                 SEND_MESSAGES: true,
                 READ_MESSAGES: true
             });
             message.channel.send(`:white_check_mark: Your Ticket has Been Created, #${c.name}.`);
             const embed = new Discord.RichEmbed()
                 .setColor(0xCF40FA)
                 .addField(`Hey ${message.author.username}!`, `:white_check_mark:  Your Ticket has Been Created, `)
                 .setTimestamp();
             c.send({
                 embed: embed
             });
         }).catch(console.error);
     }
  
  
   if (message.content.startsWith("&close")) {
         if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
  
        message.channel.send(`Are You Sure That you want to close ticket? ^yes`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '^yes', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })  
                    .then((collected) => {
                        message.channel.delete();
                    })  
                    .catch(() => {
                        m.edit('The CountDown of Closing the Ticket has been finished, The Ticket Still open').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }
  
 });






client.on('message', async message => {
let args = message.content.split(" ");
if(message.content.startsWith(prefix + "mute")) {
 if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**You Dont Have Premissons To mute Someone `Manage Roles`**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('** i Dont Have Premisson `Manage Roles` To be able to use this command**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 let mention = message.mentions.members.first();
 if(!mention) return message.reply('**Metion The User That You Are Trying To Mute Him !**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**This User Had A Hight Role More Then me So i cant Mute Him**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });
 if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**This User Had A Hight Role More Then me So i cant Mute Him**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });
 if(mention.id === message.author.id) return message.reply('**You Cant Mute YourSelf**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 let duration = args[2];
 if(!duration) return message.reply('**Please Choose The Time That Will Be After The User Will Be unMuted**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(isNaN(duration)) return message.reply('**Please Choose a Right Time**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 let reason = message.content.split(" ").slice(3).join(" ");
 if(!reason) reason = "undefined";

 let thisEmbed = new Discord.RichEmbed()
 .setAuthor(mention.user.username, mention.user.avatarURL)
 .setTitle('You Have Been Muted By Staff User')
 .setThumbnail(mention.user.avatarURL)
 .addField('# - The Server',message.guild.name,true)
 .addField('# - You Have been Muted By',message.author,true)
 .addField('# - Reason',reason)

 let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
 if(!role) try {
   message.guild.createRole({
     name: "Muted",
     permissions: 0
   }).then(r => {
     message.guild.channels.forEach(c => {
       c.overwritePermissions(r , {
         SEND_MESSAGES: false,
         READ_MESSAGES_HISTORY: false,
         ADD_REACTIONS: false
       });
     });
   });
 } catch(e) {
   console.log(e.stack);
 }
 mention.addRole(role).then(() => {  // حقوق الفا كومينتي
   mention.send(thisEmbed);
   message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
   mention.setMute(true);
 });
 setTimeout(() => {
   if(duration === 0) return;
   mention.setMute(false);
   mention.removeRole(role);
   message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // حقوق الفا كومينتي
 },duration * 60000);
} else if(message.content.startsWith(prefix + "unmute")) {
 let mention = message.mentions.members.first();
 let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
 if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**You Dont Have premission `Manage Roles`**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**I Need Premission `Manage Roles` To Be able to use this command**').then(msg => {
   msg.delete(3500);
   message.delete(3500);
 });

 if(!mention) return message.reply('**Metion The user That you Want to be unMuted**').then(msg => { // حقوق الفا كومينتي
   msg.delete(3500);
   message.delete(3500);
 });

   mention.removeRole(role);
   mention.setMute(false);
   message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `); // حقوق الفا كومينتي
}
});






client.on('message', message => {
  var prefix = "!" // البريفكس
  if(message.content.startsWith(prefix +"server")){ // الامر
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
  if(!message.channel.guild) return message.reply(' ');
  const millis = new Date().getTime() - message.guild.createdAt.getTime();
  const now = new Date();
  dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
  const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
  const days = millis / 1000 / 60 / 60 / 24;
  let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
  var embed  = new Discord.RichEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .addField("**🆔 Server ID:**", message.guild.id,true)
  .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
  .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
  .addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
  .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
  .addField("**🌍 Others **" , message.guild.region,true)
  .addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
  .setColor('#000000')
  message.channel.sendEmbed(embed)
  
  }
  });

  var fox = "By KillerFox";  // ممنوع اللمس
  var perfix = "By KillerFox";
  console.log('Code BC By KillerFox Embed and Avatar ');
  client.on('message', message => { // BY KillerFox or ALphaCodes
      if (message.author.id === client.user.id) return; // BY KillerFox or ALphaCodes
      if (message.guild) { // BY KillerFox or ALphaCodes
     let embed = new Discord.RichEmbed()
      let args = message.content.split(' ').slice(1).join(' '); // BY KillerFox or ALphaCodes
  if(message.content.split(' ')[0] == '^bc') { // غير امر او برفكس
      if (!args[1]) { // BY KillerFox or ALphaCodes
  message.channel.send("**^bc <Messages> :incoming_envelope:  **"); // ممنوع المس
  return;
  }
          message.guild.members.forEach(m => {
     if(!message.member.hasPermission('ADMINISTRATOR')) return; // ممنوع اللمس
              var bc = new Discord.RichEmbed()
              .setThumbnail(client.user.avatarURL)
              .addField(':beginner: Server :beginner: :twisted_rightwards_arrows: ', `${message.guild.name}`)
              .addField(':heartpulse:  Sender :heartpulse: :twisted_rightwards_arrows: ', `${message.author.username}#${message.author.discriminator}`)
              .addField(':scroll: Message :scroll: :twisted_rightwards_arrows: ', args)
              .addField(':gemini: My Language :gemini: :twisted_rightwards_arrows: ',` JavaScript `)
              .setFooter('Developed By The_Dark') // حط اي شي تبيه
              .setColor('RANDOM')
              // m.send(`[${m}]`);
              m.send(`${m}`,{embed: bc});
          });
      }
      } else {
          return;
      }
  });



client.on('message', msg => {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;
        let command = msg.content.split(" ")[0];
        command = command.slice(prefix.length);
        let args = msg.content.split(" ").slice(1);
       
          if(command === "clear") {
              const emoji = client.emojis.find("name", "wastebasket")
          let textxt = args.slice(0).join("");
          if(msg.member.hasPermission("MANAGE_MESSAGES")) {
          if (textxt == "") {
              msg.delete().then
          msg.channel.send("**Please Type Numbers oF the messages that will be deleted.**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
    msg.channel.send(" :white_check_mark: Messages Deleted.")
        msg.channel.send("incidents").then(m => m.delete(3000));
      }    
  }
}
});

client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Please Metion The user**");
  if(!reason) return message.reply ("**Type The Reason Please**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**i Can't Ban A User That Had A hight Role More Then Me**");

  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**:white_check_mark: Success Banned** ✅");
}
});

client.on('message', message => {//Mrx - Dev
  if (message.content.startsWith(prefix + 'sug')) {//Mrx - Dev
      if (message.author.bot) return//Mrx - Dev
      if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//Mrx - Dev
      var args =  message.content.split(' ').slice(1).join(' ')//Mrx - Dev
      if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})//Mrx - Dev
      let Room = message.guild.channels.find(`name`, "suggestions")//Mrx - Dev
      if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))//Mrx - Dev
      let embed = new Discord.RichEmbed()//Mrx - Dev
      .setColor('RANDOM')//Mrx - Dev
      .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)//Mrx - Dev
     .addField('**Suggestion**',`${args}`)//Mrx - Dev
     .setThumbnail(message.author.avatarURL)//Mrx - Dev
     .setFooter(`ID: ${message.author.id}`)//Mrx - Dev
     Room.sendEmbed(embed).then(c => {//Mrx - Dev
         c.react('✅').then(() => //Mrx - Dev
             c.react('❌'))//Mrx - Dev
         
     }).catch(e => console.error(e)//Mrx - Dev
     )
 }//Mrx - Dev
});//Mrx - Dev







client.on('message', message => {
  if (message.content.includes('discord.gg')){
                      if(!message.channel.guild) return message.reply ('')
                  if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
     message.channel.send('kick <@' + message.author.id + '>')
     message.delete() 
     } /////////////// Galal , ALPHA CODES
  } /////////////// Galal , ALPHA CODES
        if (message.content.startsWith("kick")) {
           if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
           var member= message.mentions.members.first();
           member.kick().then((member) => {
               message.channel.sendMessage("", {embed: {
               author: {  /////////////// Galal , ALPHA CODES
               },  /////////////// Galal , ALPHA CODES
               title: 'For Adv'  + member.displayName + ' Kicked', 
               color: 490101,
               }
             });
         }  /////////////// Galal , ALPHA CODES
       ) 
     }  /////////////// Galal , ALPHA CODES
 });  /////////////// Galal , ALPHA CODES


client.login(process.env.BOT_TOKEN);

