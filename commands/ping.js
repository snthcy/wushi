import Command from '../models/Command'

class WhoIsCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ping',
      description: 'Gets the bot\'s latency.',
      category: 'Meta',
      aliases: ['ping-pong', 'ms', 'bot-ping'],
      usage: 'ping',
      cooldown: 1
    })
  }

  async run (bot, msg, args) {
    try {
      const message = await msg.channel.send('🏓 Ping!')
      message.edit(`🏓 Pong! (:heart: Roundtrip took: ${message.createdTimestamp - msg.createdTimestamp}ms. 💙: ${Math.round(this.client.ws.ping)}ms.)`)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = WhoIsCommand
